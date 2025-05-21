
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen, Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Toaster } from "sonner";
import { Badge } from "@/components/ui/badge";

interface CourseActivity {
  id: string;
  title: string;
  description: string;
  xpReward: number;
  completed: boolean;
  badgeReward?: string;
  badgeIcon?: string;
}

interface Course {
  id: string;
  title: string;
  description: string;
  progress: number;
  xpAvailable: number;
  badgesAvailable: number;
  activities: CourseActivity[];
}

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([
    {
      id: "c1",
      title: "Introduction to Business",
      description: "Learn the fundamentals of business operations",
      progress: 85,
      xpAvailable: 500,
      badgesAvailable: 3,
      activities: [
        {
          id: "a1",
          title: "Watch Introduction Video",
          description: "A 15-minute introduction to business fundamentals",
          xpReward: 50,
          completed: true,
        },
        {
          id: "a2",
          title: "Complete Quiz 1",
          description: "Test your knowledge of business basics",
          xpReward: 100,
          completed: true,
        },
        {
          id: "a3",
          title: "Submit Business Plan Draft",
          description: "Create a simple business plan outline",
          xpReward: 150,
          completed: true,
          badgeReward: "Early Bird",
          badgeIcon: "https://img.icons8.com/fluency/48/alarm-clock.png"
        },
        {
          id: "a4",
          title: "Participate in Discussion",
          description: "Share your thoughts on current business trends",
          xpReward: 75,
          completed: true,
        },
        {
          id: "a5",
          title: "Final Project",
          description: "Create and present a complete business proposal",
          xpReward: 125,
          completed: false,
          badgeReward: "Most Engaging",
          badgeIcon: "https://img.icons8.com/emoji/48/megaphone-emoji.png"
        }
      ]
    },
    {
      id: "c2",
      title: "Marketing Fundamentals",
      description: "Understand core marketing principles and strategies",
      progress: 45,
      xpAvailable: 700,
      badgesAvailable: 4,
      activities: [
        {
          id: "a6",
          title: "Marketing Basics Quiz",
          description: "Test your knowledge of marketing concepts",
          xpReward: 100,
          completed: true,
        },
        {
          id: "a7",
          title: "Create Customer Persona",
          description: "Develop detailed customer personas for a product",
          xpReward: 150,
          completed: true,
          badgeReward: "Helpful Peer",
          badgeIcon: "https://img.icons8.com/fluency/48/handshake.png"
        },
        {
          id: "a8",
          title: "Marketing Strategy Document",
          description: "Create a comprehensive marketing strategy",
          xpReward: 200,
          completed: false,
        },
        {
          id: "a9",
          title: "Group Project",
          description: "Work in a team to solve a marketing challenge",
          xpReward: 250,
          completed: false,
          badgeReward: "Comeback Kid",
          badgeIcon: "https://img.icons8.com/color/48/restart.png"
        }
      ]
    },
    {
      id: "c3",
      title: "Data Analysis",
      description: "Master the skills of analyzing and interpreting data",
      progress: 20,
      xpAvailable: 800,
      badgesAvailable: 5,
      activities: [
        {
          id: "a10",
          title: "Introduction to Spreadsheets",
          description: "Learn basic spreadsheet functions for data analysis",
          xpReward: 75,
          completed: true,
        },
        {
          id: "a11",
          title: "Data Visualization Exercise",
          description: "Create insightful charts from sample data",
          xpReward: 125,
          completed: false,
          badgeReward: "Data Wizard",
          badgeIcon: "https://img.icons8.com/fluency/48/wizards-hat.png"
        }
      ]
    },
    {
      id: "c4",
      title: "Business Communication",
      description: "Develop effective communication skills for business",
      progress: 0,
      xpAvailable: 600,
      badgesAvailable: 3,
      activities: []
    }
  ]);

  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<CourseActivity | null>(null);
  const [isCourseDialogOpen, setIsCourseDialogOpen] = useState(false);
  const [isActivityDialogOpen, setIsActivityDialogOpen] = useState(false);

  const handleCourseClick = (course: Course) => {
    setSelectedCourse(course);
    setIsCourseDialogOpen(true);
  };

  const handleActivityClick = (activity: CourseActivity) => {
    setSelectedActivity(activity);
    setIsActivityDialogOpen(true);
  };

  const handleCompleteActivity = (courseId: string, activityId: string) => {
    // Update course activity to completed
    setCourses(courses.map(course => {
      if (course.id === courseId) {
        const updatedActivities = course.activities.map(activity => {
          if (activity.id === activityId && !activity.completed) {
            return { ...activity, completed: true };
          }
          return activity;
        });
        
        // Calculate new progress percentage
        const completedCount = updatedActivities.filter(a => a.completed).length;
        const totalCount = updatedActivities.length;
        const newProgress = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
        
        return {
          ...course,
          activities: updatedActivities,
          progress: newProgress
        };
      }
      return course;
    }));

    if (selectedActivity?.badgeReward) {
      toast.success(`Badge Earned: ${selectedActivity.badgeReward}`, {
        description: "A new badge has been added to your collection!"
      });
    } else {
      toast.success(`Activity Completed`, {
        description: `You earned ${selectedActivity?.xpReward || 0} XP!`
      });
    }
    
    setIsActivityDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Toaster position="top-center" />
      <div className="max-w-md mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Your Courses</h1>
        
        <div className="space-y-4">
          {courses.map((course) => (
            <Card 
              key={course.id} 
              className="rounded-xl border-phoenix-100 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleCourseClick(course)}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{course.title}</CardTitle>
                <p className="text-sm text-gray-600">{course.description}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span className="font-medium">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
                
                <div className="flex justify-between mt-4 text-sm">
                  <div className="flex items-center text-phoenix-800">
                    <BookOpen size={16} className="mr-1" />
                    <span>{course.xpAvailable} XP available</span>
                  </div>
                  <div className="flex items-center text-amber-600">
                    <Award size={16} className="mr-1" />
                    <span>{course.badgesAvailable} badges</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <Dialog open={isCourseDialogOpen} onOpenChange={setIsCourseDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{selectedCourse?.title}</DialogTitle>
            <DialogDescription>{selectedCourse?.description}</DialogDescription>
          </DialogHeader>
          
          <Tabs defaultValue="activities" className="w-full">
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="activities">Activities</TabsTrigger>
              <TabsTrigger value="badges">Badges</TabsTrigger>
            </TabsList>
            
            <TabsContent value="activities" className="space-y-4">
              <p className="text-sm text-gray-600">Complete activities to earn XP and badges:</p>
              
              {selectedCourse?.activities.map((activity) => (
                <div 
                  key={activity.id}
                  className="p-3 bg-white rounded-lg border border-gray-200 flex justify-between items-center hover:bg-gray-50 cursor-pointer"
                  onClick={() => handleActivityClick(activity)}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${activity.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                        {activity.completed ? <Check size={12} /> : null}
                      </div>
                      <span className={`font-medium ${activity.completed ? 'text-gray-700' : 'text-gray-900'}`}>{activity.title}</span>
                    </div>
                    <p className="text-xs text-gray-500 ml-7">{activity.description}</p>
                    {activity.badgeReward && (
                      <div className="ml-7 mt-1">
                        <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">
                          <Award size={12} className="mr-1" />
                          Badge: {activity.badgeReward}
                        </Badge>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-red-900 bg-red-100 px-2 py-1 rounded-full">{activity.xpReward} XP</span>
                    <ChevronRight size={16} className="text-gray-400" />
                  </div>
                </div>
              ))}
            </TabsContent>
            
            <TabsContent value="badges">
              <div className="grid grid-cols-1 gap-4">
                {selectedCourse?.activities
                  .filter(activity => activity.badgeReward)
                  .map((activity) => (
                    <div 
                      key={activity.id} 
                      className={`p-4 rounded-xl flex items-center gap-3 ${
                        activity.completed 
                          ? "bg-amber-50 border border-amber-100" 
                          : "bg-gray-100 opacity-60"
                      }`}
                    >
                      <div className="badge-icon">
                        <img src={activity.badgeIcon} alt={activity.badgeReward} className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{activity.badgeReward}</div>
                        <div className="text-gray-600 text-xs">Complete "{activity.title}" to earn this badge</div>
                      </div>
                      {activity.completed ? (
                        <div className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                          Earned
                        </div>
                      ) : (
                        <div className="text-xs px-2 py-1 bg-gray-200 text-gray-600 rounded-full">
                          Locked
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
      
      <Dialog open={isActivityDialogOpen} onOpenChange={setIsActivityDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{selectedActivity?.title}</DialogTitle>
            <DialogDescription>{selectedActivity?.description}</DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <div className="flex items-center justify-between mb-4">
              <div className="text-lg font-semibold">Reward:</div>
              <div className="text-red-900 font-bold">{selectedActivity?.xpReward} XP</div>
            </div>
            
            {selectedActivity?.badgeReward && (
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 flex items-center gap-3 mb-4">
                <div className="badge-icon">
                  <img src={selectedActivity.badgeIcon} alt={selectedActivity.badgeReward} className="w-10 h-10" />
                </div>
                <div>
                  <div className="font-semibold">{selectedActivity.badgeReward} Badge</div>
                  <div className="text-xs text-gray-600">Complete this activity to earn this badge</div>
                </div>
              </div>
            )}
            
            <div className="text-sm text-gray-600">
              {selectedActivity?.completed 
                ? "You've already completed this activity." 
                : "Ready to complete this activity?"}
            </div>
          </div>
          
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsActivityDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button 
              className="bg-red-900 hover:bg-red-800"
              onClick={() => selectedCourse && selectedActivity && handleCompleteActivity(selectedCourse.id, selectedActivity.id)}
              disabled={selectedActivity?.completed}
            >
              {selectedActivity?.completed ? "Completed" : "Mark as Complete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Navigation />
    </div>
  );
};

export default Courses;
