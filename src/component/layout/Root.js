import { Outlet } from "react-router-dom";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import MainNavigation from "./MainNavigation";
import styles from "../../css/Root.module.css";
import particleOptions from "../../data/particleOptions";
import Footer from "./Footer";

function RootLayout() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particleOptions}
      />
      <MainNavigation />
      <main className={styles.content}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
