import { useCallback, useState, VFC } from 'react';
import { Grid } from '@mui/material';
import { Task } from 'types/Task';
import { v4 as uuidv4 } from 'uuid';
import { Box } from '@mui/system';
import { Group } from 'types/Group';
import AddGroupButton from './AddGroupButton';
import TaskGroup from './TaskGroup';

const Board: VFC = () => {
  const [tasks, setTask] = useState<Task[]>([]);
  const [groups, setGroup] = useState<Group[]>([]);
  const createTask = (parentGroup: Group) => {
    const id = uuidv4();
    const newDate = new Date();
    const newTask: Task = {
      id,
      creationDate: newDate,
      updatedDate: newDate,
      group: parentGroup,
      title: '',
      comment: '',
      starred: false,
    };

    return newTask;
  };
  const addTask = useCallback(
    (parentGroup: Group) => {
      const newTask = createTask(parentGroup);
      setTask([...tasks, newTask]);
    },
    [tasks],
  );
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
  const toggleStarred = (targetTask: Task) => {
    const isStarred = targetTask.starred;
    const starToggledTask: Task = { ...targetTask, starred: !isStarred };
    updateTask(targetTask, starToggledTask);
  };
  const createGroup = (): Group => {
    const id = uuidv4();
    const newGroup = {
      id,
      name: '',
    };

    return newGroup;
  };
  const addGroup = () => {
    const newGroup = createGroup();
    const newGroups = [...groups, newGroup];
    setGroup(newGroups);
  };
  const isUniqueGroupName = (newName: string) => {
    for (let i = 0; i < groups.length; i++) {
      if (groups[i].name === newName) return false;
    }

    return true;
  };
  const renameGroup = (prevName: string, newName: string) => {
    if (!isUniqueGroupName(newName)) {
      alert('already exists');
    } else
      setGroup(
        groups.map((group) =>
          group.name === prevName ? { ...group, name: newName } : group,
        ),
      );
  };
  const filterredTasks = (targetGroupId: string) =>
    tasks.filter((task) => task.group.id === targetGroupId);

  return (
    <Box sx={{ p: 1 }}>
      <Grid container>
        {groups.map((group) => (
          <Grid item key={group.id}>
            <TaskGroup
              allGroups={groups}
              group={group}
              tasks={filterredTasks(group.id)}
              addTask={addTask}
              removeTask={removeTask}
              updateTask={updateTask}
              toggleStarred={toggleStarred}
              renameGroup={renameGroup}
            />
          </Grid>
        ))}
        <Grid item>
          <AddGroupButton addGroup={addGroup} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Board;
