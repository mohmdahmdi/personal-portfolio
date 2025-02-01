import AboutMeSideBar from '../../../components/aboutMeSidebar/aboutMeSidebar';d
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='row-span-8 grid grid-cols-12'>
      <AboutMeSideBar />
      {children}
    </div>
  );
}
