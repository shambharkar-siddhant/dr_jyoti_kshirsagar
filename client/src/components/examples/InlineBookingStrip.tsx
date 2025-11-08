import InlineBookingStrip from '../InlineBookingStrip';

export default function InlineBookingStripExample() {
  return (
    <div className="min-h-screen bg-background">
      <div className="h-64 bg-muted flex items-center justify-center mb-0">
        <p className="text-muted-foreground">Hero Section Above</p>
      </div>
      <InlineBookingStrip />
      <div className="h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Content Below</p>
      </div>
    </div>
  );
}
