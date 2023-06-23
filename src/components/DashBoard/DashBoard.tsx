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
  const currentWidget = useCallback((widget: Widget, index: number): JSX.Element => {
    const { WidgetType } = widget;

    switch (WidgetType) {
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
      case WidgetTypes.DESCRIPTION_CARD:
        return <DescriptionCard data={widgets[index]} />;
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
              <Row>
                {colWidgets.map(
                  (widget): JSX.Element => (
                    <Col>{currentWidget(widget, index)}</Col>
                  )
                )}
              </Row>
            );
          }

          return <div />;
        })}
      </div>
    </Container>
  );
};

export default DashBoard;
