import Image from "next/image";
import styles from "./ConversationList.module.scss";
import { formatDate } from "@/shared/utils/formatDate";

export function ConversationList() {
  return (
    <div className={styles.list}>
      {[...Array(10)].fill(defaultChat).map((chat, index) => (
        <div key={index} className={styles.item}>
          <div className={styles.avatar}>
            <Image src={chat.image} alt="" width={50} height={50} />
          </div>
          <div className={styles.info}>
            <div className={styles.heading}>
              <div className={styles.name}>{chat.name}</div>
              <div className={styles.date}>
                {formatDate(getLastMessage(chat.messages).sendTime)}
              </div>
            </div>
            <div className={styles.message}>
              {getLastMessage(chat.messages).content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const getLastMessage = (messages: any[]) => {
  return messages[messages.length - 1];
};

const defaultChat = {
  id: 1,
  name: "John Doe",
  image: "/5d8b4098d7f6a6f4e4d74f121528f0d2.jpg",
  messages: [
    {
      id: 1,
      content: "Hello",
      user: {
        id: 1,
        username: "John Doe",
        picture: "/5d8b4098d7f6a6f4e4d74f121528f0d2.jpg",
      },
      sendTime: new Date(),
    },
  ],
};
