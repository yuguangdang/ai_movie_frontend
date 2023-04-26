import { Outlet } from "react-router-dom";
import MainNavigation from "../MainNavigation";

import styles from "../../css/Root.module.css";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className={styles.content}>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
