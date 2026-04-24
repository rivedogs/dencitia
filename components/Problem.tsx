"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  {
    icon: "🔍",
    title: "Tu clínica no aparece cuando alguien busca 'dentista en [tu ciudad]'",
    desc: "El 80% de los pacientes buscan en Google antes de elegir clínica. Si no apareces en los primeros resultados, directamente no existes.",
  },
  {
    icon: "🌙",
    title: "Pacientes que escriben fuera de horario y nadie responde",
    desc: "El 40% de las consultas llegan por la noche o el fin de semana. Sin respuesta inmediata, van a la clínica de al lado.",
  },
  {
    icon: "⭐",
    title: "Tus competidores tienen más reseñas y mejor presencia online",
    desc: "Los pacientes leen reseñas antes de reservar. Una clínica con 80 reseñas en Google siempre gana a una con 12, aunque la tuya sea mejor.",
  },
  {
    icon: "💸",
    title: "Inviertes en publicidad pero no sabes si te trae pacientes reales",
    desc: "Sin una estrategia bien configurada y medida, el dinero en anuncios se evapora sin resultados claros.",
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
            Situaciones que le cuestan pacientes y dinero a tu clínica cada día
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
