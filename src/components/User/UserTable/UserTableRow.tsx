import { Dispatch, SetStateAction } from "react";
import { User } from "../../../types";
import {
  getUserDisplayName,
  getUserOrganizationName,
} from "../../../utils/userService";
import UserTableControls from "./UserTableControls";
import styles from "./UserTableRow.module.css";

interface UserTableRowProps {
  user: User;
  selected: boolean;
  disabled: boolean;
  activeRowIds: number[];
  setActiveRowIds: Dispatch<SetStateAction<number[]>>;
  onSelectRowHandler: (id: User["id"]) => void;
}

const UserTableRow = ({
  user,
  selected,
  disabled,
  activeRowIds,
  setActiveRowIds,
  onSelectRowHandler,
}: UserTableRowProps) => {
  const { organizationId, email, id } = user;
  const displayName = getUserDisplayName(user);
  const organizationName = getUserOrganizationName(organizationId);

  const rowClassList = [];
  if (selected) {
    rowClassList.push(styles.activeRow);
  }

  if (disabled) {
    rowClassList.push(styles.disabledRow);
  }

  return (
    <tr
      onClick={() => onSelectRowHandler(id)}
      className={rowClassList.join(" ")}
    >
      <td>{displayName}</td>
      <td>{organizationName}</td>
      <td>{email}</td>
      <td className={styles.controls}>
        <UserTableControls
          id={id}
          user={user}
          disabled={disabled}
          activeRowIds={activeRowIds}
          setActiveRowIds={setActiveRowIds}
        />
      </td>
    </tr>
  );
};

export default UserTableRow;
