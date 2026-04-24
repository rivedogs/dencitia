"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: "🔎",
    title: "Analizamos tu clínica y tu competencia",
    desc: "Auditamos tu presencia digital actual, revisamos qué están haciendo tus competidores en la zona y detectamos las oportunidades más rentables para ti.",
  },
  {
    number: "02",
    icon: "🎯",
    title: "Diseñamos un plan a medida",
    desc: "No hay dos clínicas iguales. Te proponemos exactamente qué servicios necesitas, en qué orden, y qué resultados puedes esperar en cada etapa.",
  },
  {
    number: "03",
    icon: "🚀",
    title: "Ejecutamos, medimos y optimizamos",
    desc: "Nos encargamos de todo. Tú te dedicas a tus pacientes. Cada mes recibes un informe claro con los resultados y los próximos pasos.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-fraunces text-4xl md:text-5xl font-bold text-primary mb-4">
            Cómo trabajamos
          </h2>
          <p className="text-text-light text-lg max-w-xl mx-auto">
            Sin reuniones interminables ni tecnicismos. Directo al grano y a los resultados.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-14 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent text-primary font-fraunces font-bold text-xl mb-6 shadow-lg shadow-accent/20">
                  {step.number}
                </div>
                <div className="text-3xl mb-3">{step.icon}</div>
                <h3 className="font-fraunces text-xl font-semibold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-text-light leading-relaxed text-sm max-w-xs mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-accent text-primary font-semibold px-8 py-4 rounded-full hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20"
          >
            Solicita tu análisis gratuito →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
