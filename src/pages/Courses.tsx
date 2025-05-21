
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen } from "lucide-react";

interface Course {
  id: string;
  title: string;
  description: string;
  progress: number;
  xpAvailable: number;
  badgesAvailable: number;
}

const Courses = () => {
  const [courses] = useState<Course[]>([
    {
      id: "c1",
      title: "Introduction to Business",
      description: "Learn the fundamentals of business operations",
      progress: 85,
      xpAvailable: 500,
      badgesAvailable: 3
    },
    {
      id: "c2",
      title: "Marketing Fundamentals",
      description: "Understand core marketing principles and strategies",
      progress: 45,
      xpAvailable: 700,
      badgesAvailable: 4
    },
    {
      id: "c3",
      title: "Data Analysis",
      description: "Master the skills of analyzing and interpreting data",
      progress: 20,
      xpAvailable: 800,
      badgesAvailable: 5
    },
    {
      id: "c4",
      title: "Business Communication",
      description: "Develop effective communication skills for business",
      progress: 0,
      xpAvailable: 600,
      badgesAvailable: 3
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-md mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Your Courses</h1>
        
        <div className="space-y-4">
          {courses.map((course) => (
            <Card key={course.id} className="rounded-xl border-phoenix-100">
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
      
      <Navigation />
    </div>
  );
};

export default Courses;
