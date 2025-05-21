
import { Flame } from "lucide-react";

interface StreakTrackerProps {
  streakCount: number;
}

const StreakTracker = ({ streakCount }: StreakTrackerProps) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-2">
      <Flame className="text-orange-500" size={20} />
      <span className="font-semibold">{streakCount} Week Streak</span>
    </div>
  );
};

export default StreakTracker;
