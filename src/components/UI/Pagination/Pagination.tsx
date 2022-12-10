import { Dispatch, SetStateAction, useEffect } from "react";
import { Button } from "../index";
import styles from "./Pagination.module.css";

interface PaginationProps {
  max: number;
  page: number;
  pageSize: number;
  setPage: Dispatch<SetStateAction<number>>;
  setPageSize: Dispatch<SetStateAction<number>>;
}

const Pagination = ({ max, page, pageSize, setPage }: PaginationProps) => {
  const limit = Math.ceil(max / pageSize);

  const onPrevPageClick = () => setPage((prev) => Math.max(prev - 1, 0));
  const onNextPageClick = () =>
    setPage((prev) => Math.min(prev + 1, limit - 1));

  useEffect(() => {
    setPage(0);
  }, [pageSize]);

  return (
    <div className={styles.paginationWrapper}>
      <Button size="small" onClick={onPrevPageClick}>
        Prev
      </Button>
      <h3>
        {page + 1}/{limit}
      </h3>
      <Button size="small" onClick={onNextPageClick}>
        Next
      </Button>
    </div>
  );
};

export default Pagination;
