import { Grid } from '@mui/material';
import { VFC } from 'react';
import AddButton from './AddButton';
import TaskGroup from './TaskGroup';

const Board: VFC = () => (
  <>
    <Grid container>
      <Grid item>
        <TaskGroup />
      </Grid>
      <Grid item>
        <TaskGroup />
      </Grid>
      <Grid item>
        <AddButton />
      </Grid>
    </Grid>
  </>
);

export default Board;
