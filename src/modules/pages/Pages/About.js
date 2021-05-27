import React from 'react';

const About = () => {
  return (
    <div className=''>
      <main className=''>
        <h1 className=''>
          Welcome to <a href='https://nextjs.org'>Crema Next.js</a>
        </h1>

        <p className=''>Get started by editing pages/about-us.js</p>

        <div className=''>
          Presenting Crema, the all in one package which uses React Hooks to
          write components more intuitively without using classes. Crema is
          purely based on Material UI components and follows Google’s Material
          Design guidelines. It is integrated with Redux and Context API for
          state management hence making it fast and reliable. It is fully RTL
          supported and multi-lingual. It uses fake API creator
          ‘axios-mock-adaptor’ to fetch Data hence making it very easy to
          integrate with real Server. Crema has integration of Storybook to
          write the story with Material-UI
        </div>
      </main>
    </div>
  );
};

export default About;
