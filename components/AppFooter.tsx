import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const copyright = `© 2012-${new Date().getFullYear()} Rachel Dotey, Web & App Development`;

export default function AppFooter() {
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
          <Typography variant="body2">{copyright}</Typography>
        </Container>
      </Box>
    </footer>
  );
}
