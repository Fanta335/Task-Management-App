import { VFC } from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Button } from '@mui/material';

const AddButton: VFC = () => (
  <div>
    <Button>
      <AddBoxIcon />
      NEW
    </Button>
  </div>
);

export default AddButton;
