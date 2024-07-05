const Navbar = () => {
  return (
    <nav className="flex justify-between p-7 border-b mx-4 sticky">
      <div className="anton">MA</div>
      <div className="fjalla flex">
        <div className="px-5">Experience</div>
        <div className="px-5">Projects</div>
        <div className="px-5">About</div>
        <div className="px-5">Contact</div>
      </div>
    </nav>
  );
};

export default Navbar;
