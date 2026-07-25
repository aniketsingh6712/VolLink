export function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
        {title}
      </h3>

      <div className="space-y-4">{children}</div>
    </div>
  );
}