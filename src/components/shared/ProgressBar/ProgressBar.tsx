import BootstrapProgressBar from 'react-bootstrap/ProgressBar';

import { progressBarData } from '../../../componentsData/index';
import { WidgetProps } from '../../../types/widgetTypes';

import styles from './ProgressBar.module.scss';

const CustomProgressBar = ({ data }: WidgetProps): JSX.Element => (
  <div className={styles.container}>
    {data.title && (
      <div className={styles.titleContainer}>
        <div className={styles.title}>{data.title}</div>
      </div>
    )}
    <div className={styles.rootConatiner}>
      <div className={styles.headingContainer}>
        <span>{data.title}</span>
        <span>{progressBarData[3]}%</span>
      </div>
      <div>
        <BootstrapProgressBar>
          <BootstrapProgressBar animated variant="success" now={progressBarData[0]} key={1} />
          <BootstrapProgressBar animated variant="warning" now={progressBarData[1]} key={2} />
          <BootstrapProgressBar animated variant="danger" now={progressBarData[2]} key={3} />
        </BootstrapProgressBar>
      </div>
    </div>
  </div>
);

export default CustomProgressBar;
