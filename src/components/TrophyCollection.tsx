
import { Trophy } from "@/types/trophy";
import { Button } from "@/components/ui/button";
import { Trophy as TrophyIcon } from "lucide-react";

interface TrophyCollectionProps {
  trophies: Trophy[];
}

const TrophyCollection = ({ trophies }: TrophyCollectionProps) => {
  return (
    <div className="mb-6">
      <h3 className="font-semibold text-lg mb-3">Trophies</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {trophies.map((trophy) => (
          <div key={trophy.id} className="badge-card">
            <div className="badge-icon">
              <img src={trophy.icon} alt={trophy.name} className="w-7 h-7" />
            </div>
            <div className="text-sm">
              <div className="font-medium">{trophy.name}</div>
              <div className="text-gray-600 text-xs">{trophy.description}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-3">
        <Button variant="outline" className="text-phoenix-800 border-phoenix-800 hover:bg-phoenix-50">
          <TrophyIcon size={16} className="mr-2" />
          View All Trophies
        </Button>
      </div>
    </div>
  );
};

export default TrophyCollection;
