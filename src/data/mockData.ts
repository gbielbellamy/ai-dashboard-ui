import type { Stat } from "../types";

export const dashboardStats: Stat[] = [
  {
    id: 1,
    title: "Productivity Score",
    value: "85%",
    description: "Above average",
    color: "#aa3bff",
  },
  {
    id: 2,
    title: "Active Tasks",
    value: "24",
    description: "4 due today",
    color: "#3b82f6",
  },
  {
    id: 3,
    title: "Weekly Progress",
    value: "72%",
    description: "On track",
    color: "#22c55e",
  },
  {
    id: 4,
    title: "AI Insights",
    value: "3",
    description: "New recommendations",
    color: "#f59e0b",
  },
];

export const productivityData = [
  { day: "Mon", score: 75 },
  { day: "Tue", score: 82 },
  { day: "Wed", score: 68 },
  { day: "Thu", score: 91 },
  { day: "Fri", score: 85 },
  { day: "Sat", score: 70 },
  { day: "Sun", score: 78 },
];

export const weeklyActivityData = [
  { day: "Mon", tasks: 8, completed: 6 },
  { day: "Tue", tasks: 12, completed: 10 },
  { day: "Wed", tasks: 7, completed: 5 },
  { day: "Thu", tasks: 15, completed: 13 },
  { day: "Fri", tasks: 10, completed: 8 },
  { day: "Sat", tasks: 5, completed: 4 },
  { day: "Sun", tasks: 3, completed: 2 },
];

export const taskDistributionData = [
  { name: "Completed", value: 45 },
  { name: "In Progress", value: 30 },
  { name: "Pending", value: 15 },
  { name: "Cancelled", value: 10 },
];