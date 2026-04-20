export default function SeparatorDiamond() {
  return (
    <div className="flex w-full items-center gap-4 mb-3.5 px-section-x">
      <div className="flex-1 h-px bg-accent"></div>
      <div className="w-1.5 h-1.5 bg-accent rotate-45"></div>
      <div className="flex-1 h-px bg-accent"></div>
    </div>
  );
}
