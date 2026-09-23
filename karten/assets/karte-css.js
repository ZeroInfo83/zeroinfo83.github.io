/* Kopie von karte.css – wird nur für die Live-Vorschau im Generator gebraucht. */
window.ZVK_CSS = `/* ZERO Visitenkarten – Kartenansicht (statische Version für GitHub Pages)
 * Alle Maße sind in „Entwurfs-Pixeln“ angegeben (Entwurf: 390 px breit)
 * und werden über --s an die Bildschirmbreite angepasst.
 */

:root {
	--zvk-farbe: #0025ef;
	--zvk-weiss: #ffffff;
	--s: min(calc(100vw / 390), 1.25px);
}

*, *::before, *::after { box-sizing: border-box; }

html { -webkit-text-size-adjust: 100%; text-size-adjust: 100%; height: 100%; overflow-x: hidden; }

body.zvk-body {
	margin: 0;
	min-height: 100%;
	background: var(--zvk-farbe);
	color: var(--zvk-weiss);
	font-family: "Nunito", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
	font-weight: 500;
	line-height: 1.3;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	overflow-x: hidden; /* Fotokreis darf über den Kartenrand hinausragen */
	padding: env(safe-area-inset-top, 0px) env(safe-area-inset-right, 0px) env(safe-area-inset-bottom, 0px) env(safe-area-inset-left, 0px);
}

.zvk-card {
	position: relative;
	width: calc(390 * var(--s));
	margin: 0 auto;
}

.zvk-card a { color: inherit; text-decoration: none; }
.zvk-card a:focus-visible {
	outline: 2px solid var(--zvk-weiss);
	outline-offset: 3px;
	border-radius: 4px;
}

/* Resets ohne Gewicht (:where), damit sie keine Abstände überschreiben */
:where(.zvk-card) :where(ul) { list-style: none; margin: 0; padding: 0; }
:where(.zvk-card) :where(h1, p) { margin: 0; }

/* ---------- Firmenzeile ---------- */
.zvk-firma { display: flex; flex-direction: column; }
.zvk-firma__name {
	font-size: calc(60 * var(--s));
	font-weight: 500;
	line-height: 1;
	letter-spacing: calc(2.4 * var(--s));
}
.zvk-firma__zusatz {
	margin-top: calc(12 * var(--s));
	font-size: calc(20 * var(--s));
	line-height: 1;
	letter-spacing: calc(6.8 * var(--s));
	text-transform: uppercase;
}

/* ---------- Person ---------- */
.zvk-name {
	font-size: calc(26 * var(--s));
	font-weight: 700;
	line-height: 1.25;
	letter-spacing: calc(4.3 * var(--s));
	text-transform: uppercase;
	overflow-wrap: anywhere;
}
.zvk-name span { display: block; }
.zvk-position {
	margin-top: calc(8 * var(--s));
	font-size: calc(22 * var(--s));
	letter-spacing: calc(3.9 * var(--s));
}

/* ---------- Kontaktzeilen ---------- */
.zvk-telefon {
	margin-top: calc(24 * var(--s));
	font-size: calc(21.5 * var(--s));
	line-height: 1.5;
	letter-spacing: calc(3.6 * var(--s));
}
.zvk-online {
	margin-top: calc(22 * var(--s));
	font-size: calc(20.5 * var(--s));
	line-height: 1.5;
	letter-spacing: calc(1.35 * var(--s));
	overflow-wrap: anywhere;
}

/* ---------- Social-Icons ---------- */
.zvk-social { display: flex; }
.zvk-social a {
	display: grid;
	place-items: center;
	width: calc(var(--icon) * var(--s));
	height: calc(var(--icon) * var(--s));
	border-radius: 50%;
	background: var(--zvk-weiss);
	color: var(--zvk-farbe);
}
.zvk-social svg { width: 50%; height: 50%; fill: currentColor; }

/* ---------- Button „Kontakt speichern“ ---------- */
.zvk-button {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: calc(10 * var(--s));
	min-height: 48px;
	margin-top: calc(34 * var(--s));
	padding: calc(14 * var(--s)) calc(28 * var(--s));
	border-radius: 999px;
	background: var(--zvk-weiss);
	color: var(--zvk-farbe) !important;
	font-size: calc(16 * var(--s));
	font-weight: 700;
	line-height: 1;
	letter-spacing: calc(2.2 * var(--s));
	text-transform: uppercase;
	transition: transform .12s ease;
}
.zvk-button:active { transform: scale(.97); }
.zvk-button svg { width: calc(20 * var(--s)); height: calc(20 * var(--s)); fill: currentColor; flex: none; }

/* ---------- Impressum / Datenschutz ---------- */
.zvk-rechtliches {
	display: flex;
	gap: calc(20 * var(--s));
	margin-top: calc(36 * var(--s));
	font-size: calc(12 * var(--s));
	letter-spacing: calc(.8 * var(--s));
	opacity: .75;
}
.zvk-rechtliches a:hover { text-decoration: underline; }

/* =====================================================================
 * Vorlage 1 – ohne Foto: alles zentriert, Karte vertikal mittig
 * ================================================================== */
.zvk--ohne-foto { display: flex; align-items: center; min-height: 100vh; min-height: 100svh; }
.zvk--ohne-foto .zvk-card {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: calc(34 * var(--s)) calc(20 * var(--s)) calc(40 * var(--s));
}
.zvk--ohne-foto .zvk-firma { align-items: center; }
.zvk--ohne-foto .zvk-person { margin-top: calc(30 * var(--s)); }
.zvk--ohne-foto .zvk-social--zeile {
	--icon: 31;
	gap: calc(14 * var(--s));
	justify-content: center;
	margin-top: calc(22 * var(--s));
}
.zvk--ohne-foto .zvk-rechtliches { justify-content: center; }

/* =====================================================================
 * Vorlage 2 – mit Foto: linksbündig, Foto im Kreis oben rechts,
 * Icons als Spalte rechts neben dem Namen
 * ================================================================== */
.zvk--mit-foto .zvk-card {
	padding: calc(62 * var(--s)) calc(28 * var(--s)) calc(40 * var(--s)) calc(30 * var(--s));
}
.zvk-foto {
	position: absolute;
	top: calc(-30 * var(--s));
	right: calc(-28 * var(--s));
	width: calc(150 * var(--s));
	height: calc(150 * var(--s));
	border-radius: 50%;
	background: var(--zvk-weiss);
	overflow: hidden;
}
.zvk-foto img { display: block; width: 100%; height: 100%; object-fit: cover; }
.zvk--mit-foto .zvk-firma { padding-left: calc(5 * var(--s)); }
.zvk--mit-foto .zvk-person {
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	gap: calc(16 * var(--s));
	margin-top: calc(18 * var(--s));
}
.zvk--mit-foto .zvk-person__text { min-width: 0; padding-top: calc(26 * var(--s)); }
.zvk--mit-foto .zvk-social--spalte {
	--icon: 26;
	flex-direction: column;
	gap: calc(18 * var(--s));
	margin-right: calc(19 * var(--s));
	flex: none;
	padding-bottom: calc(2 * var(--s));
}

/* Kein Foto, keine Icons: Text braucht keinen Abstand nach oben extra */
.zvk--mit-foto .zvk-person:not(:has(.zvk-social)) .zvk-person__text { padding-top: calc(40 * var(--s)); }

@media (prefers-reduced-motion: reduce) {
	.zvk-button { transition: none; }
}
`;
