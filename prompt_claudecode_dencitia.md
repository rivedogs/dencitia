# PROMPT PARA CLAUDE CODE — WEB DENCITIA

## CONTEXTO DEL PROYECTO

Construye la web completa de **Dencitia**, una agencia digital especializada en agentes de IA para WhatsApp dirigida a clínicas dentales, de fisioterapia y estética en España. El objetivo de la web es convertir a dueños de clínicas en clientes de pago. Es una landing page de ventas, no un portfolio.

---

## STACK TÉCNICO

- **Framework**: Next.js 14 con App Router
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Idioma**: Español (España)
- **Tipografía**: Google Fonts — usa "Fraunces" para títulos (elegante, diferente, transmite confianza) y "DM Sans" para cuerpo de texto
- **Formulario de contacto**: Formulario funcional con React Hook Form. Los datos se envían a una API Route de Next.js que los guarda en un archivo JSON local (sin base de datos por ahora)
- **Favicon y metadatos**: Incluir metadatos SEO básicos (title, description, og:image)

---

## IDENTIDAD VISUAL

**Paleta de colores** (usa CSS variables):
- `--color-primary`: #0A1628 (azul marino muy oscuro — seriedad, confianza)
- `--color-accent`: #00E5B4 (verde menta brillante — tecnología, salud, modernidad)
- `--color-accent-soft`: #E8FBF6 (verde menta muy suave para fondos de sección)
- `--color-text`: #1A1A2E (casi negro para texto)
- `--color-text-light`: #6B7280 (gris para subtextos)
- `--color-white`: #FFFFFF
- `--color-surface`: #F8FFFE (fondo general, ligeramente verdoso)

**Estética**: Profesional y moderna. Fondo claro (no oscuro). Elementos con bordes suaves. El acento verde menta se usa con precisión en CTAs, iconos y highlights — nunca de forma excesiva. Transmite "tecnología al servicio de la salud", no "startup genérica de IA".

**NO usar**: fondos oscuros, gradientes púrpura, ilustraciones genéricas de robots, iconos de stock predecibles.

---

## ESTRUCTURA DE LA WEB

### SECCIÓN 1 — HERO

**Objetivo**: Captar atención y comunicar el problema/solución en 5 segundos.

Contenido:
- Badge pequeño arriba: "🤖 Agente IA para clínicas · WhatsApp 24/7"
- Título principal (H1, grande, impactante):
  **"Tu clínica pierde pacientes cada noche que no contestas el WhatsApp"**
- Subtítulo:
  "Dencitia instala un agente de inteligencia artificial en tu WhatsApp que responde al instante, resuelve dudas y agenda citas — incluso a las 11 de la noche."
- 2 CTAs:
  - Principal: "Ver cómo funciona" (scroll a sección demo)
  - Secundario: "Hablar con nosotros" (abre WhatsApp o scroll a contacto)
- Debajo de los CTAs: 3 microdatos de confianza en línea horizontal:
  - ✅ Sin permanencia
  - ✅ Configurado en 48h
  - ✅ Soporte incluido
- Visual de apoyo: Mockup de conversación de WhatsApp animado (burbujas que aparecen secuencialmente simulando una conversación real entre un paciente y el agente). La conversación de ejemplo debe ser:
  - Paciente: "Hola buenas, ¿cuánto cuesta una limpieza dental?"
  - Agente: "¡Hola! 😊 Una limpieza dental en nuestra clínica tiene un precio de 60€. ¿Quieres que te agendemos una cita? Tenemos huecos disponibles esta semana."
  - Paciente: "Sí, perfecto. ¿El jueves por la tarde?"
  - Agente: "Perfecto, te apunto el jueves a las 17:30h. Te llegará una confirmación ahora mismo. ¡Hasta el jueves! 😊"
- Las burbujas deben aparecer con animación de typing (los tres puntos) antes de cada mensaje del agente.

---

### SECCIÓN 2 — PROBLEMA

**Objetivo**: Hacer que el dueño de clínica sienta que le estamos hablando a él directamente.

Título: "¿Te suena esto?"
Subtítulo: "Situaciones que le cuestan dinero a tu clínica cada día"

Mostrar 4 tarjetas con iconos grandes y texto directo:

1. 🌙 **"Pacientes que escriben fuera de horario y nadie responde"**
   "El 40% de las consultas llegan por la noche o el fin de semana. Sin respuesta, van a la clínica de al lado."

2. 📋 **"Tu recepcionista responde 50 veces al día las mismas preguntas"**
   "Precios, horarios, si aceptáis su seguro... Tiempo que podría dedicar a pacientes ya en la clínica."

3. 📅 **"Citas canceladas o pacientes que nunca terminan de confirmar"**
   "Sin un seguimiento automático, muchos interesados se enfrían y no vuelven a escribir."

4. 😤 **"Competencia que ya está usando IA y atiende más rápido que tú"**
   "Mientras tú lees este mensaje, otra clínica puede estar captando al paciente que te acaba de escribir."

---

### SECCIÓN 3 — SOLUCIÓN / CÓMO FUNCIONA

**Objetivo**: Explicar el producto de forma simple, sin tecnicismos.

Título: "Así funciona Dencitia"
Subtítulo: "En menos de 48 horas tu clínica tiene un asistente que nunca duerme"

Mostrar 3 pasos con número grande, icono y descripción:

**Paso 1 — Nos cuentas cómo es tu clínica**
"Nos compartes información de tus servicios, precios, horarios y cómo quieres que suene tu marca. Nosotros nos encargamos del resto."

**Paso 2 — Configuramos tu agente personalizado**
"Entrenamos al agente con los datos de tu clínica. Aprende a responder como tu mejor recepcionista, disponible 24 horas al día."

**Paso 3 — Lo activamos en tu WhatsApp Business**
"Tu número de WhatsApp de siempre, ahora con IA. Los pacientes no notan diferencia — solo que siempre hay alguien disponible."

---

### SECCIÓN 4 — PLANES Y PRECIOS

**Objetivo**: Que el visitante entienda rápido qué plan necesita y se anime a contratar.

Título: "Planes simples, sin letra pequeña"
Subtítulo: "Sin permanencia. Cancela cuando quieras. Setup incluido en el primer mes."

Mostrar 3 tarjetas de precios. La del centro (Profesional) debe tener un badge "Más popular" y estar visualmente destacada (borde de acento, ligeramente más grande):

---

**PLAN ESENCIAL — 297€/mes**
*Ideal para empezar*
Setup inicial: 497€ (único)

Incluye:
- ✅ Agente IA en WhatsApp 24/7
- ✅ Responde preguntas frecuentes
- ✅ Recoge datos del paciente interesado
- ✅ Avisa a la clínica en tiempo real
- ✅ Personalizado con tu identidad
- ✅ Panel de conversaciones
- ✅ Soporte por email

CTA: "Empezar con Esencial"

---

**PLAN PROFESIONAL — 447€/mes** ⭐ MÁS POPULAR
*Para clínicas que quieren crecer*
Setup inicial: 497€ (único)

Incluye todo lo del Esencial, más:
- ✅ Gestión de citas por WhatsApp
- ✅ Recordatorios automáticos (reduce no-shows)
- ✅ Integración con Google Calendar / Calendly
- ✅ Derivación inteligente a humano
- ✅ Soporte prioritario por WhatsApp

CTA: "Empezar con Profesional"

---

**PLAN CLÍNICA DIGITAL — 697€/mes**
*Automatización completa*
Setup inicial: 497€ (único)

Incluye todo lo del Profesional, más:
- ✅ Integración con tu software de gestión
- ✅ Seguimiento post-visita automático
- ✅ Reactivación de pacientes inactivos
- ✅ Informes mensuales de conversiones
- ✅ Gestor de cuenta dedicado

CTA: "Empezar con Clínica Digital"

---

Debajo de las tarjetas, añadir una nota en texto pequeño:
"¿No estás seguro de qué plan necesitas? Escríbenos y te asesoramos sin compromiso."

---

### SECCIÓN 5 — OBJECIONES / FAQ

**Objetivo**: Eliminar las dudas más comunes antes de que el visitante cierre la web.

Título: "Preguntas frecuentes"

Implementar como acordeón (cada pregunta se expande al hacer clic):

**¿Mis pacientes sabrán que están hablando con una IA?**
"El agente puede presentarse como el asistente virtual de tu clínica. Muchas clínicas prefieren esta opción — los pacientes valoran la rapidez por encima de todo. Si lo prefieres, también puede derivar a una persona real cuando la consulta lo requiera."

**¿Necesito cambiar mi número de WhatsApp?**
"No. Conectamos el agente a tu número actual de WhatsApp Business. Tus pacientes escriben como siempre."

**¿Cuánto tiempo tarda la puesta en marcha?**
"Generalmente entre 24 y 48 horas desde que nos das la información de tu clínica. Nos encargamos de toda la configuración técnica."

**¿Qué pasa si el agente no sabe responder algo?**
"El agente está entrenado para derivar a tu equipo cuando la consulta es compleja o requiere un humano. Nunca dejará a un paciente sin respuesta."

**¿Puedo cancelar en cualquier momento?**
"Sí. No hay permanencia. Puedes cancelar con 30 días de preaviso. Sin penalizaciones."

**¿El agente funciona con cualquier tipo de clínica?**
"Sí. Tenemos experiencia con clínicas dentales, de fisioterapia, medicina estética y centros de salud privados. El agente se adapta al vocabulario y servicios de cada clínica."

---

### SECCIÓN 6 — CONTACTO / CTA FINAL

**Objetivo**: Convertir. Esta sección debe ser limpia, directa y con poca fricción.

Título: "¿Listo para no perder más pacientes?"
Subtítulo: "Cuéntanos cómo es tu clínica y te preparamos una demo gratuita en 24 horas."

Formulario con los siguientes campos:
- Nombre y apellidos (texto)
- Nombre de la clínica (texto)
- Tipo de clínica (select: Dental / Fisioterapia / Estética / Otra)
- Teléfono de WhatsApp (tel)
- ¿Cuántos WhatsApps recibís al día aproximadamente? (select: Menos de 10 / Entre 10 y 30 / Más de 30)
- Mensaje opcional (textarea, placeholder: "Cuéntanos algo más sobre tu clínica si quieres...")
- Botón submit: "Solicitar demo gratuita →"

Al enviar el formulario:
- Mostrar mensaje de éxito: "¡Perfecto! Te contactamos en menos de 24 horas. 🎉"
- Los datos se guardan vía API Route en `/data/leads.json`
- Validación de campos requeridos con mensajes de error en español

Debajo del formulario, alternativa directa:
"¿Prefieres hablar ahora? → Escríbenos por WhatsApp" (enlace a wa.me con mensaje predefinido)

---

### FOOTER

- Logo Dencitia (texto estilizado)
- Tagline: "El asistente de IA para clínicas que nunca duerme"
- Links: Política de Privacidad · Aviso Legal · Cookies
- Copyright: © 2025 Dencitia. Todos los derechos reservados.
- Nota RGPD en el formulario: "Al enviar este formulario aceptas nuestra Política de Privacidad. Tus datos no serán compartidos con terceros."

---

## NAVBAR

- Logo "Dencitia" a la izquierda (tipografía Fraunces, color primary)
- Links: Cómo funciona · Precios · FAQ · Contacto
- CTA botón derecha: "Solicitar demo" (color acento)
- Sticky al hacer scroll, con blur backdrop suave
- Versión mobile: hamburger menu

---

## REQUISITOS TÉCNICOS ADICIONALES

1. **Performance**: Imágenes en formato WebP donde sea posible. Lazy loading en elementos fuera del viewport.

2. **Responsive**: Diseño completamente responsive. Mobile-first. El mockup de WhatsApp del hero debe verse bien en móvil.

3. **Animaciones con Framer Motion**:
   - Fade-in con slide-up en cada sección al hacer scroll (staggered)
   - Las burbujas del chat del hero aparecen secuencialmente con delays
   - Hover en tarjetas de precios (leve elevación)
   - El acordeón del FAQ con animación suave de apertura

4. **SEO básico**:
   - Title: "Dencitia | Agente IA para WhatsApp en clínicas dentales y estética"
   - Description: "Automatiza las respuestas de WhatsApp de tu clínica con IA. Atiende pacientes 24/7, agenda citas y reduce no-shows. Sin permanencia."
   - Open Graph tags

5. **Archivo de estructura**:
```
/app
  /page.tsx (homepage)
  /api/contact/route.ts (API route del formulario)
  /layout.tsx
/components
  /Navbar.tsx
  /Hero.tsx
  /Problem.tsx
  /HowItWorks.tsx
  /Pricing.tsx
  /FAQ.tsx
  /Contact.tsx
  /Footer.tsx
  /WhatsAppMockup.tsx (el chat animado)
/data
  /leads.json (se crea automáticamente)
```

6. **Página de Política de Privacidad** básica en `/privacy` adaptada a RGPD español.

---

## TONO DEL COPY

- Directo y sin rodeos. Habla de dinero, pacientes perdidos, competencia.
- Nada de jerga tecnológica. Nunca digas "LLM", "modelo de lenguaje", "tokens".
- El dueño de la clínica no es técnico. Habla como un comercial inteligente, no como un ingeniero.
- Usa "tú" (tuteo) en todo el copy.
- Emojis con moderación, solo donde añaden calidez sin restar profesionalidad.

---

## NOTAS FINALES PARA CLAUDE CODE

- Empieza por instalar las dependencias necesarias y configurar el proyecto Next.js.
- Crea todos los componentes de forma modular y reutilizable.
- El código debe estar limpio, comentado en los puntos clave, y listo para producción.
- Si necesitas imágenes de placeholder, usa formas geométricas con CSS o SVGs inline — no dependas de imágenes externas.
- El mockup de WhatsApp debe construirse 100% con HTML/CSS/JS, sin librerías de terceros para esa parte.
