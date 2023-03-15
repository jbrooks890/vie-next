import useModal from "@/hooks/useModal";
import { ReactElement, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "../../styles/Modal.module.css";

// TUTORIAL: https://upmostly.com/tutorials/modal-components-react-custom-hooks

type PropsType = {
  isShowing: boolean;
  className?: string;
  auto?: boolean;
  closeable?: boolean;
  screen?: boolean;
  children: ReactElement | ReactElement[];
};

export default function Modal({
  isShowing,
  className,
  auto = false,
  closeable = true,
  screen = true,
  children,
}: PropsType) {
  const [active, setActive] = useState(false);
  const wrapper = useRef<null | HTMLDivElement>(null);
  const { close } = useModal();

  const closeModal = (): void => {
    document.body.classList.contains("modal-lock") &&
      document.body.classList.remove("modal-lock");
    close();
    setActive(false);
  };

  useEffect(() => {
    if (isShowing) {
      setActive(true);
      !document.body.classList.contains("modal-lock") &&
        document.body.classList.add("modal-lock");
    }
    return () => closeModal();
  }, [isShowing]);

  return isShowing
    ? createPortal(
        <>
          <div className={`${styles.overlay} ${screen ? "screen" : "clear"}`} />
          <div
            className={`${styles.wrapper} flex col ${
              active ? "active" : ""
            } ${className}`}
            ref={wrapper}
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
            // onClick={closeModal}
          >
            <div className={`${styles.modal} modal flex col center`}>
              {!auto && closeable && (
                <div
                  className={`${styles.close} flex center`}
                  data-dismiss="modal"
                  aria-label="close"
                  onClick={() => !auto && closeModal()}
                />
              )}
              {children}
            </div>
          </div>
        </>,
        document.body
      )
    : null;
}
