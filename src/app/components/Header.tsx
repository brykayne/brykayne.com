import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArchway, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

const Header = () => (
  <div className="header-container">
    <div className="header-content">
      <pre className="ascii-name">
        {`
 _                _                           
| |__  _ __ _   _| | ____ _ _   _ _ __   ___ 
| '_ \\| '__| | | | |/ / _\` | | | | '_ \\ / _ \\
| |_) | |  | |_| |   < (_| | |_| | | | |  __/
|_.__/|_|   \\__, |_|\_\\__,_|\\__, |_| |_|\\___|
              |___/           |___/             
        `}
      </pre>
      <div className="social-links">
        <a href="https://linkedin.com/in/brykayne" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://warpcast.com/brykayne" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faArchway} />
        </a>
        <a href="https://x.com/brykayne" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a href="mailto:brykayne@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://calendly.com/brykayne/30min" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faCalendarAlt} />
        </a>
      </div>
    </div>
  </div>
);

export default Header;