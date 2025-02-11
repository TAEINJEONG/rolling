const Badge = ({ emoji, count }) => {
  return (
    <div className="h-9 flex items-center justify-center gap-0.5 px-3 py-2 bg-black/54 rounded-[32px]">
      <span>{emoji}</span>
      {count && <span className="text-16-regular text-white">{count}</span>}
    </div>
  );
};
export default Badge;
