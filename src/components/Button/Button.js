/**
 * Button.
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

const defaultProps = {
  type: 'button',
};

function Button(props) {
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

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
