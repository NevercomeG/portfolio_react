// import Layout from '@/components/global/layout/Layout';

import { Metadata } from 'next';

// import { Blogdata } from '@/containers/home-page/devblog-section/index';

export const metadata: Metadata = {
  title: 'NevercomeX 💻',
  metadataBase: new URL('https://ljjs.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'es-ES': '/es-ES',
    },
  },
  openGraph: {
    siteName: 'Portfolio Luis Solano',
    url: 'https://ljjs.com',
    type: 'website',
  },

  description:
    'Explore the diverse range of projects developed by a skilled full-stack and DevOps developer proficient in TypeScript and React. Discover cutting-edge web applications, intuitive user interfaces, and robust backend systems that showcase a passion for software engineering and problem-solving. Experience the power of TypeScript and React in action and see how they elevate the user experience to new heights.',

  robots: 'follow, index',
};

export default function page() {
  // const blogdata = Blogdata();
  return (
    <>
      {/* <Layout> */}
      <section className='flex justify-center flex-col items-center py-12 max-w-[68rem] ml-auto mr-auto w-[91%]'>
        <div className='w-full'>
          <h1 className='text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green to-white'>
            All Blogs
          </h1>
        </div>
        <div className='w-full pb-4'>
          <h2 className='text-left text-2xl text-slate-100 '>
            Showcasing My Blogs.
          </h2>
        </div>
        {/* <Bloggrid
          articles={blogdata}
          showAllArticles={true}
          hidebutton={true}
        /> */}
      </section>
      {/* </Layout> */}
    </>
  );
}
