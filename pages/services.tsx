import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const IntroSection: React.FC = () => {
  return <Paper variant="outlined">Hi</Paper>;
};

const WebDevelopmentCard: React.FC = () => {
  return (
    <Paper variant="outlined">
      <Typography variant="h4">Web Development</Typography>
      <Typography variant="body1" gutterBottom>
          In today's digital age, customers are browsing the web on their mobile
          devices more than ever before. This is why having a responsive design
          is crucial to reach your clients where they are.
      </Typography>
      <Typography variant="body1">
          Whether its a WordPress theme or a custom JavaScript single web page
          application, I focus on designing progressive web apps that provide a
          consistent experience across different devices.
      </Typography>
    </Paper>
  );
};

const AppDevelopmentCard: React.FC = () => {
  return (
    <Paper variant="outlined">
      <Typography variant="h4">App Development</Typography>
      <Typography>Web Development</Typography>
    </Paper>
  );
};

const MarketingCard: React.FC = () => {
  return (
    <Paper variant="outlined">
      <Typography variant="h4">Web Development</Typography>
      <Typography>Web Development</Typography>
    </Paper>
  );
};

export default function Services() {
  return (
    <main>
      <Container maxWidth="lg">
        <p>Services</p>

        <IntroSection />

        <Grid container spacing={1}>
          <Grid xs={4} display="flex">
            <WebDevelopmentCard />
          </Grid>
          <Grid xs={4} display="flex">
            <AppDevelopmentCard />
          </Grid>
          <Grid xs={4} display="flex">
            <MarketingCard />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

export { Services };
