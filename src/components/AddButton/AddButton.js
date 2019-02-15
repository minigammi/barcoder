/**
 * AddButton.
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './AddButton.module.css';

const propTypes = {
  onClick: PropTypes.func.isRequired,
};

function AddButton(props) {
  const { onClick } = props;
  return (
    <div className={styles.AddButtonContainer}>
      <button
        className={styles.AddButton}
        onClick={onClick}
        type="button"
        title="Add barcode"
      >
        +
      </button>
    </div>
  );
}

AddButton.propTypes = propTypes;

export default memo(AddButton, () => true);
