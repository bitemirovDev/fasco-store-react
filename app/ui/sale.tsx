import React from 'react';
import { Button } from './button';

export default function Sale() {
  return (
    <section className="sale">
      <div className="container">
        <div className="sale__grid">
          <div className="sale__grid-item"></div>
          <div className="sale__grid-item"></div>
          <div className="sale__grid-item">
            <div className="sale__text">
              <p className="sale__text-ultimate">ULTIMATE</p>
              <p className="sale__text-sale">SALE</p>
              <p className="sale__text-collection">New collection</p>
            </div>

            <div className="sale__btn">
              <Button className="btn--medium">Shop now</Button>
            </div>
          </div>
          <div className="sale__grid-item"></div>
          <div className="sale__grid-item"></div>
        </div>
      </div>
    </section>
  );
}
