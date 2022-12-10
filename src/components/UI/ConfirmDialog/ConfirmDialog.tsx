import { Dispatch, SetStateAction } from "react";
import { Modal, Button } from "../index";
import styles from "./ConfirmDialog.module.css";

interface ConfirmDialogProps {
  title: string;
  description: string;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  onConfirmHandler: () => void;
  onCancelHandler: () => void;
}

const ConfirmDialog = ({
  title,
  description,
  visible,
  setVisible,
  onConfirmHandler,
  onCancelHandler,
}: ConfirmDialogProps) => {
  return (
    <>
      <Modal visible={visible} setVisible={setVisible} title={title}>
        <h3 className={styles.warningText}>{description}</h3>
        <div className={styles.buttonWrapper}>
          <Button size="small" onClick={onConfirmHandler}>
            OK
          </Button>
          <Button size="small" onClick={onCancelHandler}>
            Cancel
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ConfirmDialog;
