import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | Dencitia",
  description: "Política de privacidad de Dencitia conforme al RGPD.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-surface font-dm">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-accent font-medium mb-8 hover:opacity-80 transition-opacity"
        >
          ← Volver a inicio
        </Link>

        <h1 className="font-fraunces text-4xl font-bold text-primary mb-4">
          Política de Privacidad
        </h1>
        <p className="text-text-light mb-10">Última actualización: enero 2025</p>

        <div className="prose prose-slate max-w-none space-y-8 text-text-dark">
          <section>
            <h2 className="font-fraunces text-2xl font-semibold text-primary mb-3">
              1. Responsable del tratamiento
            </h2>
            <p className="text-text-light leading-relaxed">
              <strong>Dencitia</strong> es la empresa responsable del tratamiento de tus datos personales.
              Puedes contactarnos en: <a href="mailto:hola@dencitia.com" className="text-accent hover:underline">hola@dencitia.com</a>
            </p>
          </section>

          <section>
            <h2 className="font-fraunces text-2xl font-semibold text-primary mb-3">
              2. Datos que recopilamos
            </h2>
            <p className="text-text-light leading-relaxed mb-3">
              A través del formulario de contacto de nuestra web recopilamos:
            </p>
            <ul className="list-disc list-inside text-text-light space-y-1">
              <li>Nombre y apellidos</li>
              <li>Nombre de la clínica</li>
              <li>Tipo de clínica</li>
              <li>Número de teléfono (WhatsApp)</li>
              <li>Volumen aproximado de mensajes</li>
              <li>Mensaje opcional con información adicional</li>
            </ul>
          </section>

          <section>
            <h2 className="font-fraunces text-2xl font-semibold text-primary mb-3">
              3. Finalidad del tratamiento
            </h2>
            <p className="text-text-light leading-relaxed">
              Los datos recogidos se utilizan exclusivamente para ponernos en contacto contigo con el fin de
              ofrecerte información sobre nuestros servicios y preparar la demo gratuita solicitada.
              No realizamos perfilado automatizado ni tomamos decisiones automatizadas basadas en tus datos.
            </p>
          </section>

          <section>
            <h2 className="font-fraunces text-2xl font-semibold text-primary mb-3">
              4. Base jurídica
            </h2>
            <p className="text-text-light leading-relaxed">
              El tratamiento de tus datos se basa en tu consentimiento expreso al enviar el formulario de contacto,
              de conformidad con el artículo 6.1.a) del Reglamento General de Protección de Datos (RGPD).
            </p>
          </section>

          <section>
            <h2 className="font-fraunces text-2xl font-semibold text-primary mb-3">
              5. Conservación de datos
            </h2>
            <p className="text-text-light leading-relaxed">
              Conservaremos tus datos durante el tiempo necesario para atender tu solicitud y, en caso de
              establecerse una relación comercial, durante la vigencia de la misma más el plazo legal exigido.
              Si no se materializa ninguna relación, los datos se eliminarán en un plazo máximo de 12 meses.
            </p>
          </section>

          <section>
            <h2 className="font-fraunces text-2xl font-semibold text-primary mb-3">
              6. Comunicación de datos a terceros
            </h2>
            <p className="text-text-light leading-relaxed">
              Tus datos no serán cedidos ni comunicados a terceros, salvo obligación legal.
              No realizamos transferencias internacionales de datos.
            </p>
          </section>

          <section>
            <h2 className="font-fraunces text-2xl font-semibold text-primary mb-3">
              7. Tus derechos
            </h2>
            <p className="text-text-light leading-relaxed mb-3">
              Puedes ejercer los siguientes derechos en cualquier momento:
            </p>
            <ul className="list-disc list-inside text-text-light space-y-1">
              <li><strong>Acceso</strong>: conocer qué datos tuyos tratamos</li>
              <li><strong>Rectificación</strong>: corregir datos inexactos</li>
              <li><strong>Supresión</strong>: solicitar la eliminación de tus datos</li>
              <li><strong>Limitación</strong>: solicitar la limitación del tratamiento</li>
              <li><strong>Portabilidad</strong>: recibir tus datos en formato estructurado</li>
              <li><strong>Oposición</strong>: oponerte al tratamiento en determinadas circunstancias</li>
            </ul>
            <p className="text-text-light leading-relaxed mt-3">
              Para ejercer estos derechos, escríbenos a{" "}
              <a href="mailto:hola@dencitia.com" className="text-accent hover:underline">hola@dencitia.com</a>.
              También tienes derecho a presentar una reclamación ante la{" "}
              <strong>Agencia Española de Protección de Datos (AEPD)</strong> en{" "}
              <a href="https://www.aepd.es" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">www.aepd.es</a>.
            </p>
          </section>

          <section>
            <h2 className="font-fraunces text-2xl font-semibold text-primary mb-3">
              8. Seguridad
            </h2>
            <p className="text-text-light leading-relaxed">
              Aplicamos medidas técnicas y organizativas adecuadas para proteger tus datos personales
              frente a accesos no autorizados, pérdida, alteración o divulgación.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
