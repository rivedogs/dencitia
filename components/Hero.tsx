"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const results = [
  {
    icon: "📍",
    metric: "Top 3 en Google Maps",
    detail: "en tu ciudad en 90 días",
    color: "bg-blue-50 border-blue-100",
    iconBg: "bg-blue-100",
  },
  {
    icon: "📈",
    metric: "+40% nuevos pacientes",
    detail: "de media en los primeros 3 meses",
    color: "bg-accent-soft border-accent/20",
    iconBg: "bg-accent/10",
  },
  {
    icon: "⭐",
    metric: "Más y mejores reseñas",
    detail: "estrategia de reputación incluida",
    color: "bg-amber-50 border-amber-100",
    iconBg: "bg-amber-100",
  },
  {
    icon: "🤖",
    metric: "WhatsApp 24/7",
    detail: "agente IA que nunca deja sin respuesta",
    color: "bg-purple-50 border-purple-100",
    iconBg: "bg-purple-100",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-surface">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-accent-soft rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — copy */}
          <div>
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0}
              className="inline-flex items-center gap-2 bg-accent-soft border border-accent/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-6"
            >
              <span>🦷</span>
              <span>Agencia digital especializada en clínicas dentales</span>
            </motion.div>

            <motion.h1
              variants={fadeUp} initial="hidden" animate="visible" custom={0.15}
              className="font-fraunces text-4xl md:text-5xl xl:text-[3.5rem] font-bold text-primary leading-tight mb-6"
            >
              Más pacientes para tu clínica dental,{" "}
              <span className="relative inline-block">
                sin complicaciones
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-accent rounded-full" />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={0.3}
              className="text-lg text-text-light leading-relaxed mb-8 max-w-xl"
            >
              Nos encargamos de toda tu presencia digital — web, SEO, publicidad, redes sociales y más. Tú te dedicas a tus pacientes. Nosotros a traerte más.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0.45}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 bg-accent text-primary font-bold px-8 py-4 rounded-full hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/30 text-sm"
              >
                Solicita tu análisis gratuito →
              </a>
              <a
                href="https://wa.me/34690064125?text=Hola%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20Dencitia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary font-semibold px-7 py-4 rounded-full hover:bg-primary hover:text-white transition-colors text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.107 1.517 5.833L.057 23.543a.75.75 0 00.9.9l5.71-1.46A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.5c-2.04 0-3.95-.55-5.59-1.507l-.4-.23-4.143 1.06 1.082-3.956-.261-.416A10.468 10.468 0 011.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5z" />
                </svg>
                Hablar por WhatsApp
              </a>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0.6}
              className="flex flex-wrap gap-5"
            >
              {[
                "Solo clínicas dentales",
                "Sin permanencia",
                "Resultados medibles",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2 text-sm text-text-light font-medium">
                  <span className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xs">✓</span>
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — result cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col gap-4 max-w-sm mx-auto w-full"
          >
            {/* Header card */}
            <div className="bg-primary rounded-2xl px-6 py-4 flex items-center justify-between">
              <div>
                <p className="font-fraunces text-white font-bold text-lg">Dencitia</p>
                <p className="text-accent text-xs font-medium">Tu agencia dental de confianza</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-xl">
                🦷
              </div>
            </div>

            {/* Result cards */}
            {results.map((r, i) => (
              <motion.div
                key={r.metric}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className={`rounded-2xl border p-4 flex items-center gap-4 ${r.color}`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 ${r.iconBg}`}>
                  {r.icon}
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm leading-tight">{r.metric}</p>
                  <p className="text-text-light text-xs mt-0.5">{r.detail}</p>
                </div>
              </motion.div>
            ))}

            {/* Bottom social proof */}
            <div className="bg-white border border-gray-100 rounded-2xl px-5 py-3 flex items-center gap-3 shadow-sm">
              <div className="flex -space-x-2">
                {["#00E5B4", "#0A1628", "#6B7280"].map((c, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: c }}
                  >
                    {["A", "B", "C"][i]}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-primary font-semibold text-xs">+20 clínicas dentales confían en nosotros</p>
                <div className="flex gap-0.5 mt-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-amber-400 text-xs">★</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
