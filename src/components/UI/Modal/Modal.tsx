import { Dispatch, ReactNode, SetStateAction } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

interface ModalProps {
  visible: boolean;
  title: string;
  setVisible: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

type ModalOverlayProps = Omit<ModalProps, "setVisible">;
type BackdropProps = Pick<ModalProps, "setVisible">;

const Backdrop = ({ setVisible }: BackdropProps) => {
  return <div className={styles.backdrop} onClick={() => setVisible(false)} />;
};

const ModalOverlay = ({ visible, title, children }: ModalOverlayProps) => {
  const modalClassList = [styles.modal];

  if (visible) {
    modalClassList.push(styles.active);
  }

  return (
    <div className={modalClassList.join(" ")}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>{title}</h2>
        {children}
      </div>
    </div>
  );
};

const portalElement = document.getElementById("overlays") as HTMLElement;

const Modal = ({ visible, setVisible, title, children }: ModalProps) => {
  return (
    <>
      {createPortal(<Backdrop setVisible={setVisible} />, portalElement)}
      {createPortal(
        <ModalOverlay visible={visible} title={title}>
          {children}
        </ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
