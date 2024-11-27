import Image from 'next/image';
import styles from './Tool.module.scss';

type TollProps = {
  title: string;
  iconSrc: string;
};

export default function Tool({ title, iconSrc }: TollProps) {
  return (
    <button className={styles['tools-el']} type="button">
      <Image src={iconSrc} alt={title} width={20} height={20} />
      {title}
    </button>
  );
}
