import { usePathname } from "next/navigation";
import { TypeNavData } from "../nav.data";
import styles from "./DesktopSideBar.module.scss";
import { ReactIcon } from "@/components/react-icon/ReactIcon";
import { PropsWithChildren } from "react";

interface Props {
  data: TypeNavData;
}

export function DesktopSideBar({ data, children }: PropsWithChildren<Props>) {
  const pathname = usePathname();
  return (
    <div className={styles.layout}>
      <div className={styles.sideBar}>
        <div className={styles.logo}>MUILTi</div>
        <div className={styles.nav}>
          <div className={styles.navItem}>
            <ReactIcon
              name={
                pathname === "/dashboard/main" ? "FaComments" : "FaRegComments"
              }
              className={styles.navIcon}
            />
            <div className={styles.name}>All Chats</div>
          </div>
          <div className={styles.navItem}>
            <ReactIcon name={"MdFolder"} className={styles.navIcon} />
            <div className={styles.name}>Work</div>
          </div>
          <div className={styles.border} />
          {data["ENG"].map((item, index) => (
            <div className={styles.navItem} key={index}>
              <ReactIcon name={item.icon} className={styles.navIcon} />
              <div className={styles.name}>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
}
