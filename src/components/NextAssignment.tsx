
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

interface NextAssignmentProps {
  courseName: string;
  dueDate: Date;
  xpReward: number;
}

const NextAssignment = ({ courseName, dueDate, xpReward }: NextAssignmentProps) => {
  const formattedDate = format(dueDate, "MM/dd");
  
  return (
    <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
      <div className="flex items-center gap-2 mb-2">
        <Calendar size={18} className="text-blue-600" />
        <h3 className="font-semibold text-lg">Next Assignment</h3>
      </div>
      
      <p className="text-gray-700 mb-3">
        Submit your <span className="font-medium">{courseName}</span> assignment by {formattedDate} to earn <span className="font-medium text-phoenix-800">{xpReward} XP</span>.
      </p>
      
      <Button 
        variant="outline" 
        className="w-full border-blue-200 text-blue-700 hover:bg-blue-100"
      >
        View Assignment Details
      </Button>
    </div>
  );
};

export default NextAssignment;
