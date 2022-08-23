export default function Home() {
  if (isClientSide()) {
    import("oldFrontend/header");
    import("oldFrontend/footer");
  }

  return (
    <div>
      <div id="header-container"></div>
      <main id="content-container">
        <h1>Content from Next Frontend</h1>
      </main>
      <div id="footer-container"></div>
    </div>
  );
}

function isClientSide() {
  return typeof window !== "undefined";
}
