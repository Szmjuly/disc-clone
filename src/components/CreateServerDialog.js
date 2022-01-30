import Add from '@mui/icons-material/Add';
import { Avatar, Dialog, DialogTitle, ListItemAvatar, ListItem, ListItemText, List } from '@mui/material';
import React from 'react';

export default function CreateServerDialog(props) {
    let { onClose, open } = props;
    const [createServerOpen, setCreateServerOpen] = React.useState(false);

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