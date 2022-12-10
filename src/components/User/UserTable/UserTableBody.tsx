import { useEffect, useState } from "react";
import UserTableRow from "./UserTableRow";
import type { User } from "../../../types";

interface UserTableBodyProps {
  users: User[];
  page: number;
}

const UserTableBody = ({ users, page }: UserTableBodyProps) => {
  const [activeRowIds, setActiveRowIds] = useState<number[]>([]);

  useEffect(() => {
    setActiveRowIds([]);
  }, [page]);

  const onSelectRowHandler = (id: User["id"]) => {
    if (!activeRowIds.includes(id)) {
      setActiveRowIds((prev) => [...prev, id]);
      return;
    }

    const updatedIds = activeRowIds.filter((row) => row !== id);
    setActiveRowIds(updatedIds);
  };

  const userRows = users.map((user) => {
    const { id } = user;
    const selected = activeRowIds.includes(id);
    const disabled = activeRowIds.length > 0 && !activeRowIds.includes(id);

    return (
      <UserTableRow
        selected={selected}
        onSelectRowHandler={onSelectRowHandler}
        user={user}
        key={id}
        disabled={disabled}
        activeRowIds={activeRowIds}
        setActiveRowIds={setActiveRowIds}
      />
    );
  });

  return <tbody>{userRows}</tbody>;
};

export default UserTableBody;
