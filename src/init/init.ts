import { Widget, WidgetTypes } from '../types/widgetTypes';

export const widgets: Widget[] = [
  {
    id: 'widget8',
    order: 2,
    position: { row: 8, col: 1 },
    priority: 1,
    size: '300px',
    title: 'Repairs',
    WidgetType: WidgetTypes.DESCRIPTION_CARD,
  },
  {
    id: 'widget9',
    order: 2,
    position: { row: 8, col: 2 },
    priority: 1,
    size: '300px',
    title: 'Network Unlocks',
    WidgetType: WidgetTypes.DESCRIPTION_CARD,
  },
  {
    id: 'widget10',
    order: 2,
    position: { row: 8, col: 3 },
    priority: 1,
    size: '300px',
    title: 'Accessories & Parts',
    WidgetType: WidgetTypes.DESCRIPTION_CARD,
  },
  {
    id: 'widget11',
    order: 2,
    position: { row: 8, col: 4 },
    priority: 1,
    size: '300px',
    title: 'Trade In',
    WidgetType: WidgetTypes.DESCRIPTION_CARD,
  },
  {
    id: 'widget1',
    order: 1,
    position: { row: 1, col: 1 },
    priority: 1,
    size: '300px',
    title: 'Pie Chart',
    WidgetType: WidgetTypes.PIE_CHART,
  },
  {
    id: 'widget2',
    order: 2,
    position: { row: 1, col: 1 },
    priority: 2,
    size: '300px',
    title: 'Line Chart',
    WidgetType: WidgetTypes.CHART_LINE,
  },
  {
    id: 'widget3',
    order: 2,
    position: { row: 2, col: 1 },
    priority: 2,
    size: '300px',
    title: 'Bar Chart',
    WidgetType: WidgetTypes.BAR_CHART,
  },
  {
    id: 'widget4',
    order: 2,
    position: { row: 2, col: 1 },
    priority: 2,
    size: '300px',
    title: 'Swarm Plot',
    WidgetType: WidgetTypes.SWARM_PLOT,
  },
  {
    id: 'widget5',
    order: 2,
    position: { row: 3, col: 1 },
    priority: 2,
    size: '300px',
    title: 'Radial Bar',
    WidgetType: WidgetTypes.RADIAL_BAR,
  },
  {
    id: 'widget6',
    order: 2,
    position: { row: 3, col: 1 },
    priority: 2,
    size: '300px',
    WidgetType: WidgetTypes.CHORD_CHART,
    title: 'Chord Chart',
  },
  {
    id: 'widget7',
    order: 2,
    position: { row: 1, col: 1 },
    priority: 1,
    size: '300px',
    title: 'Progress Bar',
    WidgetType: WidgetTypes.PROGRESS_BAR,
  },
];

widgets.sort((a, b) => {
  if (a.position.row === b.position.row) {
    return a.position.col - b.position.col;
  }

  return a.position.row - b.position.row;
});
