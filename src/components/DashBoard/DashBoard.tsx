import { useCallback } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { displayWidgetsByRow } from '../../helper/helper';
import { widgets } from '../../init/init';
import { Widget, WidgetTypes } from '../../types/widgetTypes';
import {
  BarChart,
  ChordChart,
  DescriptionCard,
  LineChart,
  PieChart,
  ProgressBar,
  RadialBar,
  SwarmPlot,
} from '../shared/index';

import styles from './DashBoard.module.scss';

const DashBoard = (): JSX.Element => {
  const currentWidget = useCallback((widget: Widget): JSX.Element => {
    const { WidgetType } = widget;

    switch (WidgetType) {
      case WidgetTypes.PIE_CHART:
        return <PieChart data={widget} />;
      case WidgetTypes.CHART_LINE:
        return <LineChart data={widget} />;
      case WidgetTypes.BAR_CHART:
        return <BarChart data={widget} />;
      case WidgetTypes.SWARM_PLOT:
        return <SwarmPlot data={widget} />;
      case WidgetTypes.RADIAL_BAR:
        return <RadialBar data={widget} />;
      case WidgetTypes.CHORD_CHART:
        return <ChordChart data={widget} />;
      case WidgetTypes.PROGRESS_BAR:
        return <ProgressBar data={widget} />;
      case WidgetTypes.DESCRIPTION_CARD:
        return <DescriptionCard data={widget} />;
      default:
        return <div />;
    }
  }, []);

  return (
    <Container>
      <div className={styles.dashBoard}>
        {widgets.map((_widget, index): JSX.Element => {
          const colWidgets = displayWidgetsByRow(widgets, index);

          if (colWidgets.length > 0) {
            return (
              <Row key={`row-${index}`}>
                {colWidgets.map(
                  (widget): JSX.Element => (
                    <Col key={widget.id}>{currentWidget(widget)}</Col>
                  )
                )}
              </Row>
            );
          }

          return <div key={`row-${index}`} />;
        })}
      </div>
    </Container>
  );
};

export default DashBoard;
