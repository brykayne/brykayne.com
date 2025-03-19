import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialLinks } from '@/constants/social-links';
import PartyCounter from '@/app/components/common/PartyCounter';
import styles from './styles.module.css';

const Header = () => (
  <div className={styles.headerContainer}>
    <div className={styles.headerContent}>
      <pre className={styles.asciiName}>
        {`
 _                _                           
| |__  _ __ _   _| | ____ _ _   _ _ __   ___ 
| '_ \\| '__| | | | |/ / _\` | | | | '_ \\ / _ \\
| |_) | |  | |_| |   < (_| | |_| | | | |  __/
|_.__/|_|   \\__, |_|\_\\__,_|\\__, |_| |_|\\___|
              |___/           |___/             
        `}
      </pre>
      <div className={styles.socialLinks}>
        {socialLinks.map((link) => (
          <a 
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            <FontAwesomeIcon icon={link.icon} />
          </a>
        ))}
      </div>
      <PartyCounter />
    </div>
  </div>
);

export default Header;