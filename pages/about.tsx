import * as React from 'react';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

const AboutTextSection: React.FC = () => {
  return (
    <>
      <Divider textAlign="left">How it started</Divider>
      <p>
        Hello! I'm Rachel, a{' '}
        <a target="_blank" href="/humans.txt" title="humans.txt">
          carbon-based life form
        </a>{' '}
        who has been building websites since the{' '}
        <a
          target="_blank"
          href="https://www.webhamster.com/"
          title="The Hamster Dance"
        >
          90s
        </a>
        . That's right, I am one of the internet's original{' '}
        <a
          target="_blank"
          href="https://thehistoryoftheweb.com/postscript/what-happened-to-the-webmaster/"
          title="What Happened to the Webmaster - The History of the Web"
        >
          webmasters
        </a>
        . My skills were forged in the arena of{' '}
        <a
          target="_blank"
          href="https://wiki.archiveteam.org/index.php/GeoCities"
          title="GeoCities - Archiveteam"
        >
          GeoCities
        </a>{' '}
        before{' '}
        <a
          target="_blank"
          href="https://content.time.com/time/business/article/0,8599,1936645,00.html"
          title="Yahoo! Pulls Plug on GeoCities, Erases Internet History - TIME"
        >
          the fall
        </a>{' '}
        of the ancient digital world. My first version of JavaScript was v1.5 on{' '}
        <a
          target="_blank"
          href="https://en.wikipedia.org/wiki/Netscape_Navigator"
          title="Netscape Navigator - Wikipedia"
        >
          Netscape Navigator
        </a>{' '}
        circa 1999.
      </p>
      <Divider textAlign="left">How it's going</Divider>
      <p>
        Since then, I have evolved into a full-stack software developer with
        expertise in a wide range of technologies. My skills span across
        front-end and back-end software development, project management, search
        engine optimization, and graphic design. Additionally, I have experience
        working with the latest JavaScript frameworks such as React, Angular,
        and Vue.
      </p>
      <p>
        I specialize in building responsive and accessible websites that provide
        a seamless user experience. I use Node.js to develop single-page
        applications (SPA) and progressive web apps (PWA), as well as
        implementing web components and animations.
      </p>
      <p>
        My goal is to provide the best possible results for my clients by using
        the most suitable tools and frameworks for each project.
      </p>
    </>
  );
};

export default function About() {
  return (
    <main>
      <Container maxWidth="lg">
        <p>About</p>

        <Grid
          container
          direction="row"
          spacing={4}
          justifyContent="space-between"
          alignItems="stretch"
        >
          <Grid item xs>
            <AboutTextSection />
          </Grid>
          <Grid item xs>
            <AboutTextSection />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
