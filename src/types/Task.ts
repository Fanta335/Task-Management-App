export type Task = {
  id: string; // uuidv4で生成する
  creationDate: Date;
  updatedDate: Date;
  group?: string;
  title?: string;
  comment?: string;
};
