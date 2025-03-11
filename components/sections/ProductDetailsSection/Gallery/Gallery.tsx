'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import styles from './Gallery.module.scss';

type GalleryProps = {
  images: {
    main: string;
    additional: string[];
  };
};

export default function Gallery({ images }: GalleryProps) {
  const { main: mainImage, additional: additionalImages } = images;
  const [activeImage, setActiveImage] = useState(mainImage);

  const handleImageChange = (src: string) => {
    setActiveImage(src);
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.thumbnails}>
        {/* main image */}
        <div className={clsx(styles['thumbnails-el'], activeImage === mainImage ? styles.active : '')}>
          <Image
            src={`/img/products/${mainImage}`}
            alt={`Thumbnail for ${mainImage}`}
            width={66}
            height={86}
            style={{ objectFit: 'cover' }}
            onClick={() => handleImageChange(mainImage)}
          />
        </div>

        {/* additional images */}
        {additionalImages &&
          additionalImages.map((imageSrc, key) => (
            <div key={key} className={clsx(styles['thumbnails-el'], activeImage === imageSrc ? styles.active : '')}>
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

      {/* active image */}
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
