import {
  MouseEvent,
  useState,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react";
import { ConfirmDialog } from "../../UI";
import { UserDialog } from "../index";
import { useActions } from "../../../hooks";
import { User } from "../../../types";
import editIcon from "../../../assets/edit.png";
import deleteIcon from "../../../assets/delete.png";
import styles from "./UserTableControls.module.css";

interface UserTableControlsProps {
  id: User["id"];
  user: User;
  disabled: boolean;
  activeRowIds: number[];
  setActiveRowIds: Dispatch<SetStateAction<number[]>>;
}

const UserTableControls = ({
  id,
  user,
  disabled,
  activeRowIds,
  setActiveRowIds,
}: UserTableControlsProps) => {
  const [confirmDialogVisible, setConfirmDialogVisible] = useState(false);
  const [editUserDialogVisible, setEditUserDialogVisible] = useState(false);
  const { updateUser, deleteUsers } = useActions();

  const onEditClick = (e: MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setEditUserDialogVisible(true);
  };

  const onDeleteClick = (e: MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setConfirmDialogVisible(true);
  };

  const onConfirmEditing = (user: User | null) => {
    if (!user) {
      return;
    }

    updateUser(user);
    setEditUserDialogVisible(false);
  };

  const onConfirmDeleting = useCallback(() => {
    const usersToDelete = activeRowIds.length > 0 ? activeRowIds : [id];
    deleteUsers(usersToDelete);
    setActiveRowIds([]);
    setConfirmDialogVisible(false);
  }, [activeRowIds, id]);

  const onCancelEditing = () => setEditUserDialogVisible(false);
  const onCancelDeleting = () => setConfirmDialogVisible(false);

  const iconsData = [
    {
      id: 1,
      src: editIcon,
      alt: "Edit item",
      onClickHandler: onEditClick,
    },
    {
      id: 2,
      src: deleteIcon,
      alt: "Delete item",
      onClickHandler: onDeleteClick,
    },
  ];

  const icons = iconsData.map(({ id, src, alt, onClickHandler }) => (
    <input
      key={id}
      type="image"
      src={src}
      disabled={disabled}
      className={styles.control}
      alt={alt}
      onClick={onClickHandler}
    />
  ));

  return (
    <>
      {confirmDialogVisible && (
        <ConfirmDialog
          visible={confirmDialogVisible}
          setVisible={setConfirmDialogVisible}
          description="Do u really wanna delete this user?"
          title="Delete User"
          onConfirmHandler={onConfirmDeleting}
          onCancelHandler={onCancelDeleting}
        />
      )}
      {editUserDialogVisible && (
        <UserDialog
          visible={editUserDialogVisible}
          title="Edit User"
          user={user}
          setVisible={setEditUserDialogVisible}
          onSubmitHandler={onConfirmEditing}
          onCancelHandler={onCancelEditing}
        />
      )}
      {icons}
    </>
  );
};

export default UserTableControls;
