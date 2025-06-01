import Image, { StaticImageData } from 'next/image';
import styles from './AuthPicture.module.scss';

interface AuthPictureProps {
  src: StaticImageData;
  alt: string;
  sizes: string;
}

export default function AuthPicture({ src, sizes, alt }: AuthPictureProps) {
  return (
    <div className={styles.picture}>
      <Image fill style={{ objectFit: 'cover' }} sizes={sizes} src={src} alt={alt} />
    </div>
  );
}
