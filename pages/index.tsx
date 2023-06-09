import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import iDesignExperiencesPic from '../assets/images/laptop-i-design-experiences.jpg';

const inter = Inter({ subsets: ['latin'] });

const AboveFoldSection: React.FC = () => {
  return (
    <Box sx={{ typography: 'body1' }}>
      <Container maxWidth="lg" sx={{ color: 'text.primary' }}>
        <Typography variant="body1">Hi, my name is Rachel!</Typography>
        <Typography variant="body1">I build responsive web apps.</Typography>
      </Container>
    </Box>
  );
};

const WelcomeSection: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ color: 'text.primary' }}>
      <Grid container spacing={1}>
        <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
          <Box>
            <Image
              src={iDesignExperiencesPic}
              alt="Picture of the author"
              height={260}
              width={260}
            />
          </Box>
        </Grid>
        <Grid xs={8} display="flex" alignItems="center">
          <Box>
            <Typography variant="body1">Hello and welcome!</Typography>
            <Typography variant="body1">
              I'm a software developer with a passion for creating innovative
              solutions using the latest technologies. Whether you need a
              responsive web design, a robust application, or a cutting-edge
              system integration, I am here to help.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome | RachelDotey.ninja</title>
      </Head>
      <main>
        <AboveFoldSection />
        <WelcomeSection />
      </main>
    </>
  );
}
