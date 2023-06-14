import MyProfilePic from '@/components/blogs/MyProfilePic';
import Navbar from '@/components/blogs/Navbar';
import Posts from '@/components/blogs/Posts';

export const revalidate = 86400;

export default function Home() {
  return (
    <>
      <Navbar />

      <div className='px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto dark:bg-slate-800'>
        <div className='mx-auto'>
          <MyProfilePic />
          <p className='mt-12 mb-12 text-3xl text-center dark:text-white'>
            Hello and Welcome 👋&nbsp;
            <span className='whitespace-nowrap'>
              I'm <span className='font-bold'>Dave</span>.
            </span>
          </p>
          {/* @ts-expect-error Server Component */}
          <Posts />
        </div>
      </div>
    </>
  );
}
