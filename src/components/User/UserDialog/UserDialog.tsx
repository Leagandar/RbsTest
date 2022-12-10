import { Dispatch, SetStateAction } from "react";
import { UserForm } from "../index";
import { Modal } from "../../UI";
import { User } from "../../../types";

interface UserDialogProps {
  visible: boolean;
  title: string;
  user: User | null;
  setVisible: Dispatch<SetStateAction<boolean>>;
  onSubmitHandler: (user: User | null) => void;
  onCancelHandler: () => void;
}

const UserDialog = ({
  visible,
  setVisible,
  title,
  user,
  onSubmitHandler,
  onCancelHandler,
}: UserDialogProps) => {
  return (
    <>
      <Modal visible={visible} setVisible={setVisible} title={title}>
        <UserForm
          onSubmitHandler={onSubmitHandler}
          onCancelHandler={onCancelHandler}
          user={user}
        />
      </Modal>
    </>
  );
};

export default UserDialog;
