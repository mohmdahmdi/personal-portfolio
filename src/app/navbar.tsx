import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-7 border-b mx-4 sticky">
      <div className="anton">MA</div>
      <div className="fjalla flex">
        <Link href="/experience" className="px-5 cursor-pointer">Experience</Link>
        <div className="px-5 cursor-pointer">Projects</div>
        <div className="px-5 cursor-pointer">About</div>
        <div className="px-5 cursor-pointer">Contact</div>
      </div>
    </nav>
  );
};

export default Navbar;
