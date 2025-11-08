import { useState, useRef, useEffect } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  alt?: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage, alt = "Before and After" }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSliderPosition = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    const clampedPercentage = Math.min(Math.max(percentage, 0), 100);
    setSliderPosition(clampedPercentage);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updateSliderPosition(e.clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    updateSliderPosition(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    updateSliderPosition(e.touches[0].clientX);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video rounded-lg overflow-hidden border select-none cursor-ew-resize"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      data-testid="slider-before-after"
    >
      {/* After Image (Full) */}
      <div className="absolute inset-0">
        <img
          src={afterImage}
          alt={`${alt} - After`}
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
          After
        </div>
      </div>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img
          src={beforeImage}
          alt={`${alt} - Before`}
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute top-4 left-4 bg-muted text-muted-foreground text-xs font-medium px-3 py-1 rounded-full">
          Before
        </div>
      </div>

      {/* Slider Line and Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full shadow-lg flex items-center justify-center">
          <div className="flex space-x-0.5">
            <div className="w-0.5 h-4 bg-primary-foreground rounded-full"></div>
            <div className="w-0.5 h-4 bg-primary-foreground rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
