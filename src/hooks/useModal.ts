import { useEffect, useMemo, useRef, useState } from "react";

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const modalElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalElementRef.current &&
        event.target instanceof Node &&
        !modalElementRef.current.contains(event.target)
      ) {
        closeModal();
      }
    };
    document.body.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.body.removeEventListener("mousedown", handleClickOutside);
  }, [modalElementRef]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  return useMemo(
    () => ({
      isModalOpen,
      openModal,
      closeModal,
      modalElementRef,
    }),
    [isModalOpen, openModal, closeModal, modalElementRef]
  );
};
