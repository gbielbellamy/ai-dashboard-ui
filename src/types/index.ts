export type Stat = {
  id: number;
  title: string;
  value: string;
  description: string;
  color: string;
};

export type ProductivityData = {
  day: string;
  score: number;
};

export type WeeklyActivityData = {
  day: string;
  tasks: number;
  completed: number;
};