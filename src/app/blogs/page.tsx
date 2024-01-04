// import Layout from '@/components/global/layout/Layout';
import Seo from '@/components/global/Seo';
// import { Blogdata } from '@/containers/home-page/devblog-section/index';

export default function page() {
  // const blogdata = Blogdata();
  return (
    <>
      <Seo templateTitle='More blogs' />
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
