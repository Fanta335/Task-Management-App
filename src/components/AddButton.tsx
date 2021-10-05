import { VFC } from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Button } from '@mui/material';

type Props = {
  onClick: () => void;
};

const AddButton: VFC<Props> = ({ onClick }) => (
  <div>
    <Button onClick={onClick}>
      <AddBoxIcon />
      NEW
    </Button>
  </div>
);

export default AddButton;
