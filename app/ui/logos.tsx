import React from 'react';
import Image from 'next/image';

export default function Logos() {
  return (
    <section className="logos">
      <div className="container">
        <div className="logos__container">
          <div className="logo">
            <Image width={196} height={56} src="/img/logos/chanel.jpg" alt="chanel logo" />
          </div>
          <div className="logo">
            <Image width={196} height={56} src="/img/logos/louis.jpg" alt="louis logo" />
          </div>
          <div className="logo">
            <Image width={196} height={56} src="/img/logos/prada.jpg" alt="prada logo" />
          </div>
          <div className="logo">
            <Image width={196} height={56} src="/img/logos/calvin.jpg" alt="calvin logo" />
          </div>
          <div className="logo">
            <Image width={196} height={56} src="/img/logos/denim.jpg" alt="denim logo" />
          </div>
        </div>
      </div>
    </section>
  );
}
