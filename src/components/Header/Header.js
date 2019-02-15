/**
 * Header.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const propTypes = {
  children: PropTypes.node,
};

function Header(props) {
  const { children } = props;

  return (
    <div className={styles.Header}>
      <h1 className={styles.HeaderTitle}>Barcoder</h1>
      <div className={styles.HeaderContent}>{children}</div>
    </div>
  );
}

Header.propTypes = propTypes;

export default Header;
