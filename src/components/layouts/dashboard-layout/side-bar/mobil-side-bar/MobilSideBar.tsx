"use client";
import { ReactIcon } from "@/components/react-icon/ReactIcon";
import { useModal } from "@/hooks/useModal";
import { useSearchQuery } from "@/hooks/useSearchQuery";
import Input from "@/shared/ui/input/Input";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { PropsWithChildren } from "react";
import styles from "./MobilSideBar.module.scss";
import { SelectContactUser } from "./select-contact-user/SelectContactUser";
export function MobilSideBar({ children }: PropsWithChildren) {
  const { handleChangeSearchTerm: handleFolderTerm, searchTerm: folderTerm } =
    useSearchQuery({
      queryParam: "folder",
    });
  const { isModalOpen, openModal, closeModal, modalElementRef } = useModal();
  return (
    <div className={styles.mobilSideBar}>
      <div className={styles.header}>
        <div className={styles.top}>
          <div className={styles.edit}>Edit</div>
          <div onClick={() => openModal()}>
            <ReactIcon name="FaEdit" className={styles.newChat} />
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <Input
            style={{
              borderRadius: "10px",
            }}
						className={styles.searchInput}
						icon={<ReactIcon name="FaSearch" />}
            placeholder="Search"
          />
        </div>
        <div className={styles.folders}>
          <div
            className={clsx(styles.folder, {
              [styles.active]: !folderTerm,
            })}
            onClick={() => handleFolderTerm("")}
          >
            All Chats
          </div>
          <div
            className={clsx(styles.folder, {
              [styles.active]: folderTerm === "Work",
            })}
            onClick={() => handleFolderTerm("Work")}
          >
            Work
          </div>
        </div>
      </div>
      {children}
      <div className={styles.footer}>
        <div className={styles.footerItem}>
          <ReactIcon name="IoMdContact" className={styles.footerIcon} />
          <p className={styles.footerText}>Contact</p>
        </div>
        <div className={clsx(styles.footerItem, styles.active)}>
          <ReactIcon name="FaComments" className={styles.footerIcon} />
          <p className={styles.footerText}>Chats</p>
        </div>
        <div className={styles.footerItem}>
          <ReactIcon name="IoMdMenu" className={styles.footerIcon} />
          <p className={styles.footerText}>Menu</p>
        </div>
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <SelectContactUser close={() => closeModal()} ref={modalElementRef} />
        )}
      </AnimatePresence>
    </div>
  );
}
