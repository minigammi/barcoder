/**
 * Input.
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Input.module.css';

const propTypes = {
  value: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.node,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  visibleOnPrint: PropTypes.bool,
};

const defaultProps = {
  value: '',
  visibleOnPrint: false,
};

function Input(props) {
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

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default memo(Input);
