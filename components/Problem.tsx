"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  {
    icon: "🌙",
    title: "Pacientes que escriben fuera de horario y nadie responde",
    desc: "El 40% de las consultas llegan por la noche o el fin de semana. Sin respuesta, van a la clínica de al lado.",
  },
  {
    icon: "📋",
    title: "Tu recepcionista responde 50 veces al día las mismas preguntas",
    desc: "Precios, horarios, si aceptáis su seguro... Tiempo que podría dedicar a pacientes ya en la clínica.",
  },
  {
    icon: "📅",
    title: "Citas canceladas o pacientes que nunca terminan de confirmar",
    desc: "Sin un seguimiento automático, muchos interesados se enfrían y no vuelven a escribir.",
  },
  {
    icon: "😤",
    title: "Competencia que ya está usando IA y atiende más rápido que tú",
    desc: "Mientras tú lees este mensaje, otra clínica puede estar captando al paciente que te acaba de escribir.",
  },
];

function ProblemCard({
  icon,
  title,
  desc,
  index,
}: {
  icon: string;
  title: string;
  desc: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-fraunces text-lg font-semibold text-primary mb-2 leading-snug">
        &ldquo;{title}&rdquo;
      </h3>
      <p className="text-text-light text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-fraunces text-4xl md:text-5xl font-bold text-primary mb-4">
            ¿Te suena esto?
          </h2>
          <p className="text-text-light text-lg max-w-xl mx-auto">
            Situaciones que le cuestan dinero a tu clínica cada día
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <ProblemCard key={i} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
