/**
 * Button.
 */

import React, { Fragment, ReactNode, ReactElement, MouseEvent } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

type PropTypes = {
  type?: 'button' | 'submit',
  children: ReactNode,
  onClick?: (event: MouseEvent) => void,
};

const defaultProps = {
  type: 'button',
};

function Button(props: PropTypes): ReactElement {
  const {
    children,
    type,
    onClick,
  } = props;

  return (
    <Fragment>
      <button
        type={type}
        onClick={onClick}
        className={styles.Button}
      >
        {children}
      </button>
      {' '}
    </Fragment>
  );
}

Button.defaultProps = defaultProps;

export default Button;
