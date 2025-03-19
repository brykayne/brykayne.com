"use client";

import React, { useState } from 'react';
import Header from '@/app/components/layout/Header';
import Modal from '@/app/components/common/Modal';
import Orb from '@/app/components/common/Orb';
import styles from './page.module.css';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="terminal">
      <Header />
      <div className="command">
        <p>About Bryan</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span>Bryan is a product leader who builds things</span>
          <Orb onClick={() => setIsModalOpen(true)} />
        </div>
      </div>
      
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div>

<br />
<br />

[Ex-Peloton]  [Ex-SuperRare]  [Ex-Chase] 

<br />
<br />

================================

<br />
<br />

Bryan is a seasoned product leader with a decade of experience leading small and large teams to create and scale global products. His passion lies at the intersection of technology and creativity, where he leverages the latest tech advancements like blockchain & NFTs. Alongside his extensive career in product leadership, Bryan has over 1000+ hours of public speaking, acting, and stand-up comedy experience. Bryan's unique background has honed his ability to develop products that will bring billions onchain.
          
<br />
          </div>
        </Modal>
      )}
    </div>
  );
}
