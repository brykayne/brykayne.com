"use client";

import React from 'react';
import styles from './styles.module.css';

interface OrbProps {
  onClick: () => void;
}

export default function Orb({ onClick }: OrbProps) {
  return (
    <div className={styles.orb} onClick={onClick}>
      <div className={styles.orbCore}></div>
      <div className={styles.orbRings}></div>
    </div>
  );
}