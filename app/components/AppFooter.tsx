'use client';

import * as React from 'react';
import Container from '@mui/material/Container';

const copyright = `© 2012-${new Date().getFullYear()} Rachel Dotey, Web & App Development`;

export default function AppFooter() {
  return (
    <footer>
      <Container maxWidth="lg">
        <p>{copyright}</p>
      </Container>
    </footer>
  );
}
