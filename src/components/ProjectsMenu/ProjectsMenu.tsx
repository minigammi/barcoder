/**
 * ProjectsMenu.
 */

import React, { ReactNode } from 'react';
import styles from './ProjectsMenu.module.css';

type PropTypes = {
  children?: ReactNode,
};

function ProjectsMenu(props: PropTypes) {
  const { children } = props;

  return (
    <div className={styles.ProjectsMenu}>
      {children}
    </div>
  );
}

export default ProjectsMenu;
