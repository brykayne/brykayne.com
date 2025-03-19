import { faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArchway, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface SocialLink {
  href: string;
  icon: IconDefinition;
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    href: 'https://linkedin.com/in/brykayne',
    icon: faLinkedin,
    label: 'LinkedIn'
  },
  {
    href: 'https://farcaster.xyz/brykayne',
    icon: faArchway,
    label: 'Farcaster'
  },
  {
    href: 'https://x.com/brykayne',
    icon: faXTwitter,
    label: 'X/Twitter'
  },
  {
    href: 'mailto:brykayne@gmail.com',
    icon: faEnvelope,
    label: 'Email'
  },
  {
    href: 'https://calendly.com/brykayne/30min',
    icon: faCalendarAlt,
    label: 'Calendar'
  }
]; 