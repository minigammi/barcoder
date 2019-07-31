/**
 * Header.
 */

import React, { ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

type PropTypes = {
  children: ReactNode,
};

function Header(props: PropTypes): ReactElement {
  const { children } = props;

  return (
    <div className={styles.Header}>
      <h1 className={styles.HeaderTitle}>Barcoder</h1>
      <div className={styles.HeaderContent}>{children}</div>
    </div>
  );
}

export default Header;
