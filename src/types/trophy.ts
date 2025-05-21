
export interface Trophy {
  id: string;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedDate?: Date;
  courseRequired?: string;
  activityRequired?: string;
}
