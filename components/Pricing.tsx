"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Presencia",
    price: "497",
    tagline: "Para clínicas que quieren empezar a destacar online",
    popular: false,
    features: [
      "Diseño y desarrollo web profesional",
      "SEO local (Google Maps y búsqueda)",
      "Optimización de reputación online",
      "Gestión básica de redes sociales",
      "Informe mensual de resultados",
      "Soporte por email",
    ],
    cta: "Empezar con Presencia",
  },
  {
    name: "Crecimiento",
    price: "897",
    tagline: "Para clínicas que quieren llenar la agenda",
    popular: true,
    features: [
      "Todo lo del plan Presencia",
      "Campañas de Google Ads y Meta Ads",
      "Agente IA para WhatsApp 24/7",
      "Email marketing y automatizaciones",
      "Gestión avanzada de redes sociales",
      "Soporte prioritario por WhatsApp",
    ],
    cta: "Empezar con Crecimiento",
  },
  {
    name: "Agencia Completa",
    price: null,
    tagline: "Para clínicas que quieren dominar su mercado",
    popular: false,
    features: [
      "Todo lo del plan Crecimiento",
      "CRM personalizado para tu clínica",
      "Integración con tu software de gestión",
      "Estrategia digital 360°",
      "Informes avanzados de conversiones",
      "Gestor de cuenta dedicado",
    ],
    cta: "Solicitar presupuesto",
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-fraunces text-4xl md:text-5xl font-bold text-primary mb-4">
            Planes simples, sin letra pequeña
          </h2>
          <p className="text-text-light text-lg max-w-xl mx-auto">
            Sin permanencia. Cancela cuando quieras. Setup incluido.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`relative rounded-2xl p-8 flex flex-col gap-6 ${
                plan.popular
                  ? "bg-primary border-2 border-accent shadow-2xl shadow-primary/20 scale-105"
                  : "bg-surface border border-gray-100 shadow-sm"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-primary text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                    ⭐ Más popular
                  </span>
                </div>
              )}

              <div>
                <h3 className={`font-fraunces text-2xl font-bold mb-1 ${plan.popular ? "text-white" : "text-primary"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? "text-accent/80" : "text-text-light"}`}>
                  {plan.tagline}
                </p>
              </div>

              <div>
                {plan.price ? (
                  <>
                    <div className="flex items-end gap-1">
                      <span className={`font-fraunces text-5xl font-bold ${plan.popular ? "text-white" : "text-primary"}`}>
                        {plan.price}€
                      </span>
                      <span className={`text-sm mb-2 ${plan.popular ? "text-white/60" : "text-text-light"}`}>
                        /mes
                      </span>
                    </div>
                    <p className={`text-xs mt-1 ${plan.popular ? "text-white/50" : "text-text-light"}`}>
                      Setup inicial incluido en el primer mes
                    </p>
                  </>
                ) : (
                  <>
                    <p className="font-fraunces text-3xl font-bold text-primary">
                      Presupuesto personalizado
                    </p>
                    <p className="text-text-light text-xs mt-1">
                      Valoramos juntos la solución más adecuada
                    </p>
                  </>
                )}
              </div>

              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="text-accent mt-0.5 shrink-0">✅</span>
                    <span className={plan.popular ? "text-white/80" : "text-text-dark"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`inline-flex items-center justify-center w-full py-3.5 rounded-full font-semibold text-sm transition-colors ${
                  plan.popular
                    ? "bg-accent text-primary hover:bg-accent/90 shadow-lg shadow-accent/30"
                    : "bg-primary text-white hover:bg-primary/90"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-text-light text-sm mt-10"
        >
          ¿No sabes qué plan necesitas?{" "}
          <a href="#contacto" className="text-accent hover:underline font-medium">
            Cuéntanos tu situación y te asesoramos sin compromiso.
          </a>
        </motion.p>
      </div>
    </section>
  );
}
