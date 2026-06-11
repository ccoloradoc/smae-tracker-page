# SMAE Tracker — Sitio Web Público (gh-pages)

Sitio estático de SMAE Tracker. Se despliega automáticamente en GitHub Pages desde la rama `gh-pages`.

URL pública: `https://<usuario>.github.io/smae-tracker/`

---

## Estructura

```
gh-pages/
├── index.html            ← Landing page principal
├── about.html            ← Acerca de: app, tecnologías, autor, roadmap
├── contact.html          ← Canal de soporte (correo)
├── changelog.html        ← Historial de versiones
├── privacy-policy.html   ← Política de privacidad (requerida por Google Play)
├── 404.html              ← Página de error personalizada
├── assets/
│   ├── logo.png / logo.svg
│   ├── favicon.png / favicon.svg / apple-touch-icon.png
│   └── screenshots/      ← Imágenes de la app (dashboard, register, goals, statistics, widget)
├── css/styles.css        ← Estilos globales (paleta Sage Green, componentes)
└── js/main.js            ← Nav responsive, active state, scroll suave
```

---

## Cómo previsualizar localmente

Opción simple — abre cualquier `.html` directamente en el navegador.

Opción con servidor local (recomendada para evitar problemas de rutas):

```bash
cd gh-pages
python3 -m http.server 8080
# → http://localhost:8080
```

---

## Cómo desplegar

El sitio se publica automáticamente. Solo copia los archivos modificados a la raíz de la rama `gh-pages` y haz push. GitHub Pages detecta el cambio y republica en ~1 minuto.

```bash
# Desde la rama gh-pages
git add .
git commit -m "gh-pages: descripción del cambio"
git push origin gh-pages
```

---

## Qué actualizar en cada release de la app

1. **`changelog.html`** — Agregar nueva entrada con versión, fecha y lista de cambios.
2. **`about.html`** — Actualizar el badge de versión (`v1.0.0`) si cambió.
3. **`index.html`** — Si se agregaron funcionalidades nuevas, añadir o actualizar las tarjetas de características.
4. **`about.html` sección Próximamente** — Mover features lanzadas fuera de la lista y agregar las nuevas planeadas.

---

## Referencia de contenido

Para entender el estado actual de la aplicación, las funcionalidades implementadas, el roadmap y los mensajes de marketing, ver **`CLAUDE.md`** en este mismo directorio.
