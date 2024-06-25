export interface Task {
    id: string;
    title: string;
    description: string;
    status: Status;
    createdAt: Date;
    orderIndex: number;
  }

  export enum Status {
    pending = 1,
    completed
}