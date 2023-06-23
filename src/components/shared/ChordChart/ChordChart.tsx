import { ResponsiveChord } from '@nivo/chord';

import { chordChartData } from '../../../componentsData/index';
import { WidgetProps } from '../../../types/widgetTypes';

import styles from '../sharedStyle.module.scss';

const ChordChart = ({ data }: WidgetProps): JSX.Element => (
  <div className={styles.container}>
    {data.title && (
      <div className={styles.titleContainer}>
        <div className={styles.title}>{data.title}</div>
      </div>
    )}

    <ResponsiveChord
      data={chordChartData}
      keys={['John', 'Raoul', 'Jane', 'Marcel', 'Ibrahim']}
      margin={{ top: 40, right: 0, bottom: 40, left: 0 }}
      valueFormat=".2f"
      padAngle={0.02}
      innerRadiusRatio={0.96}
      innerRadiusOffset={0.02}
      inactiveArcOpacity={0.25}
      arcBorderColor={{
        from: 'color',
        modifiers: [['darker', 0.6]],
      }}
      activeRibbonOpacity={0.75}
      inactiveRibbonOpacity={0.25}
      ribbonBorderColor={{
        from: 'color',
        modifiers: [['darker', 0.6]],
      }}
      labelRotation={-90}
      labelTextColor={{
        from: 'color',
        modifiers: [['darker', 1]],
      }}
      colors={{ scheme: 'nivo' }}
      motionConfig="stiff"
    />
  </div>
);

export default ChordChart;
