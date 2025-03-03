import Transition from "@/utils/helpers/pageTransition";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
      <Transition>{children}</Transition>
  );
}
