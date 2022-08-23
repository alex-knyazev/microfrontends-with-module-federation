import "../styles/globals.css";

if (typeof window !== "undefined") {
  window.oldFrontendUrl = "http://localhost:3000";
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
