import { Card, CardActions, CardContent, Typography } from '@mui/material';
import { VFC } from 'react';
import AddButton from './AddButton';
import TaskCard from './TaskCard';

const TaskGroup: VFC = () => (
  <>
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Group name
        </Typography>
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </CardContent>
      <CardActions>
        <AddButton />
      </CardActions>
    </Card>
  </>
);

export default TaskGroup;
