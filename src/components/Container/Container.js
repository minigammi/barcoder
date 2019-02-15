/**
 * Container.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Container.module.css';

const propTypes = {
  children: PropTypes.node,
};

function Container({ children }) {
  return (
    <div className={styles.Container}>
      {children}
    </div>
  );
}

Container.propTypes = propTypes;

export default Container;
