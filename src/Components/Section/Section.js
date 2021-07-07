import React from 'react';

import styles from './Section.module.scss';

const Section = ({ children }) => (
  <div className={styles.Section}>{children}</div>
);

export default Section;
