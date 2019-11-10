/**
 * Container.
 */

import React, { ReactElement, ReactNode } from 'react';
import styles from './Container.module.css';

type PropTypes = {
  children: ReactNode,
};

function Container({ children }: PropTypes): ReactElement {
  return (
    <div className={styles.Container}>
      {children}
    </div>
  );
}

export default Container;
