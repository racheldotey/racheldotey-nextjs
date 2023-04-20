import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';
import Typography from '@mui/material/Typography';

import signaturePic from '../../assets/images/signature_236x64.png';

const copyright = `© 2012-${new Date().getFullYear()} Rachel Dotey, Web & App Development`;

export const AppFooter: React.FC = () => {
  return (
    <footer>
      <Box
        sx={{
          marginTop: 8,
          paddingY: 4,
          borderTop: 1,
          borderColor: 'grey.400',
        }}
      >
        <Container maxWidth="lg" sx={{ color: 'text.secondary' }}>
          <Grid container spacing={1}>
            <Grid xs={6}>
              <Image src={signaturePic} alt={copyright} />
            </Grid>
            <Grid xs={6} display="flex" justifyContent="right">
              <Typography variant="body2">{copyright}</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default AppFooter;
