import { Group } from "./Group";

export type Task = {
  id: string; // uuidv4で生成する
  creationDate: Date;
  updatedDate: Date;
  group: Group;
  title: string;
  comment: string;
  starred: boolean;
};
