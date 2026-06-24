import { create } from "zustand";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

type Note = {
  id: number;
  title: string;
  content: string;
};

type DashboardStore = {
  tasks: Task[];
  addTask: (text: string) => void;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
  notes: Note[];
  addNote: (title: string, content: string) => void;
  deleteNote: (id: number) => void;
  updateNote: (id: number, title: string, content: string) => void;
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

  notes: [
    { id: 1, title: "Project Ideas", content: "Build a full stack app with React and Node.js" },
    { id: 2, title: "Meeting Notes", content: "Discuss dashboard features with the team" },
  ],

  addNote: (title, content) =>
    set((state) => ({
      notes: [
        ...state.notes,
        { id: Date.now(), title, content },
      ],
    })),

  deleteNote: (id) =>
    set((state) => ({
      notes: state.notes.filter((note) => note.id !== id),
    })),

  updateNote: (id, title, content) =>
    set((state) => ({
      notes: state.notes.map((note) =>
        note.id === id ? { ...note, title, content } : note
      ),
    })),
}));