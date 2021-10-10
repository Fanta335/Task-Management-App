import { VFC } from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Button } from '@mui/material';
import { Group } from 'types/Group';

type Props = {
  addTask: (parentGroup: Group) => void;
  group: Group;
};

const AddButton: VFC<Props> = ({ addTask, group }) => (
  <div>
    <Button onClick={() => addTask(group)}>
      <AddBoxIcon />
      New Task
    </Button>
  </div>
);

export default AddButton;
