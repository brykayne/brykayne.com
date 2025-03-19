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
        <div className="command-line">
          Bryan builds things → → →
          <Orb onClick={() => setIsModalOpen(true)} />
        </div>
      </div>
      
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div>

<br />

[Ex-Peloton]  [Ex-SuperRare]  [Ex-Chase] 

<br />
<br />

================================

<br />
<br />
I'm a passionate and driven product leader with a decade of experience building and scaling innovative products. I've led product development at globally recognized brands like Peloton and JPMorganChase, scaled blockchain startups like SuperRare, and built multiple 0-1 products through my own product consultancy.
<br />
<br />
The products I've launched have generated over $3B in revenue and impacted millions of users.
<br />
<br />
At my core, my mission is to spread joy through connection - a passion shaped by my unconventional background as a stand-up comic and off-Broadway actor before transitioning into product leadership. My blend of technical expertise and dynamic relationship-building skills enables me to lead teams effectively, inspire stakeholders, and create meaningful impact in fast-paced environments.
<br />
<br />
Always happy to connect - whether to chat, collaborate, or swap stories over coffee!
          
<br />
          </div>
        </Modal>
      )}
    </div>
  );
}
