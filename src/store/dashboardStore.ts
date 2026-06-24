import { create } from "zustand";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

type DashboardStore = {
  tasks: Task[];
  addTask: (text: string) => void;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
};

export const useDashboardStore = create<DashboardStore>((set) => ({
  tasks: [
    { id: 1, text: "Review dashboard design", completed: false },
    { id: 2, text: "Update weekly report", completed: true },
    { id: 3, text: "Meeting with team", completed: false },
  ],

  addTask: (text) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        { id: Date.now(), text, completed: false },
      ],
    })),

  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),

  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
}));