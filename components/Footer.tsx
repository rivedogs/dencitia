import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <span className="font-fraunces text-2xl font-bold text-white">Dencitia</span>
            <p className="text-white/40 text-sm mt-1">
              El asistente de IA para clínicas que nunca duerme
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/privacy" className="text-white/40 hover:text-accent transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/legal" className="text-white/40 hover:text-accent transition-colors">
              Aviso Legal
            </Link>
            <Link href="/cookies" className="text-white/40 hover:text-accent transition-colors">
              Cookies
            </Link>
          </nav>
        </div>

        <div className="border-t border-white/5 mt-8 pt-8 text-center">
          <p className="text-white/30 text-sm">
            © 2025 Dencitia. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
