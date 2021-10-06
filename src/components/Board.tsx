import { useCallback, useState, VFC } from 'react';
import { Grid } from '@mui/material';
import { Task } from 'types/Task';
import { v4 as uuidv4 } from 'uuid';
import AddButton from './AddButton';
import TaskGroup from './TaskGroup';

const Board: VFC = () => {
  const [tasks, setTask] = useState<Task[]>([]);
  const createTask = () => {
    const id = uuidv4();
    const newDate = new Date();
    const newTask: Task = {
      id,
      creationDate: newDate,
      updatedDate: newDate,
      group: '',
      title: '',
      comment: '',
    };

    return newTask;
  };
  const addTask = useCallback(() => {
    const newTask = createTask();
    setTask([...tasks, newTask]);
  }, [tasks]);
  const removeTask = useCallback(
    (targetTask: Task) => {
      setTask(tasks.filter((task) => task.id !== targetTask.id));
    },
    [tasks],
  );
  const updateTask = useCallback(
    (targetTask: Task, editedTask: Task) => {
      const newTasks = tasks
        .slice()
        .map((task) => (task.id === targetTask.id ? editedTask : task));
      setTask(newTasks);
    },
    [tasks],
  );

  return (
    <>
      <Grid container>
        <Grid item>
          <TaskGroup
            tasks={tasks}
            addTask={addTask}
            removeTask={removeTask}
            updateTask={updateTask}
          />
        </Grid>
        <Grid item>
          <AddButton onClick={addTask} />
        </Grid>
      </Grid>
    </>
  );
};

export default Board;
