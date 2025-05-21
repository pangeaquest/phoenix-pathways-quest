
import { Trophy } from "lucide-react";

interface StreakTrackerProps {
  streakCount: number;
}

const StreakTracker = ({ streakCount }: StreakTrackerProps) => {
  return (
    <div className="streak-badge mb-6">
      <Trophy className="text-orange-500" size={20} />
      <span>{streakCount} {streakCount === 1 ? 'Week' : 'Week'} Streak</span>
    </div>
  );
};

export default StreakTracker;
