"use client";

import React, { useState, ReactNode } from 'react';
import styles from './styles.module.css';
import { usePartyMode } from '../../../../contexts/PartyModeContext';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const { isPartyMode, togglePartyMode } = usePartyMode();

  const renderFloatingContent = (content: ReactNode) => {
    const processContent = (node: ReactNode): string => {
      if (typeof node === 'string') {
        return node.replace(/\.\s+\n/g, '. ').replace(/\.\s+/g, '. ');
      }
      if (Array.isArray(node)) return node.map(processContent).join('');
      if (React.isValidElement(node)) {
        if (node.type === 'br') return '\n';
        const element = node as React.ReactElement<{ children?: ReactNode }>;
        return processContent(element.props.children);
      }
      return String(node || '');
    };

    const text = processContent(content);
    
    // Split by newlines
    const lines = text.split('\n');
    
    return lines.map((line, lineIndex) => (
      <div key={`line-${lineIndex}`} className={styles.line} style={{ minHeight: '1.5em' }}>
        {line.split(/\s+/).map((word, wordIndex) => (
          word && (
            <span 
              key={`${lineIndex}-${wordIndex}`}
              className={`${styles.floatingWord} ${isMinimized ? styles.float : ''}`}
              style={{
                '--delay': `${Math.random() * 2}s`,
                '--float-x': `${Math.random() * 100 - 50}px`,
                '--float-y': `${Math.random() * 100 - 50}px`
              } as React.CSSProperties}
            >
              {word + ' '}
            </span>
          )
        ))}
      </div>
    ));
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent modal from closing
    // Create a new MouseEvent to trigger confetti
    const clickEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      clientX: e.clientX,
      clientY: e.clientY
    });
    document.dispatchEvent(clickEvent);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={`${styles.modalContent} modal-content`} onClick={handleModalClick}>
        <div className={styles.modalHeader}>
          <button className={`${styles.closeButton} close-button`} onClick={onClose}>×</button>
          <button className={`${styles.minimizeButton} minimize-button`} onClick={() => setIsMinimized(!isMinimized)}>−</button>
          <button 
            className={`${styles.maximizeButton} maximize-button`}
            onClick={togglePartyMode}
          >
            +
          </button>
        </div>
        <div className={`${styles.modalBody} modal-body ${isMinimized ? styles.minimizedFloat : ''}`}>
          {renderFloatingContent(children)}
        </div>
      </div>
    </div>
  );
}