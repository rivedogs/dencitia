"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "🌐",
    name: "Diseño web",
    desc: "Webs rápidas, modernas y optimizadas para convertir visitas en citas. Diseñadas específicamente para clínicas dentales.",
  },
  {
    icon: "📍",
    name: "SEO local",
    desc: "Aparece en los primeros resultados cuando alguien busca 'dentista en [tu ciudad]'. Más visibilidad, más pacientes orgánicos.",
  },
  {
    icon: "📢",
    name: "Google Ads y Meta Ads",
    desc: "Campañas de publicidad dirigidas a pacientes de tu zona. Solo pagas cuando alguien hace clic en tu anuncio.",
  },
  {
    icon: "📱",
    name: "Redes sociales",
    desc: "Gestión de Instagram y Facebook con contenido profesional que genera confianza y atrae nuevos pacientes.",
  },
  {
    icon: "⭐",
    name: "Reputación online",
    desc: "Estrategia para conseguir más y mejores reseñas en Google. Las reseñas son el boca a boca del siglo XXI.",
  },
  {
    icon: "📧",
    name: "Email marketing",
    desc: "Automatizaciones para recordar citas, reactivar pacientes inactivos y mantener el contacto con tu base de pacientes.",
  },
  {
    icon: "🤖",
    name: "Agente IA para WhatsApp",
    desc: "Un asistente inteligente en tu WhatsApp que responde al instante, resuelve dudas y agenda citas las 24 horas.",
  },
  {
    icon: "📊",
    name: "CRM para clínicas",
    desc: "Centraliza todos tus contactos, seguimientos y oportunidades en un sistema diseñado para clínicas dentales.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-accent-soft border border-accent/20 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Nuestros servicios
          </span>
          <h2 className="font-fraunces text-4xl md:text-5xl font-bold text-primary mb-4">
            Todo lo que necesita tu clínica dental para crecer online
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            No trabajamos con todo tipo de negocios. Solo con clínicas dentales — por eso sabemos exactamente qué funciona en tu sector.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group bg-surface border border-gray-100 rounded-2xl p-6 hover:border-accent/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{service.icon}</div>
              <h3 className="font-fraunces font-semibold text-primary text-lg mb-2">
                {service.name}
              </h3>
              <p className="text-text-light text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-accent text-primary font-semibold px-8 py-4 rounded-full hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20"
          >
            Quiero saber qué necesita mi clínica →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
