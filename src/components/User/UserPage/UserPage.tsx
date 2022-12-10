import { useState, useMemo, useEffect } from "react";
import { Pagination, Button } from "../../UI";
import { UserTable, UserDialog } from "../index";
import { useActions, useTypedSelector } from "../../../hooks";
import type { User } from "../../../types";
import styles from "./UserPage.module.css";
import { getUsersPage } from "../../../utils/userService";

const UserPage = () => {
  const [userDialogVisible, setUserDialogVisible] = useState(false);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const { addUser } = useActions();
  const users = useTypedSelector((state) => state.user.users);

  const currentPageUsers = useMemo(
    () => getUsersPage(users, page, pageSize),
    [users, page, pageSize]
  );

  useEffect(() => {
    if (page * pageSize >= users.length) {
      setPage((prev) => prev - 1);
    }
  }, [users]);

  const onSubmitHandler = (userItem: User | null) => {
    if (!userItem) {
      return;
    }

    addUser(userItem);
    setUserDialogVisible(false);
  };

  const onCancelHandler = () => setUserDialogVisible(false);
  const addUserHandler = () => setUserDialogVisible(true);

  return (
    <div className={styles.wrapper}>
      {userDialogVisible && (
        <UserDialog
          visible={userDialogVisible}
          title="Add User"
          user={null}
          setVisible={setUserDialogVisible}
          onSubmitHandler={onSubmitHandler}
          onCancelHandler={onCancelHandler}
        />
      )}
      <div className={styles.header}>
        <Button
          size="big"
          style={{ marginBottom: "1rem" }}
          onClick={addUserHandler}
        >
          Add User
        </Button>
      </div>
      <UserTable users={currentPageUsers} page={page} />
      <Pagination
        max={users.length}
        page={page}
        setPage={setPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
    </div>
  );
};

export default UserPage;
