export default function SectionHeading({ id, children }) {
  return (
    <h2
      id={id}
      className="font-display font-bold text-3xl sm:text-4xl tracking-tight max-w-3xl"
    >
      {children}
    </h2>
  );
}
