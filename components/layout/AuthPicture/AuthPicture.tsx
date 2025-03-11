import Image from 'next/image';
import styles from './AuthPicture.module.scss';

interface AuthPictureProps {
  src: string;
  sizes: string;
}

export default function AuthPicture({ src, sizes }: AuthPictureProps) {
  // const sizes = "(max-width: 768px) 100vw"
  return (
    <div className={styles.picture}>
      <Image fill style={{ objectFit: 'cover' }} sizes={sizes} src={src} alt={src} />
    </div>
  );
}
