import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import socialsCss from './socials.module.css';

import githubIcon from './icons/github.png';
import linkedinIcon from './icons/linkedin.png';
import twitterIcon from './icons/twitter.png';

const SocialIcon: React.FC<{ alt: string; href: string; src: string }> = ({
  alt,
  href,
  src,
}) => {
  return (
    <a href={href} title={alt} target="_blank" rel="noopener noreferrer">
      <Image
        src={src}
        alt={alt}
        height={32}
        width={32}
        className={socialsCss.bounceAnimation}
      />
    </a>
  );
};

export default function FollowMySocials() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <SocialIcon
          alt="GitHub"
          href="https://github.com/racheldotey"
          src={githubIcon}
        />
        <SocialIcon
          alt="GitHub"
          href="https://www.linkedin.com/in/racheldotey"
          src={linkedinIcon}
        />
        <SocialIcon
          alt="GitHub"
          href="https://twitter.com/RaeDeveloper"
          src={twitterIcon}
        />
      </Stack>
    </Box>
  );
}

export { FollowMySocials };
