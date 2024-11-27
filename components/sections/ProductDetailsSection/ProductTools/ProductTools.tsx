import styles from './ProductTools.module.scss';
import Tool from './Tool/Tool';

export default function ProductTolls() {
  return (
    <div className={styles.tools}>
      <Tool title="Compare" iconSrc="/img/icons/compare.svg" />
      <Tool title="Ask a question" iconSrc="/img/icons/ask.svg" />
      <Tool title="Share" iconSrc="/img/icons/share.svg" />
    </div>
  );
}
