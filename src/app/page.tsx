"use client";

import React, { useState } from 'react';
import Header from './components/Header';
import './globals.css';
import Orb from './components/Orb';
import Modal from './components/Modal';

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="terminal">
      <Header />
      <div className="command">
        <p>About Bryan</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span>Bryan is a product leader who builds things</span>
          <Orb onClick={() => setModalOpen(true)} />
        </div>
      </div>
      
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <div>

<br />
<br />

[Ex-Peloton]  [Ex-SuperRare]  [Ex-Chase] 

<br />
<br />

================================

<br />
<br />

Bryan is a seasoned product leader with a decade of experience leading small and large teams to create and scale global products. His passion lies at the intersection of technology and creativity, where he leverages the latest tech advancements like blockchain & NFTs. Alongside his extensive career in product leadership, Bryan has over 1000+ hours of public speaking, acting, and stand-up comedy experience. Bryan’s unique background has honed his ability to develop products that will bring billions onchain.
          
<br />
          </div>
        </Modal>
      )}
    </div>
  );
}
