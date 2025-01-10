"use client";

import React from 'react';
import './Orb.css';

interface OrbProps {
  onClick: () => void;
}

export default function Orb({ onClick }: OrbProps) {
  return (
    <div className="orb" onClick={onClick}>
      <div className="orb-core"></div>
      <div className="orb-rings"></div>
    </div>
  );
}