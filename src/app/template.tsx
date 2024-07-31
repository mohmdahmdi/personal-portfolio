import Navbar from '../components/navbar';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className='px-2'>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}