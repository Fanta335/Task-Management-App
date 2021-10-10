import { VFC } from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Button } from '@mui/material';

type Props = {
  addGroup: () => void;
};

const AddButton: VFC<Props> = ({ addGroup }) => (
  <div>
    <Button onClick={addGroup}>
      <AddBoxIcon />
      New group
    </Button>
  </div>
);

export default AddButton;
