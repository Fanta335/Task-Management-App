import { useState, VFC } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MenuIcon from '@mui/icons-material/Menu';
import { Task } from 'types/Task';

type Props = {
  task: Task;
  removeTask: (targetTask: Task) => void;
  updateTask: (targetTask: Task, editedTask: Task) => void;
};

const TaskMenu: VFC<Props> = ({ task, removeTask, updateTask }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleRemove = (targetTask: Task) => {
    handleClose();
    removeTask(targetTask);
  };
  const handleUpdate = (targetTask: Task, editedTask: Task) => {
    handleClose();
    updateTask(targetTask, editedTask);
  };
  const editedTask = {
    ...task,
    title: 'edited!!',
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleRemove(task)}>
          <DeleteIcon />
          Delete
        </MenuItem>
        <MenuItem onClick={() => handleUpdate(task, editedTask)}>
          <EditIcon />
          Edit
        </MenuItem>
      </Menu>
    </div>
  );
};

export default TaskMenu;
