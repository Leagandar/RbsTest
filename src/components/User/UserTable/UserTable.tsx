import { memo } from "react";
import type { User } from "../../../types";
import styles from "./UserTable.module.css";
import UserTableBody from "./UserTableBody";

interface TableProps {
  users: User[];
  page: number;
}

const Table = memo(({ users, page }: TableProps) => {
  return (
    <div className={styles.tableWrapper}>
      <table border={2} className={styles.table}>
        <thead className={styles.tableHead}>
          <tr>
            <th>User</th>
            <th>Organization</th>
            <th>Email</th>
            <th className={styles.imageCell}></th>
          </tr>
        </thead>
        <UserTableBody users={users} page={page} />
      </table>
    </div>
  );
});

export default Table;
