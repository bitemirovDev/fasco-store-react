'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { ProductImages } from '@/types/product';
import styles from './Gallery.module.scss';

type GalleryProps = {
  images: ProductImages;
};

export default function Gallery({ images }: GalleryProps) {
  const [activeImage, setActiveImage] = useState(images.main);

  const handleImageChange = (src: string) => {
    setActiveImage(src);
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.thumbnails}>
        {Object.entries(images).map(([key, imageSrc]) => (
          <div
            key={key}
            className={clsx(
              styles['thumbnails-el'],
              activeImage === imageSrc ? styles.active : '',
            )}>
            <Image
              src={`/img/products/${imageSrc}`}
              alt={`Thumbnail for ${key}`}
              width={66}
              height={86}
              style={{ objectFit: 'cover' }}
              onClick={() => handleImageChange(imageSrc)}
            />
          </div>
        ))}
      </div>
      <div className={styles['main-image']}>
        <Image
          src={`/img/products/${activeImage}`}
          alt="product image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}
