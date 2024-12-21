import { PropsWithChildren } from "react";
import styles from "./DashboardLayout.module.scss";
import { SideBar } from "./side-bar/SideBar";

export function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className={styles.dashboardLayout}>
      <SideBar>{children}</SideBar>
    </div>
  );
}
