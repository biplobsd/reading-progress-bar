import { useReadingProgress } from "~/hooks/useReadingProgressbar";

export default function Header() {
  const completion = useReadingProgress();

  return (
    <header
      style={{
        backgroundSize: `${completion}%`,
        backgroundRepeat: "no-repeat",
      }}
      className="sticky top-0 h-14 w-full bg-gradient-to-r from-red-500/30 from-30% to-blue-500/50 to-100% backdrop-blur-sm transition-all duration-500 ease-in-out "
    >
      <div className="text-center text-white">Header</div>
    </header>
  );
}
