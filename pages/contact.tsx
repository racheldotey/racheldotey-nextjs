import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import FollowMySocials from '../components/follow-my-socials';

const ContactForm: React.FC = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, maxWidth: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h2">Contact Me</Typography>

      <TextField required id="email-required" label="Email" fullWidth />
      <TextField required id="name-required" label="Name" fullWidth />
      <TextField
        required
        id="reason-required"
        label="How can I help you?"
        fullWidth
        multiline
        rows={4}
      />
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Box>
  );
};

export default function Contact() {
  return (
    <main>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          spacing={4}
          justifyContent="space-between"
          alignItems="stretch"
        >
          <Grid item xs>
            <Box>
              <Typography variant="h4">Follow My Socials</Typography>
              <FollowMySocials />
            </Box>
            <Box>
              <Typography variant="h4">Reach Out</Typography>
              <Typography variant="body1">607-386-5872</Typography>
              <Typography variant="body1">hello@racheldotey.com</Typography>
            </Box>
            <Box>
              <Typography variant="h4">Location</Typography>
              <Typography variant="body1">
                Based in New York's Capital Region.
              </Typography>
              <Typography variant="body1">
                Working remotely everywhere.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

export { Contact };
