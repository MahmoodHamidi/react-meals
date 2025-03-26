# React - Context API

## Lokaler Zustand (state mit useState - Hook)

- Lokaler Zustand in React bezieht sich auf Daten(Variabeln, Arrays, Objekte), die spezifisch für `eine einzelne Komponente` sind
- Lokaler Zustand wird innerhalb einer Komponente verwaltet, kann aber über Props weitergegeben werden
- Lokaler Zustand wird mit Setter-Funktionen von `useState` modifiziert

  ```jsx
  // Lokaler Zustand mit useState in einer Komponente
  import { useState } from "react";
  const CounterComponent = () => {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Add one</button>
      </div>
    );
  };

  export default CounterComponent;
  ```

### Globaler Zustand (Context(State) - mit useContext Hook)

- Globaler Zustand als Konzept, sind Daten(Variabeln, Arrays, Objekte. Funktionen), die von mehreren Komponenten geteilt werden

  - Normalerweise von allen Komponenten, daher "global"
  - So etwas wie globale Variablen

#### Was ist Context Hook?

- Der Context Hook ist eine Mechanismus,um den globalen Zustand(State) in React zu verwalten
- Mit Context Hook haben wir eine Möglichkeit, Daten durch den Komponentenbaum zu leiten, ohne dass wir `Props` auf jeder Ebene manuell weitergeben müssen.
- Mit Context können wir teilen;

  - einfache Dinge (`JavaScript-Primitivwerte`) wie `Strings`, `Zahlen` oder `Booleans` oder

  - komplexe Dinge (`JavaScript-Datenstrukturen`) wie `Objekte`, `Arrays` und sogar `Handlers` (`Funktionen`)

- Context ist wie ein globaler Container (Larger-Object), der `ALLE DATEN` und Funktionen enthält, die wir teilen möchten mit unseren Komponenten
- Denk an die Küche oder Wohnzimmer in einem Familienhaus, wo alle Familienmitglieder Zugriff haben oder eine WG(Wohngemeinschaft) wo alle Mitbewohner Zugriff auf den Sofa, Fernseher, Kühlschrank, usw. haben

#### Warum Context Hook?

- Die Context Hook;

  - ermöglicht es uns, Status und Props an einem zentralen Ort zu speichern, der für alle Komponenten in unserer App verfügbar ist!

  - löst das Problem des "`Prop-Drilling`".

##### Was ist "`Prop-Drilling`"?

- Prop-Drilling passiert, wenn wir Props durch viele Ebenen von Komponenten weitergeben müssen, auch wenn die Komponenten dazwischen die Props nicht benötigen.

  - Hier haben wir "data" von "App" zu Target weitergegeben
    - ParentComponent kümmert sich nicht darum, muss es aber trotzdem weitergeben
    - ChildComponent kümmert sich nicht darum, muss es aber trotzdem weitergeben
  - `App` -> `ParentComponent` -> `ChildComponent` -> `Target`

  ```jsx
  const App = () => {
    const data = "Hello, prop drilling!";
    return <ParentComponent data={data} />;
  };

  // ParentComponent.jsx

  const ParentComponent = ({ data }) => {
    return <ChildComponent data={data} />;
  };
  // ChildComponent.jsx
  const ChildComponent = ({ data }) => {
    return <Target data={data} />;
  };
  // TargetComponent.jsx sollte die Daten anzeigen
  const Target = ({ data }) => {
    return <p>{data}</p>;
  };
  ```

- Probleme mit Prop Drilling
  - Daten durch tief verschachtelte Komponentenbäume weitergeben
  - Schwer zu warten (verwirrend)
  - Erfordert viel Schreibarbeit
  - Wenn eine Komponente ein Prop nicht benötigt, muss sie den Prop trotzdem weitergeben
-

#### Wie Benutzt Man Context?

- Wir haben zwei Hauptteile in Context: `Provider` und `Consumer`

- `Provider` ist die `Context-Komponente`, die den globalen Zustand enthält

  - Dieser enthält die Zustandsvariable
  - Er ermöglicht den Zugriff auf seine Zustandsvariable für alle seine verschachtelten Komponenten

- `Consumer`

  - Jede Komponente, die den Zustand von einem Provider abruft, ist ein Consumer
  - Dies geschieht durch - du hast es erraten - einen Hook

- Die Implementierung von Context in unserer App kann in 3 Hauptschritte unterteilt werden;

  - Schritt 1: Wir **erstellen den Kontext und Provider**

  - Schritt 2: Wir **stellen den Provider für unsere App bereit**

  - Schritt 3: Wir verwenden den **Kontext in der Komponente, die ihn benötigt**.

## Neutrale schritte für Context

### 1. Schritt 1: Wir **erstellen den Kontext und Provider**

- Erstelle einen `context`-Ordner in `src`-Verzeichnis
- Erstelle eine Datei mit die Name dein Context, z.B. `DarkModeContext.jsx` oder `UserContext.jsx` oder `ThemeContext.jsx` oder `AuthContext.jsx`

- In den `Context`-Datei:
  - importiere `createContext` von `react` `import { createContext } from "react";`
  - Erstelle den Context darunter und exportiere ihn `export const DEINContext = createContext();`
  - Erstelle den Provider Component und exportiere ihn (mit ein `value`-prop oder `attribute`) `const DEINProvider = ({ children }) => { return <DEINContext.Provider value={}>{children}</DEINContext.Provider>; }; export default DEINProvider;`
  - der `value`-prop oder `attribute` sollte ein Objekt sein
  - das Objekt sollte alle Zustandsvariabel und Funktionen enthalten die du teilen möchtest
  - Als TIP, erstelle eine externe `value`-Objekt und füge es in den Provider ein um den Code sauber zu halten.

### Schritt 2: Wir **stellen den Provider für unsere App bereit**

- In der `App.js` oder in der HauptDatei (z.B. `index.js`) - je nachdem wo du den Provider einfügen möchtest:
  - importiere den Provider `import DEINProvider from "./contexts/DEINContext";`
  - Packe ALLE Komponenten die den Zustand benötigen in den Provider ` <DEINProvider> ALLE KOMPONENTEN </DEINProvider>`

### Schritt 3: Wir verwenden den **Kontext in der Komponente, die ihn benötigt**

- In der Komponente die den Zustand(Context) benötigt:
  - importiere `useContext` von `react` `import { useContext } from "react";`
  - importiere den Context den du verwenden möchtest `import { DEINContext } from "../contexts/DEINContext";`
  - verwende `useContext` um den Zustand und Funktionen zu erhalten `const { variabel1, funktion, u.s.w } = useContext(DEINContext);`
  - Verwende den Zustand(State), Variabeln, Array, Objekt oder Funktionen in deiner Komponente.

# Wann verwenden wir die Context API?

- Wir verwenden Context, um Daten zu teilen, die als "global" für einen Baum von React-Komponenten angesehen werden können

- in E-Commerce-Anwendungen, bei denen viele Komponenten ein bestimmtes Datenelement wie die Anzahl der Artikel im Warenkorb verwenden müssen.

## Wann sollte man Context nicht verwenden?

- Wir sollten `Context` nicht verwenden, wenn die Komponente `state` gut genug ist

- Es macht die Wiederverwendung von Komponenten schwieriger

- Denk daran, KISS (Keep it shot and simple)!

**Anmerkungen:** Wir sollten immer versuchen, unseren Code nicht zu kompliziert zu gestalten

## Beispiel: DarkModeContext in unserer Meals App

- Füge diese code in deine `index.css` unter TailwindCSS und DaisyUI zeilen

```css
@custom-variant dark (&:where(.dark, .dark *));
```

- Am ende sollte alles so aussehen:

```css
@import "tailwindcss";
@plugin "daisyui";
@custom-variant dark (&:where(.dark, .dark *));
```

### Schritt 1: Erstelle den Context und den Provider

- Erstelle ein `context`-Ordner in `src`-Verzeichnis
- Erstelle eine Datei mit die Name dein Context, z.B. `DarkModeContext.js`

1. importiere `createContext` von `react`

```jsx
// DarkModeContext.js
import { createContext } from "react";
```

2. Erstelle den Context darunter und exportiere ihn

```jsx
// Erstelle ein Context-Objekt
export const DarkModeContext = createContext();
```

3. Erstelle den Provider Component und exportiere ihn `ALS DEFAULT`

```jsx
export const DarkModeProvider = ({ children }) => {
  return <DarkModeContext.Provider>{children}</DarkModeContext.Provider>;
};

// exporti den Provider
export default DarkModeProvider;
```

4. Diese context ist erstmal leer und hat keine Zustandsvariable oder Funktionen oder Daten die wir teilen wollen
5. Wir müssen die Zustandsvariable und Funktionen erstellen und sie in den Provider einfügen

   - importiere `useState` von `react`
   - Erstelle die Zustandsvariable und Setter-Funktion
   - Erstelle eine value-Objekt mit der Zustandsvariable und Funktionen
   - Füge das value-Objekt in den Provider ein in eine `value`-Prop oder Attribute
   - Am ende sollte es so aussehen:

```jsx
import { useState, createContext } from "react";

// Erstelle ein Context-Objekt
export const DarkModeContext = createContext();

// Erstelle ein Provider-Komponente
export const DarkModeProvider = ({ children }) => {
  // Zustandsvariable und Setter-Funktion
  const [isDarkMode, setIsDarkMode] = useState(false);

  // DarkMode toggeln
  const toggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };
  // erstelle ein Value-Objekt
  const valueShare = { isDarkMode, toggleDarkMode };

  return (
    <DarkModeContext.Provider value={valueShare}>
      {children}
    </DarkModeContext.Provider>
  );
};

// exporti den Provider
export default DarkModeProvider;
```

6. Wenn du irgendwelcher Variabel oder Funktion hast die du gerne mit den rest der App teilen möchtest, füge sie in das `value`-Objekt ein!

### Schritt 2: Provider in die App einfügen

- um den Provider in unser App zu verwenden, müssen wir ihn in die `App.js` einfügen oder in die HauptDatei wie `index.js`
- die Idee ist den Provider um die Komponenten zu wickeln, die den Zustand benötigen
- In unserem Fall, wir haben ein `DarkModeProvider` und wir wollen das alle Komponenten in der App den Zustand von `DarkModeProvider` verwenden können
- Wir müssen den `DarkModeProvider` importieren und innerhalb der `BrowserRouter`-Komponente einfügen

```jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavComponent from "./components/NavComponent";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import MealsDetailsPage from "./pages/MealsDetailsPage";
import MealsPage from "./pages/MealsPage";
import DarkModeProvider from "./contexts/DarkModeContext";

function App() {
  return (
    <BrowserRouter>
      // Hier fügen wir den Provider ein
      <DarkModeProvider>
        <Routes>
          {/* Parent-Route für gemeinsames Layout */}
          <Route path="/" element={<NavComponent />}>
            {/* Index-Route = Standardinhalt */}
            <Route index element={<HomePage />} />

            {/* Unter-Routen */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/meals" element={<MealsPage />} />

            {/*
          Route mit Parameter:
          */}
            <Route path="/meals/:id" element={<MealsDetailsPage />} />

            {/* Fallback für unbekannte Pfade */}
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </DarkModeProvider>
    </BrowserRouter>
  );
}

export default App;
```

### Schritt 3: Verwenden des Context in einer Komponente(Consumer)

- In HeaderComponent

1. importiere `useContext` von `react`
2. importiere den Context den du verwenden möchtest
3. verwende `useContext` um den Zustand und Funktionen zu erhalten
4. Verwende den Zustand und Funktionen in deiner Komponente

```jsx
// HeaderComponent.jsx
import { Link, NavLink, Outlet } from "react-router-dom";
import FooterComponent from "./FooterComponent";
import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";

//
function HeaderComponent() {
  // State und Funktionen aus dem Context destruktuieren
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  // diese ist für NavLink wenn es aktiv ist
  const activeStyle = ({ isActive }) => (isActive ? "text-yellow-400" : "");

  // JSX
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <NavLink to="/" end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">Über uns</NavLink>
              </li>
              <li>
                <NavLink to="/meals">Meals</NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            RMeals
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li>
              <NavLink to="/" end className={activeStyle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={activeStyle}>
                Über uns
              </NavLink>
            </li>
            <li>
              <NavLink to="/meals" className={activeStyle}>
                Meals
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* Hier kommt den toggle funktion für OnClick und ternary für die icons   */}
          <button onClick={toggleDarkMode} className="btn">
            {isDarkMode ? "🌞" : "🌜"}
          </button>
        </div>
      </div>
    </>
  );
}

export default HeaderComponent;
```

- In NavLayoutComponent

```jsx
import { Outlet } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";

const NavLayoutComponent = () => {
  // State aus dem Context destruktuieren
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <>
      <HeaderComponent />
      <div
        className={`${isDarkMode ? "dark" : ""} bg-slate-300 dark:bg-base-200`}>
        <Outlet />
      </div>
      <FooterComponent />
    </>
  );
};
export default NavLayoutComponent;
```
