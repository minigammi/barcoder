/**
 * AddButton.
 */

import React, { MouseEvent, ReactElement } from 'react';
import Button from '../Button';
import circleButtonStyles from '../../styles/CircleButton.module.css';
import styles from './AddButton.module.css';

type PropTypes = {
  onClick: (event: MouseEvent) => void,
};

function AddButton(props: PropTypes): ReactElement {
  const { onClick } = props;
  return (
    <div className={styles.AddButtonContainer}>
      <Button
        className={`${styles.AddButton} ${circleButtonStyles.CircleButton}`}
        onClick={onClick}
        title="Add barcode"
        primary
      >
        +
      </Button>
    </div>
  );
}

export default AddButton;
