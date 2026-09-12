export default function SectionHead({
  title,
  sub,
}: {
  title: string;
  sub: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-10 mb-12">
      <h2 className="text-[1.7rem] md:text-[2.1rem] pl-4 border-l-4 border-ember">
        {title}
      </h2>
      <p className="text-bone-soft text-[1rem] max-w-[56ch]">{sub}</p>
    </div>
  );
}
