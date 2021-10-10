import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { useState, VFC } from 'react';
import { Group } from 'types/Group';
import { Task } from 'types/Task';

type Props = {
  allGroups: Group[];
  task: Task;
  open: boolean;
  handleClose: () => void;
  updateTask: (targetTask: Task, editedTask: Task) => void;
};

const TaskPage: VFC<Props> = ({
  allGroups,
  task,
  open,
  handleClose,
  updateTask,
}) => {
  const [currentTask, setCurrentTask] = useState(task);
  const [currentTitle, setCurrentTitle] = useState(task.title);
  const [currentComment, setCurrentComment] = useState(task.comment);
  const [currentGroup, setCurrentGroup] = useState(task.group);
  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTitle(e.target.value);
  };
  const handleChangeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentComment(e.target.value);
  };
  const handleChangeGroup = (e: SelectChangeEvent) => {
    const groupName = e.target.value;
    const selectedGroup = allGroups.filter(
      (group) => group.name === groupName,
    )[0];
    setCurrentGroup(selectedGroup);
  };
  const updatedDate = new Date();
  const editedTask: Task = {
    ...task,
    updatedDate,
    title: currentTitle,
    comment: currentComment,
    group: currentGroup,
  };
  const handleUpdateTask = (target: Task, edited: Task) => {
    updateTask(target, edited);
    setCurrentTask(editedTask);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Task edit page</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Title"
          type="text"
          fullWidth
          variant="standard"
          onChange={handleChangeTitle}
          value={currentTitle}
          autoComplete="off"
        />
        <TextField
          autoFocus
          margin="dense"
          id="comment"
          label="Comment"
          type="text"
          fullWidth
          variant="standard"
          onChange={handleChangeComment}
          value={currentComment}
          autoComplete="off"
        />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Group</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={currentGroup.name}
            onChange={handleChangeGroup}
            label="Group"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {allGroups.map((group) => (
              <MenuItem key={group.id} value={group.name}>{group.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={() => handleUpdateTask(currentTask, editedTask)}
        >
          Save the change
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskPage;
