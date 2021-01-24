import propTypes from 'prop-types';

import s from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <div className={s.filterContainer}>
      <label className={s.filterLabel}>
        Find contact
        <input
          className={s.filterInput}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default Filter;
