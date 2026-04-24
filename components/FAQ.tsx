"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "¿Mis pacientes sabrán que están hablando con una IA?",
    a: "El agente puede presentarse como el asistente virtual de tu clínica. Muchas clínicas prefieren esta opción — los pacientes valoran la rapidez por encima de todo. Si lo prefieres, también puede derivar a una persona real cuando la consulta lo requiera.",
  },
  {
    q: "¿Necesito cambiar mi número de WhatsApp?",
    a: "No. Conectamos el agente a tu número actual de WhatsApp Business. Tus pacientes escriben como siempre.",
  },
  {
    q: "¿Cuánto tiempo tarda la puesta en marcha?",
    a: "Generalmente entre 24 y 48 horas desde que nos das la información de tu clínica. Nos encargamos de toda la configuración técnica.",
  },
  {
    q: "¿Qué pasa si el agente no sabe responder algo?",
    a: "El agente está entrenado para derivar a tu equipo cuando la consulta es compleja o requiere un humano. Nunca dejará a un paciente sin respuesta.",
  },
  {
    q: "¿Puedo cancelar en cualquier momento?",
    a: "Sí. No hay permanencia. Puedes cancelar con 30 días de preaviso. Sin penalizaciones.",
  },
  {
    q: "¿El agente funciona con cualquier tipo de clínica?",
    a: "Sí. Trabajamos con clínicas de odontología general, ortodoncia, implantología, odontología estética e infantil. El agente se adapta al vocabulario y servicios específicos de cada clínica.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="border border-gray-100 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-accent-soft/50 transition-colors"
      >
        <span className="font-semibold text-primary text-sm md:text-base">{q}</span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center text-accent transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5">
              <p className="text-text-light text-sm leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-accent-soft">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-fraunces text-4xl md:text-5xl font-bold text-primary mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-text-light text-lg">
            Todo lo que necesitas saber antes de empezar
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
