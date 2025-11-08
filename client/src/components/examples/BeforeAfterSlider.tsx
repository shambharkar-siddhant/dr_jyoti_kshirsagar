import BeforeAfterSlider from '../BeforeAfterSlider';
import beforeImg from '@assets/generated_images/Before_teeth_transformation_stained_9da03d72.png';
import afterImg from '@assets/generated_images/After_teeth_transformation_white_8ed32ff9.png';

export default function BeforeAfterSliderExample() {
  return (
    <div className="p-4 max-w-md">
      <BeforeAfterSlider
        beforeImage={beforeImg}
        afterImage={afterImg}
        alt="Teeth whitening transformation"
      />
    </div>
  );
}
