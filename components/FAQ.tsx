"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "¿Por qué una agencia especializada en dentistas y no una agencia generalista?",
    a: "Porque conocemos el sector. Sabemos qué servicios buscan los pacientes, cómo hablan, qué les preocupa antes de ir al dentista y qué convierte mejor en una clínica dental. Una agencia generalista tiene que aprenderlo desde cero contigo.",
  },
  {
    q: "¿Cuánto tiempo tarda en verse resultados?",
    a: "Depende del servicio. Con publicidad (Google Ads, Meta Ads) los primeros resultados se ven en 2-4 semanas. Con SEO, entre 3 y 6 meses para resultados sólidos. El agente de IA está operativo en 48 horas.",
  },
  {
    q: "¿Tengo que contratar todos los servicios?",
    a: "No. Puedes empezar con lo que más necesitas ahora mismo y ampliar más adelante. En la primera llamada analizamos tu situación y te recomendamos por dónde empezar.",
  },
  {
    q: "¿Necesito tener conocimientos técnicos?",
    a: "Para nada. Nos encargamos de todo: configuración, gestión y optimización. Tú solo tienes que aprobar el contenido y revisar los informes mensuales que te enviamos.",
  },
  {
    q: "¿Puedo cancelar en cualquier momento?",
    a: "Sí. No hay permanencia. Puedes cancelar con 30 días de preaviso y sin penalizaciones. Queremos que te quedes porque ves resultados, no porque hayas firmado un contrato.",
  },
  {
    q: "¿Trabajáis con clínicas de cualquier tamaño?",
    a: "Sí. Trabajamos con clínicas unipersonales que están empezando y con grupos de clínicas consolidados. Adaptamos el plan a tu tamaño y tus objetivos.",
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
