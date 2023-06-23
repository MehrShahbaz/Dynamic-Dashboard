import { ResponsiveSwarmPlot } from '@nivo/swarmplot';

import { swarmPlotData } from '../../../componentsData/index';
import { WidgetProps } from '../../../types/widgetTypes';

import styles from '../sharedStyle.module.scss';

const SwarmPlot = ({ data }: WidgetProps): JSX.Element => (
  <div className={styles.container}>
    {data.title && (
      <div className={styles.titleContainer}>
        <div className={styles.title}>{data.title}</div>
      </div>
    )}

    <ResponsiveSwarmPlot
      data={swarmPlotData}
      groups={['group A', 'group B', 'group C']}
      value="price"
      valueFormat="$.2f"
      valueScale={{ type: 'linear', min: 0, max: 500, reverse: false }}
      size={{
        key: 'volume',
        values: [4, 20],
        sizes: [6, 20],
      }}
      forceStrength={4}
      simulationIterations={100}
      borderColor={{
        from: 'color',
        modifiers: [
          ['darker', 0.6],
          ['opacity', 0.5],
        ],
      }}
      margin={{ top: 50, right: 100, bottom: 10, left: 100 }}
    />
  </div>
);

export default SwarmPlot;
