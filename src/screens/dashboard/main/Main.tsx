import { FC } from "react";
import styles from "./Main.module.scss";
import { DashboardLayout } from "@/components/layouts/dashboard-layout/DashboardLayout";
import { ConversationList } from "@/components/dashboard-components/ConversationList";

const Main: FC = () => {
  return (
    <DashboardLayout>
      <div className={styles.main}>
        <ConversationList />
        <div className={styles.emptySelector}>
					No Select Chat
				</div>
      </div>
    </DashboardLayout>
  );
};
export default Main;
