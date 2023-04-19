import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import githubIcon from './icons/github.png';
import linkedinIcon from './icons/linkedin.png';
import twitterIcon from './icons/twitter.png';

export default function FollowMySocials() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Image src={githubIcon} alt="GitHub" height={32} width={32} />
        <Image src={linkedinIcon} alt="GitHub" height={32} width={32} />
        <Image src={twitterIcon} alt="GitHub" height={32} width={32} />
      </Stack>
    </Box>
  );
}

export { FollowMySocials };
