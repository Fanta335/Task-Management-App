import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { useState, VFC } from 'react';
import { Task } from 'types/Task';
import TaskMenu from './TaskMenu';
import TaskPage from './TaskPage';

type Props = {
  task: Task;
  removeTask: (targetTask: Task) => void;
  updateTask: (targetTask: Task, editedTask: Task) => void;
};

const TaskCard: VFC<Props> = ({ task, removeTask, updateTask }) => {
  const [open, setOpen] = useState(false);
  const [starred, setStarred] = useState<boolean>(task.starred);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const toggleStarred = () => {
    setStarred(!starred);
  };

  return (
    <>
      <Card sx={{ mb: 1 }}>
        <Grid container>
          <Grid item xs={9}>
            <CardActionArea onClick={handleClickOpen}>
              <CardContent sx={{ minHeight: 75 }}>
                {task.title === '' ? (
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ mb: 1 }}
                    color="text.secondary"
                  >
                    Untitled
                  </Typography>
                ) : (
                  <Typography variant="h5" component="div" sx={{ mb: 1 }}>
                    {task.title}
                  </Typography>
                )}
                <Typography variant="body2" color="text.secondary">
                  Comment: {task.comment}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Grid>
          <Grid item xs={3}>
            <CardActions>
              <TaskMenu
                task={task}
                removeTask={removeTask}
                updateTask={updateTask}
                taskPageOpen={open}
                handleTaskPageClose={handleClose}
                handleClickTaskPageOpen={handleClickOpen}
              />
            </CardActions>
            <CardActions>
              <Button onClick={toggleStarred}>
                {starred ? <StarIcon /> : <StarOutlineIcon />}
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
      <TaskPage
        task={task}
        open={open}
        handleClose={handleClose}
        updateTask={updateTask}
      />
    </>
  );
};

export default TaskCard;
