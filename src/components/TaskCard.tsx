import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import { VFC } from 'react';
import { Task } from 'types/Task';
import TaskMenu from './TaskMenu';

type Props = {
  task: Task;
  removeTask: (targetTask: Task) => void;
  updateTask: (targetTask: Task, editedTask: Task) => void;
};

const TaskCard: VFC<Props> = ({ task, removeTask, updateTask }) => (
  <Card sx={{ mb: 1 }}>
    <Grid container>
      <Grid item xs={9}>
        <CardContent>
          <Typography variant="h5" component="div" sx={{ mb: 1 }}>
            {task.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            id: {task.id}
          </Typography>
        </CardContent>
      </Grid>
      <Grid item xs={3}>
        <CardActions>
          <TaskMenu
            task={task}
            removeTask={removeTask}
            updateTask={updateTask}
          />
        </CardActions>
        <CardActions>
          <Button>
            <GradeIcon />
          </Button>
        </CardActions>
      </Grid>
    </Grid>
  </Card>
);

export default TaskCard;
