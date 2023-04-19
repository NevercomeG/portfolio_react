import { Waves } from '@/components/dashboard/svg/Waves';

const MainContent = ({ children }: { children: React.ReactNode }) => (
  <main
    className='relative z-[0] flex min-h-screen w-full flex-col items-center  justify-between bg-gradient-to-b from-[#f5ccb1] to-[#d0cee2] '
    style={{
      background:
        'linear-gradient(to bottom,#f5ccb1 0%,#f5ccb1 50%, #d0cee2 50%, #d0cee2 100%) ',
    }}
  >
    {children}
    <Waves className='absolute z-[-1] h-full w-full pb-24' />
  </main>
);

export default MainContent;
