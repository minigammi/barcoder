/**
 * Button.
 */

import React, { Fragment, ReactNode, ReactElement, MouseEvent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Button.module.css';

type PropTypes = {
  type?: 'button' | 'submit',
  title?: string,
  children: ReactNode,
  onClick?: (event: MouseEvent) => void,
  className?: string,
};

const defaultProps = {
  type: 'button',
};

function Button(props: PropTypes): ReactElement {
  const {
    children,
    type,
    title,
    onClick,
    className,
  } = props;

  return (
    <Fragment>
      <button
        type={type}
        onClick={onClick}
        className={classNames(styles.Button, className)}
        title={title}
      >
        {children}
      </button>
      {' '}
    </Fragment>
  );
}

Button.defaultProps = defaultProps;

export default Button;
