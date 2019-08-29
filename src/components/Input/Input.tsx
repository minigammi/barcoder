/**
 * Input.
 */

import React, { ChangeEvent, memo, ReactNode } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Input.module.css';

type PropTypes = {
  value?: string,
  id: string,
  name?: string,
  label: ReactNode,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
  className?: string,
  visibleOnPrint?: boolean,
};

const defaultProps = {
  value: '',
  visibleOnPrint: false,
};

function Input(props: PropTypes) {
  const {
    value,
    id,
    name = id,
    onChange,
    label,
    className,
    visibleOnPrint,
  } = props;

  const inputClassName = classNames(
    styles.Input,
    visibleOnPrint && !!value && styles.Printable,
    className,
  );

  return (
    <label className={inputClassName}>
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        maxLength={25}
        placeholder=" "
      />
      <span>{label}</span>
    </label>
  );
}

Input.defaultProps = defaultProps;

export default memo(Input);
