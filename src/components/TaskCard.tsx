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
import TaskMenu from './TaskMenu';

const TaskCard: VFC = () => (
  <Card sx={{ width: 300, mb:1 }}>
    <Grid container>
      <Grid item xs={9}>
        <CardContent>
          <Typography variant="h5" component="div" sx={{ mb: 1 }}>
            task title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            comments are here.
          </Typography>
        </CardContent>
      </Grid>
      <Grid item xs={3}>
        <CardActions>
          <TaskMenu />
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
