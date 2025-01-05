export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  assignedTo: string | null;
  priority: "High" | "Medium" | "Low";
}
