export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-paper/50 border-t border-paper/10">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs uppercase tracking-widest2">
        <span>&copy; {year} RA &amp; Partners — Rully Amirulloh And Partners</span>
        <span>Advokat &amp; Investigator · Jakarta Selatan</span>
      </div>
    </footer>
  );
}
