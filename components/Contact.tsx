"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

type FormData = {
  nombre: string;
  clinica: string;
  tipo: string;
  telefono: string;
  volumen: string;
  mensaje: string;
};

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError("");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contacto", ...data }),
      });
      // Netlify acepta el envío aunque devuelva redirect — siempre mostramos éxito
      setSubmitted(true);
    } catch {
      setError("Ha ocurrido un error. Por favor, inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-primary">
      <div className="max-w-3xl mx-auto px-6">

        {/* Formulario oculto para que Netlify lo detecte en el build */}
        <form name="contacto" data-netlify="true" hidden>
          <input type="text" name="nombre" />
          <input type="text" name="clinica" />
          <select name="tipo" />
          <input type="tel" name="telefono" />
          <select name="volumen" />
          <textarea name="mensaje" />
        </form>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-fraunces text-4xl md:text-5xl font-bold text-white mb-4">
            ¿Listo para no perder más pacientes?
          </h2>
          <p className="text-white/70 text-lg">
            Cuéntanos cómo es tu clínica y te preparamos una demo gratuita en 24 horas.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-accent/10 border border-accent/30 rounded-2xl p-10 text-center"
          >
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="font-fraunces text-2xl font-bold text-white mb-2">
              ¡Perfecto!
            </h3>
            <p className="text-white/70 text-lg">
              Te contactamos en menos de 24 horas.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit(onSubmit)}
            name="contacto"
            data-netlify="true"
            className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-5"
            noValidate
          >
            <input type="hidden" name="form-name" value="contacto" />

            {/* Row 1 */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-white/80 text-sm font-medium mb-1.5">
                  Nombre y apellidos *
                </label>
                <input
                  type="text"
                  placeholder="Ana García"
                  {...register("nombre", { required: "El nombre es obligatorio" })}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-accent transition-colors"
                />
                {errors.nombre && (
                  <p className="text-red-400 text-xs mt-1">{errors.nombre.message}</p>
                )}
              </div>
              <div>
                <label className="block text-white/80 text-sm font-medium mb-1.5">
                  Nombre de la clínica *
                </label>
                <input
                  type="text"
                  placeholder="Clínica Dental Sonrisa"
                  {...register("clinica", { required: "El nombre de la clínica es obligatorio" })}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-accent transition-colors"
                />
                {errors.clinica && (
                  <p className="text-red-400 text-xs mt-1">{errors.clinica.message}</p>
                )}
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-white/80 text-sm font-medium mb-1.5">
                  Tipo de clínica *
                </label>
                <select
                  {...register("tipo", { required: "Selecciona el tipo de clínica" })}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent transition-colors appearance-none"
                >
                  <option value="" className="text-gray-800">Selecciona...</option>
                  <option value="dental" className="text-gray-800">Dental</option>
                  <option value="fisioterapia" className="text-gray-800">Fisioterapia</option>
                  <option value="estetica" className="text-gray-800">Estética</option>
                  <option value="otra" className="text-gray-800">Otra</option>
                </select>
                {errors.tipo && (
                  <p className="text-red-400 text-xs mt-1">{errors.tipo.message}</p>
                )}
              </div>
              <div>
                <label className="block text-white/80 text-sm font-medium mb-1.5">
                  Teléfono de WhatsApp *
                </label>
                <input
                  type="tel"
                  placeholder="+34 600 000 000"
                  {...register("telefono", {
                    required: "El teléfono es obligatorio",
                    pattern: {
                      value: /^[+\d\s\-()]{7,20}$/,
                      message: "Introduce un teléfono válido",
                    },
                  })}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-accent transition-colors"
                />
                {errors.telefono && (
                  <p className="text-red-400 text-xs mt-1">{errors.telefono.message}</p>
                )}
              </div>
            </div>

            {/* Row 3 */}
            <div>
              <label className="block text-white/80 text-sm font-medium mb-1.5">
                ¿Cuántos WhatsApps recibís al día aproximadamente? *
              </label>
              <select
                {...register("volumen", { required: "Este campo es obligatorio" })}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent transition-colors appearance-none"
              >
                <option value="" className="text-gray-800">Selecciona...</option>
                <option value="menos10" className="text-gray-800">Menos de 10</option>
                <option value="10-30" className="text-gray-800">Entre 10 y 30</option>
                <option value="mas30" className="text-gray-800">Más de 30</option>
              </select>
              {errors.volumen && (
                <p className="text-red-400 text-xs mt-1">{errors.volumen.message}</p>
              )}
            </div>

            {/* Row 4 */}
            <div>
              <label className="block text-white/80 text-sm font-medium mb-1.5">
                Mensaje (opcional)
              </label>
              <textarea
                rows={4}
                placeholder="Cuéntanos algo más sobre tu clínica si quieres..."
                {...register("mensaje")}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            {/* RGPD */}
            <p className="text-white/40 text-xs leading-relaxed">
              Al enviar este formulario aceptas nuestra{" "}
              <a href="/privacy" className="text-accent hover:underline">
                Política de Privacidad
              </a>
              . Tus datos no serán compartidos con terceros.
            </p>

            {error && (
              <p className="text-red-400 text-sm bg-red-400/10 rounded-xl px-4 py-3">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-accent text-primary font-semibold py-4 rounded-full hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              {loading ? "Enviando..." : "Solicitar demo gratuita →"}
            </button>
          </motion.form>
        )}

        {/* WhatsApp alternative */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-white/50 text-sm mt-8"
        >
          ¿Prefieres hablar ahora?{" "}
          <a
            href="https://wa.me/34690064125?text=Hola%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20Dencitia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline font-medium"
          >
            → Escríbenos por WhatsApp
          </a>
        </motion.p>
      </div>
    </section>
  );
}
