
import { Flame, Calendar } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface StreakTrackerProps {
  streakCount: number;
}

const StreakTracker = ({ streakCount }: StreakTrackerProps) => {
  // Generate days of the week for streak visualization
  const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"];
  // Mock data - in a real app this would come from user activity data
  const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
  const adjustedToday = today === 0 ? 6 : today - 1; // Convert to 0 = Monday, 6 = Sunday
  
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <Flame className="text-orange-500" size={20} />
        <span className="font-semibold">{streakCount} Week Streak</span>
      </div>
      
      <div className="flex justify-between mt-2">
        {daysOfWeek.map((day, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex flex-col items-center">
                  <div className="text-xs text-gray-500">{day}</div>
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center mt-1
                      ${index < adjustedToday ? 'bg-orange-100 text-orange-600' : 
                        index === adjustedToday ? 'bg-orange-500 text-white' : 
                        'bg-gray-100 text-gray-400'}`}
                  >
                    {index < adjustedToday ? <Check size={14} /> : 
                     index === adjustedToday ? <Calendar size={14} /> : null}
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  {index < adjustedToday ? 'Completed' : 
                   index === adjustedToday ? 'Today' : 
                   'Upcoming'}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};

export default StreakTracker;

// Import this at the top
import { Check } from "lucide-react";
