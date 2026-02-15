export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-border)] px-4 py-8 text-center text-sm text-[var(--color-text-muted)]">
      <p>© {year} Portfolio. Hecho con Next.js y mucho café.</p>
    </footer>
  );
}
