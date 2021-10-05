import { Card, CardActions, CardContent, Typography } from '@mui/material';
import { VFC } from 'react';
import { Task } from 'types/Task';
import AddButton from './AddButton';
import TaskCard from './TaskCard';

type Props = {
  tasks: Task[];
  addTask: () => void;
  removeTask: (targetTask: Task) => void;
  updateTask: (targetTask: Task, editedTask: Task) => void;
};

const TaskGroup: VFC<Props> = ({ tasks, addTask, removeTask, updateTask }) => (
  <>
    <Card sx={{ width: 320 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Group name
        </Typography>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            removeTask={removeTask}
            updateTask={updateTask}
          />
        ))}
      </CardContent>
      <CardActions>
        <AddButton onClick={addTask} />
      </CardActions>
    </Card>
  </>
);

export default TaskGroup;
