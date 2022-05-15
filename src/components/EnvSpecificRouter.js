import { BrowserRouter, HashRouter } from "react-router-dom";

export default function EnvSpecificRouter({ children }) {
  const Router = process.env.REACT_APP_HASH_ROUTER === "true" ? HashRouter : BrowserRouter;
  return <Router basename={process.env.REACT_APP_HASH_ROUTER === "true" ? undefined : process.env.PUBLIC_URL}>{children}</Router>;
}
