import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const rootElements = document.getElementById("root");
const newCreateRoot = createRoot(rootElements!);

newCreateRoot.render(<App />);
