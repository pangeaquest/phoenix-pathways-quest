
import { Badge } from "@/types/badge";
import { Button } from "@/components/ui/button";

interface BadgeCollectionProps {
  badges: Badge[];
}

const BadgeCollection = ({ badges }: BadgeCollectionProps) => {
  return (
    <div className="mb-6">
      <h3 className="font-semibold text-lg mb-3">Badges</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {badges.map((badge) => (
          <div key={badge.id} className="badge-card">
            <div className="badge-icon">
              <img src={badge.icon} alt={badge.name} className="w-7 h-7" />
            </div>
            <div className="text-sm">
              <div className="font-medium">{badge.name}</div>
              <div className="text-gray-600 text-xs">{badge.description}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-3">
        <Button variant="outline" className="text-phoenix-800 border-phoenix-800 hover:bg-phoenix-50">
          View All
        </Button>
      </div>
    </div>
  );
};

export default BadgeCollection;
