"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: "🏥",
    title: "Nos cuentas cómo es tu clínica",
    desc: "Nos compartes información de tus servicios, precios, horarios y cómo quieres que suene tu marca. Nosotros nos encargamos del resto.",
  },
  {
    number: "02",
    icon: "🤖",
    title: "Configuramos tu agente personalizado",
    desc: "Entrenamos al agente con los datos de tu clínica. Aprende a responder como tu mejor recepcionista, disponible 24 horas al día.",
  },
  {
    number: "03",
    icon: "💬",
    title: "Lo activamos en tu WhatsApp Business",
    desc: "Tu número de WhatsApp de siempre, ahora con IA. Los pacientes no notan diferencia — solo que siempre hay alguien disponible.",
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
            Así funciona Dencitia
          </h2>
          <p className="text-text-light text-lg max-w-xl mx-auto">
            En menos de 48 horas tu clínica tiene un asistente que nunca duerme
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line (desktop) */}
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
                {/* Number badge */}
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

        {/* CTA inline */}
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
            Quiero mi agente en 48 horas →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
