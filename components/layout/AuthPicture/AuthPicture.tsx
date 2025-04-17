import Image, { StaticImageData } from 'next/image';
import styles from './AuthPicture.module.scss';

interface AuthPictureProps {
  src: StaticImageData;
  sizes: string;
  alt: string;
}

export default function AuthPicture({ src, sizes, alt }: AuthPictureProps) {
  return (
    <div className={styles.picture}>
      <Image fill style={{ objectFit: 'cover' }} sizes="" src={src} alt={alt} />
    </div>
  );
}
