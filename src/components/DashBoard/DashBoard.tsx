import { useCallback } from 'react';

import { widgets } from '../../init/init';
import { Widget, WidgetTypes } from '../../types/widgetTypes';
import { BarChart, ChordChart, LineChart, PieChart, ProgressBar, RadialBar, SwarmPlot } from '../shared/index';

import styles from './DashBoard.module.scss';

const DashBoard = (): JSX.Element => {
  const currentWidget = useCallback((widget: Widget, index: number): JSX.Element => {
    const { type } = widget;

    switch (type) {
      case WidgetTypes.PIE_CHART:
        return <PieChart data={widgets[index]} />;
      case WidgetTypes.CHART_LINE:
        return <LineChart data={widgets[index]} />;
      case WidgetTypes.BAR_CHART:
        return <BarChart data={widgets[index]} />;
      case WidgetTypes.SWARM_PLOT:
        return <SwarmPlot data={widgets[index]} />;
      case WidgetTypes.RADIAL_BAR:
        return <RadialBar data={widgets[index]} />;
      case WidgetTypes.CHORD_CHART:
        return <ChordChart data={widgets[index]} />;
      case WidgetTypes.PROGRESS_BAR:
        return <ProgressBar data={widgets[index]} />;
      default:
        return <div />;
    }
  }, []);

  return (
    <div className={styles.dashBoard}>
      {widgets.map(
        (widget, index): JSX.Element => (
          <div key={widget.id} className={styles.widgetContainer}>
            {currentWidget(widget, index)}
          </div>
        )
      )}
    </div>
  );
};

export default DashBoard;
