"use client";
import { ReactIcon } from "@/components/react-icon/ReactIcon";
import { useModal } from "@/hooks/useModal";
import { useSearchQuery } from "@/hooks/useSearchQuery";
import Input from "@/shared/ui/input/Input";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren } from "react";
import styles from "./MobilSideBar.module.scss";
import { SelectContactUser } from "./select-contact-user/SelectContactUser";
import { useAppDispatch, useAppSelector } from "@/hooks/useAction";
import { setIsEditMode, setIsSearchMode } from "@/store/slice/modal.slice";
export function MobilSideBar({ children }: PropsWithChildren) {
  const { handleChangeSearchTerm: handleFolderTerm, searchTerm: folderTerm } =
    useSearchQuery({
      queryParam: "folder",
    });
  const { isModalOpen, openModal, closeModal, modalElementRef } = useModal();
  const { isEditMode, isSearchMode } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  return (
    <div
      className={styles.mobilSideBar}
      style={{
        padding: isSearchMode ? "1120px 0px 80px 0px !important" : "0 0 80px 0",
      }}
    >
      <div className={styles.header}>
        <AnimatePresence>
          {!isSearchMode && (
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: 0 }}
              exit={{ y: -100 }}
							transition={{
								duration: 0.1,
							}}
              className={styles.top}
            >
              <div
                className={styles.edit}
                onClick={() => dispatch(setIsEditMode(!isEditMode))}
              >
                {isEditMode ? "Done" : "Edit"}
              </div>
              <div onClick={() => openModal()}>
                <ReactIcon name="FaEdit" className={styles.newChat} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className={styles.inputWrapper}>
          <Input
            style={{
              borderRadius: "10px",
            }}
            className={styles.searchInput}
            icon={<ReactIcon name="FaSearch" />}
            placeholder="Search"
            onFocus={() => dispatch(setIsSearchMode(true))}
          />
          {isSearchMode && (
            <div
              onClick={() => dispatch(setIsSearchMode(false))}
              className={styles.cancel}
            >
              Close
            </div>
          )}
        </div>
        <div className={styles.folders}>
          <div
            className={clsx(styles.folder, {
              [styles.active]: !folderTerm,
              [styles.editMode]: isEditMode,
            })}
            onClick={() => (isEditMode ? {} : handleFolderTerm(""))}
          >
            All
          </div>
          <div
            className={clsx(styles.folder, {
              [styles.active]: folderTerm === "Work",
              [styles.editMode]: isEditMode,
            })}
            onClick={() => (isEditMode ? {} : handleFolderTerm("Work"))}
          >
            {isEditMode && (
              <div className={styles.remove}>
                <ReactIcon name="AiOutlineClose" />
              </div>
            )}
            <p>Work</p>
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
