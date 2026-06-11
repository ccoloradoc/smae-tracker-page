# SMAE Tracker — Contexto para el sitio web

## Perfil objetivo de este documento

Este archivo está dirigido a **quien actualiza o mejora el sitio web** de SMAE Tracker. Eso incluye:

- **Agentes de IA** (Claude u otros) que reciben instrucciones de copy, rediseño o nuevas páginas. Este documento les da el contexto de producto y marca necesario para generar contenido coherente sin necesitar al desarrollador.
- **Perfiles de marketing o ventas** que deseen ajustar mensajes, actualizar capturas, modificar la sección de roadmap o redactar contenido para redes sociales basado en la app.
- **Colaboradores externos** que tomen el sitio para mejoras de UX, SEO o contenido, sin acceso directo al código Android.

Este documento **no es** para desarrolladores de la app Android. El contexto técnico de la app está en `CLAUDE.md` en la raíz del repositorio.

---

## La aplicación

**SMAE Tracker** es una aplicación Android gratuita para el seguimiento nutricional diario usando el **Sistema Mexicano de Alimentos Equivalentes (SMAE)** — el estándar oficial de nutrición en México.

El usuario configura cuántos equivalentes debe consumir por cada uno de los 8 grupos alimenticios SMAE (según lo indique su nutriólogo), y registra lo que come durante el día. La app calcula el cumplimiento en tiempo real y muestra estadísticas de progreso.

### Propuesta de valor central

> Haz que seguir tu plan nutricional SMAE sea tan simple como marcar una lista — sin hojas de cálculo, sin cálculos manuales, sin conexión a internet.

### Diferenciales clave

- **100% offline.** Sin cuentas, sin servidores, sin rastreo de datos personales.
- **Diseñada para SMAE.** No es una app genérica de calorías adaptada: está construida sobre equivalentes y los 8 grupos SMAE desde el inicio.
- **Widget de pantalla de inicio.** Progreso del día visible sin abrir la app.
- **Privacidad real.** Todos los datos se almacenan localmente en el dispositivo.
- **Gratis y sin anuncios.**

---

## Usuario objetivo

| Perfil | Descripción |
|--------|-------------|
| Principal | Personas en México con un plan nutricional SMAE activo (prescrito por nutriólogo o dietista). |
| Secundario | Estudiantes de nutrición que usan SMAE en práctica clínica. |
| Terciario | Personas interesadas en alimentación consciente que conocen el sistema SMAE. |

**Demografía estimada:** 20–45 años, México, Android, interés en salud y bienestar.

**Pain point principal:** Llevar el registro de equivalentes diarios es tedioso y propenso a errores cuando se hace en papel o en hojas de cálculo. No existe una app nativa y moderna dedicada exclusivamente a SMAE.

---

## Funcionalidades implementadas — v1.0.0

### Registro y seguimiento diario

- Registro de alimentos por comida (Desayuno, Snack AM, Comida, Snack PM, Cena).
- Catálogo SMAE precargado con los 8 grupos alimenticios.
- Búsqueda por nombre y filtrado por grupo SMAE.
- Porciones fraccionarias (ej. 0.5 equivalentes).
- Eliminación y corrección de registros.
- Consulta del historial de días anteriores con navegación por fecha.

### Metas nutricionales

- Configuración de meta diaria por cada uno de los 8 grupos SMAE.
- Steppers intuitivos para ajustar metas (sin teclado numérico).
- Indicador visual de cambios pendientes antes de guardar.
- Ejemplos de alimentos por grupo para orientar al usuario.

### Dashboard

- Progreso en tiempo real por grupo SMAE.
- Indicadores visuales de cumplimiento, grupos excedidos y grupos pendientes.
- Acceso directo a estadísticas desde el dashboard.

### Estadísticas y tendencias

- Análisis semanal y mensual de cumplimiento.
- Gráfica de barras con progreso diario.
- Desglose por grupo SMAE (grupos más y menos cumplidos).
- Sistema de rachas: días consecutivos de cumplimiento.
- Mejor y peor día del período analizado.

### Catálogo de alimentos

- Catálogo SMAE completo precargado.
- Crear, editar y eliminar alimentos personalizados.
- Soft delete (los alimentos eliminados no afectan registros históricos).

### Favoritos

- Marcar alimentos como favoritos.
- Filtro "Solo Favoritos" en pantalla de registro.
- Ordenamiento por frecuencia de uso.
- Acceso rápido a favoritos en el flujo de registro.

### Templates de comidas

- Crear plantillas de comidas frecuentes (ej. "Desayuno habitual").
- Guardar templates desde el historial del día.
- Aplicar template completo con un toque desde la pantalla de registro.
- Editar y eliminar templates.

### Widget Android

- Widget de pantalla de inicio con progreso del día actual.
- Indicador visual tipo "ring" con porcentaje de cumplimiento.
- Barras de progreso por los 4 grupos SMAE principales.
- Resumen semanal con mini gráficos de los últimos 7 días.
- Estado vacío amigable cuando no hay registros del día.
- Actualización automática al registrar alimentos.

### Backup y restauración de datos

- Exportar respaldo completo en JSON.
- Importar respaldo desde archivo JSON.
- Exportar historial de consumo en CSV.
- Restablecer catálogo SMAE a valores originales.

### Centro de Administración

- Acceso unificado a catálogo, templates y herramientas de datos.
- Pantalla "Acerca de" dentro de la app.
- Política de privacidad integrada en la app.

### Onboarding

- Flujo de bienvenida en primera ejecución (4 pasos).
- Introducción visual al sistema SMAE.
- Configuración de metas inicial antes de entrar a la app.

### Calidad técnica

- Funciona completamente sin conexión a internet.
- Splash screen animado.
- Manejo de estados vacíos en todas las pantallas.
- Firebase Analytics y Crashlytics para monitoreo anónimo.

---

## Roadmap — próximas funcionalidades

Estas funcionalidades están planeadas para versiones futuras. Se pueden mencionar en el sitio como "Próximamente".

| Funcionalidad | Descripción breve |
|---------------|-------------------|
| Calendario de actividad | Vista mensual con indicadores de cumplimiento por día: completado, parcial, excedido, sin datos. |
| Recordatorios inteligentes | Notificaciones configurables para recordar registrar comidas. |
| Más estadísticas nutricionales | Análisis más profundo por grupo SMAE, patrones por día de la semana, tendencias de largo plazo. |
| Mejoras del widget | Nuevos tamaños, temas y estados visuales para el widget de pantalla de inicio. |
| Sincronización entre dispositivos | Copia de seguridad automática en la nube y acceso desde múltiples dispositivos. |
| Preview de template antes de aplicar | Ver el desglose de alimentos de un template antes de confirmarlo. |
| App icon y tema final | Recursos gráficos definitivos para la identidad visual de la app en Play Store. |

---

## Mensajes clave para el sitio

Estos son los mensajes que deben resonar en todo el copy del sitio:

1. **Diseñada para SMAE, no adaptada.** — La app entiende equivalentes y grupos SMAE de forma nativa.
2. **Sin conexión, sin cuentas, sin complicaciones.** — Privacidad real, funciona offline.
3. **Para quien sigue un plan con su nutriólogo.** — No es para dietas de moda; es una herramienta de trabajo.
4. **Visual y consistente.** — El widget y el dashboard te dicen en un vistazo si vas bien.
5. **Gratis. Sin anuncios. Sin trampas.**

---

## Tono y voz

- **Claro y directo.** El usuario ya conoce SMAE y no necesita que le expliquemos nutrición.
- **Funcional, no aspiracional.** Hablar de utilidad concreta, no de "transformar tu vida".
- **Moderno pero sin tecnicismos innecesarios.** La app es técnicamente sólida, pero el sitio habla con el usuario final.
- **Español neutro con giros mexicanos naturales.** Evitar anglicismos innecesarios, pero tampoco forzar regionalismos.
- **Sin exageraciones.** No decir "la mejor app" o "revolucionaria". Describir lo que hace y dejar que hable por sí sola.

---

## Estructura del sitio y qué actualizar en cada página

### `index.html` — Landing Page

**Objetivo:** Convertir visitantes en descargas. Es la primera impresión.

Secciones:
- **Hero:** Eslogan principal + descripción breve + botón de descarga (actualmente deshabilitado, "Próximo lanzamiento").
- **¿Qué es SMAE?:** Explicación del sistema y cómo la app lo implementa. No tocar a menos que cambie la estrategia.
- **Características:** 8 tarjetas de funcionalidades. Actualizar si se agregan funcionalidades relevantes.
- **Capturas de pantalla:** Galería horizontal con screenshots de la app. Actualizar imágenes en cada release.
- **CTA banner:** Llamada a la acción final. Activar el botón cuando la app esté en Google Play.

**Cuándo actualizar:** Al publicar en Google Play (activar botón), al agregar features principales, al renovar screenshots.

---

### `about.html` — Acerca de

**Objetivo:** Credibilidad, contexto técnico y hoja de ruta.

Secciones:
- **App identity card:** Badge de versión. Actualizar en cada release.
- **Tecnologías:** Raramente cambia.
- **Autor:** Solo link a `cristiancolorado.com`. No modificar.
- **Créditos:** Reconocimientos fijos.
- **Próximamente:** Lista del roadmap. Mover features ya lanzadas a changelog; agregar las nuevas.

**Cuándo actualizar:** En cada release (versión + roadmap).

---

### `changelog.html` — Novedades

**Objetivo:** Transparencia. Requerido por Google Play.

Formato: una entrada por versión, de más reciente a más antigua.

**Cuándo actualizar:** En cada release. Siempre. Es el registro oficial de cambios públicos.

---

### `contact.html` — Contacto

**Objetivo:** Canal oficial de soporte.

Contenido actual: solo el correo `soporte@smaetracker.app`.

**Cuándo actualizar:** Si cambia el correo de soporte.

---

### `privacy-policy.html` — Política de Privacidad

**Objetivo:** Cumplimiento legal. Requerido por Google Play.

**Cuándo actualizar:** Si cambia el uso de datos (nuevas integraciones de analytics, funcionalidades en la nube, etc.). Cualquier cambio debe reflejarse también en la Data Safety de Play Console.

---

## Capturas de pantalla

Las imágenes en `assets/screenshots/` son actualmente SVGs representativos. Deben reemplazarse con capturas reales de la app antes del lanzamiento en Google Play.

Archivos:
- `dashboard.svg` — Pantalla de inicio / dashboard
- `register.svg` — Pantalla de registro de alimentos
- `goals.svg` — Configuración de metas
- `statistics.svg` — Estadísticas y tendencias
- `widget.svg` — Widget de pantalla de inicio

Formato recomendado para reemplazo: PNG, relación de aspecto de pantalla Android (9:19.5 aprox), sin marcos de dispositivo para el sitio web.

---

## Información del proyecto

- **Versión actual:** 1.0.0
- **Plataforma:** Android (minSdk 29 — Android 10+)
- **Precio:** Gratuita, sin compras in-app, sin anuncios
- **Estado:** Pre-lanzamiento (pendiente publicación en Google Play)
- **Correo de soporte:** soporte@smaetracker.app
- **Autor:** Cristian Colorado — [cristiancolorado.com](https://cristiancolorado.com)
