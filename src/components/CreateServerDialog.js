//React
import { useState } from 'react';

//Icons
import {Add} from '@mui/icons-material';

//Components
import { Avatar, Dialog, DialogTitle, ListItemAvatar, ListItem, ListItemText, List } from '@mui/material';

export default function CreateServerDialog(props) {
    let { onClose, open } = props;
    const [createServerOpen, setCreateServerOpen] = useState(false);

    const handleCreateServer = () => {
        setCreateServerOpen(true);
        open = false;
    }

    const handleCreateServerClose = () => {
        setCreateServerOpen(false);
    }

  return (
      <Dialog onClose={onClose} open={open}>
          <DialogTitle style={{textAlign: 'center'}}>Create a Server</DialogTitle>
          <List sx={{ pt: 0 }}>
            <ListItem button onClick={handleCreateServer}>
                <ListItemAvatar>
                    <Avatar>
                    <Add />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Create Your Own" />
            </ListItem>
          </List>

            <Dialog onClose={handleCreateServerClose} open={createServerOpen}>
                <DialogTitle style={{textAlign: 'center'}}>Customize Your Server</DialogTitle>
            </Dialog>

      </Dialog>

      
  );
}