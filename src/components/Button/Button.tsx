/**
 * Button.
 */

import React, { ReactNode, ReactElement, MouseEvent } from 'react';
import classNames from 'classnames';
import styles from './Button.module.css';

type PropTypes = {
  type?: 'button' | 'submit',
  title?: string,
  children: ReactNode,
  onClick?: (event: MouseEvent) => void,
  className?: string,
  primary?: boolean,
};

const defaultProps = {
  type: 'button',
  primary: false,
};

function Button(props: PropTypes): ReactElement {
  const {
    children,
    type,
    title,
    onClick,
    className,
    primary,
  } = props;

  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={classNames(styles.Button, primary && styles.ButtonPrimary, className)}
        title={title}
      >
        {children}
      </button>
      {' '}
    </>
  );
}

Button.defaultProps = defaultProps;

export default Button;
