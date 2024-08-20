import Navbar from "../components/navbar/navbar";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
      <div className="px-4">{children}</div>
  );
}
