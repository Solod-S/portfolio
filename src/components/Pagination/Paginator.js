import { Pagination } from '@mui/material';
import './paginator.css';

const Paginator = ({ count, page, handleChange }) => {
  return (
    <div className="wrapper">
      <Pagination
        siblingCount={0}
        count={count}
        page={page}
        onChange={handleChange}
      />
    </div>
  );
};

export default Paginator;
