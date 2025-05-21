
import { useState, useEffect } from 'react';
import { toast } from "sonner";

interface XPBarProps {
  currentXP: number;
  maxXP: number;
  onXPIncrease: () => void;
}

const XPBar = ({ currentXP, maxXP, onXPIncrease }: XPBarProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const percentComplete = Math.min((currentXP / maxXP) * 100, 100);

  const handleXPClick = () => {
    if (currentXP < maxXP) {
      setIsAnimating(true);
      onXPIncrease();
      toast.success("+25 XP earned!");
    } else {
      toast("You've reached the maximum XP for this level!", {
        description: "Complete more tasks to level up."
      });
    }
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 700);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div className="flex flex-col w-full mb-6">
      <div className="flex items-center gap-3">
        <button 
          className="xp-coin" 
          onClick={handleXPClick}
          aria-label="Earn XP"
        >
          XP
        </button>
        <div className="flex-1">
          <div className="progress-bar">
            <div 
              className={`progress-fill ${isAnimating ? 'transition-all' : ''}`}
              style={{ width: `${percentComplete}%` }}
            >
              <span>{currentXP}/{maxXP}</span>
            </div>
          </div>
          <div className="text-xs font-medium text-center mt-1 text-phoenix-800">
            {currentXP}/{maxXP} XP
          </div>
        </div>
      </div>
    </div>
  );
};

export default XPBar;
