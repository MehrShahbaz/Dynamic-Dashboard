import { WidgetProps } from '../../../types/widgetTypes';

import styles from './DescriptionCard.module.scss';

const DescriptionCard = ({ data }: WidgetProps): JSX.Element => {
  console.log(1);

  return (
    <div className={styles.container}>
      {data.title && (
        <div className={styles.titleContainer}>
          <div className={styles.title}>
            {data.title}
            <span>{' (10)'}</span>
          </div>
        </div>
      )}
      <div className={styles.descriptionContainer}>
        <div className={styles.amount}>$7645.89</div>
        <div className={styles.profit}>
          <span>
            <div className={styles.arrowUp} />
            {'(25%)'}
          </span>
          <span>$5000</span>
        </div>
      </div>
    </div>
  );
};

export default DescriptionCard;
