import { useState, VFC } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Task } from 'types/Task';
import { Group } from 'types/Group';
import TaskEditWindow from './TaskEditWindow';

type Props = {
  allGroups: Group[];
  task: Task;
  removeTask: (targetTask: Task) => void;
  updateTask: (targetTask: Task, editedTask: Task) => void;
  TaskEditWindowOpen: boolean;
  handleTaskEditWindowClose: () => void;
  handleClickTaskEditWindowOpen: () => void;
};

const TaskMenu: VFC<Props> = ({
  allGroups,
  task,
  removeTask,
  updateTask,
  TaskEditWindowOpen,
  handleTaskEditWindowClose,
  handleClickTaskEditWindowOpen,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleRemove = (targetTask: Task) => {
    handleMenuClose();
    removeTask(targetTask);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={menuOpen ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleRemove(task)}>
          <DeleteIcon />
          Delete
        </MenuItem>
        <MenuItem onClick={handleClickTaskEditWindowOpen}>
          <EditIcon />
          Edit
        </MenuItem>
      </Menu>
      <TaskEditWindow
        allGroups={allGroups}
        task={task}
        open={TaskEditWindowOpen}
        handleClose={handleTaskEditWindowClose}
        updateTask={updateTask}
      />
    </div>
  );
};

export default TaskMenu;
