import StickyBookingBar from '../StickyBookingBar';

export default function StickyBookingBarExample() {
  return (
    <div className="min-h-screen">
      <div className="h-96 bg-muted flex items-center justify-center">
        <p className="text-muted-foreground">Scroll down to see the sticky booking bar</p>
      </div>
      <StickyBookingBar />
      <div className="h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Content below</p>
      </div>
    </div>
  );
}
