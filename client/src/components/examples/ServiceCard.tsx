import ServiceCard from '../ServiceCard';
import { Sparkles } from 'lucide-react';

export default function ServiceCardExample() {
  return (
    <div className="p-4 max-w-sm">
      <ServiceCard
        id="cleaning"
        title="Cleaning & Polishing"
        description="Fresher breath, brighter smile"
        icon={Sparkles}
      />
    </div>
  );
}
