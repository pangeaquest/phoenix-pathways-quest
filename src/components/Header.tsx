
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

interface HeaderProps {
  userName: string;
}

const Header = ({ userName }: HeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-bold">Welcome back, <span className="text-phoenix-800">{userName}</span></h1>
        <p className="text-gray-600">Keep up the great work!</p>
      </div>
      <Button variant="outline" size="icon" className="rounded-full">
        <Bell size={18} />
        <span className="sr-only">Notifications</span>
      </Button>
    </div>
  );
};

export default Header;
