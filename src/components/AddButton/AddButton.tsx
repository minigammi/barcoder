/**
 * AddButton.
 */

import React, { MouseEvent, ReactElement } from 'react';
import PropTypes from 'prop-types';
import styles from './AddButton.module.css';

type PropTypes = {
  onClick: (event: MouseEvent) => void,
};

function AddButton(props: PropTypes): ReactElement {
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

export default AddButton;
