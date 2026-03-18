export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-12 px-6 border-t border-primary/10 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="size-6 bg-primary/20 rounded flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-xs">
              code
            </span>
          </div>
          <span className="font-bold text-slate-500">© {year} Portfolio.</span>
        </div>
        <p className="text-slate-500 text-sm">
          Hecho con Next.js y mucho café.
        </p>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-slate-500 hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-slate-500 hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-slate-500 hover:text-primary transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
