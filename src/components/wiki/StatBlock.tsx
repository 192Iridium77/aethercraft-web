export function StatBlock({
  stats,
}: {
  stats: { label: string; value: string }[];
}) {
  if (!stats.length) return null;
  return (
    <dl className="grid grid-cols-1 gap-3 border border-white/10 bg-black/20 p-4 sm:grid-cols-2">
      {stats.map((s) => (
        <div key={s.label}>
          <dt className="text-[10px] tracking-wide text-accent uppercase">
            {s.label}
          </dt>
          <dd className="mt-1 font-reading text-sm text-white/90">{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}
