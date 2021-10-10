import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { useState, VFC } from 'react';
import { Group } from 'types/Group';
import { Task } from 'types/Task';
import AddTaskButton from './AddTaskButton';
import TaskCard from './TaskCard';

type Props = {
  allGroups: Group[];
  group: Group;
  tasks: Task[];
  addTask: (parentGroup: Group) => void;
  removeTask: (targetTask: Task) => void;
  updateTask: (targetTask: Task, editedTask: Task) => void;
  renameGroup: (prevName: string, newName: string) => void;
};

const TaskGroup: VFC<Props> = ({
  allGroups,
  group,
  tasks,
  addTask,
  removeTask,
  updateTask,
  renameGroup,
}) => {
  const [currentGroupName, setGroupName] = useState(group.name);
  const newGroupName = () => {
    const newName = 'newwww';
    renameGroup(group.name, newName);
    setGroupName(newName);
  };

  return (
    <>
      <Card sx={{ width: 320 }}>
        <CardContent>
          <CardActionArea onClick={newGroupName}>
            {currentGroupName === '' ? (
              <Typography variant="h5" component="div" color="text.secondary">
                untitled group
              </Typography>
            ) : (
              <Typography variant="h5" component="div">
                {currentGroupName}
              </Typography>
            )}
          </CardActionArea>
          {tasks.map((task) => (
            <TaskCard
              allGroups={allGroups}
              key={task.id}
              task={task}
              removeTask={removeTask}
              updateTask={updateTask}
            />
          ))}
        </CardContent>
        <CardActions>
          <AddTaskButton addTask={addTask} group={group} />
        </CardActions>
      </Card>
    </>
  );
};

export default TaskGroup;
