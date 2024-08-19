import Navbar from "../components/navbar/navbar";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-2">
      <Navbar />
      <div className="px-3">{children}</div>
    </div>
  );
}
