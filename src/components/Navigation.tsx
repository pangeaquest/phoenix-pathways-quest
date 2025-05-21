
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Trophy, 
  Award, 
  BookOpen,
  Calendar,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [active, setActive] = useState("home");
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 md:hidden z-10">
      <div className="flex justify-between items-center">
        <Link to="/">
          <Button 
            variant={active === "home" ? "default" : "ghost"} 
            size="sm" 
            className={`flex flex-col items-center rounded-xl ${active === "home" ? 'bg-phoenix-800' : ''}`} 
            onClick={() => setActive("home")}
          >
            <Trophy size={18} />
            <span className="text-xs mt-1">Home</span>
          </Button>
        </Link>
        
        <Link to="/badges">
          <Button 
            variant={active === "badges" ? "default" : "ghost"} 
            size="sm" 
            className={`flex flex-col items-center rounded-xl ${active === "badges" ? 'bg-phoenix-800' : ''}`} 
            onClick={() => setActive("badges")}
          >
            <Award size={18} />
            <span className="text-xs mt-1">Badges</span>
          </Button>
        </Link>
        
        <Link to="/courses">
          <Button 
            variant={active === "courses" ? "default" : "ghost"} 
            size="sm" 
            className={`flex flex-col items-center rounded-xl ${active === "courses" ? 'bg-phoenix-800' : ''}`} 
            onClick={() => setActive("courses")}
          >
            <BookOpen size={18} />
            <span className="text-xs mt-1">Courses</span>
          </Button>
        </Link>
        
        <Link to="/schedule">
          <Button 
            variant={active === "schedule" ? "default" : "ghost"} 
            size="sm" 
            className={`flex flex-col items-center rounded-xl ${active === "schedule" ? 'bg-phoenix-800' : ''}`} 
            onClick={() => setActive("schedule")}
          >
            <Calendar size={18} />
            <span className="text-xs mt-1">Schedule</span>
          </Button>
        </Link>
        
        <Link to="/profile">
          <Button 
            variant={active === "profile" ? "default" : "ghost"}
            size="sm" 
            className={`flex flex-col items-center rounded-xl ${active === "profile" ? 'bg-phoenix-800' : ''}`} 
            onClick={() => setActive("profile")}
          >
            <User size={18} />
            <span className="text-xs mt-1">Profile</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
