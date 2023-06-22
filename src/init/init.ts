import { Widget } from '../types/widgetTypes';

export const widgets: Widget[] = [
  {
    id: 'widget1',
    order: 1,
    position: '1 / 1 / span 2',
    priority: 1,
    size: '300px',
    type: 'pieChart',
  },
  {
    id: 'widget2',
    order: 2,
    position: '2 / 2',
    priority: 2,
    size: '300px',
    type: 'chartLine',
  },
  {
    id: 'widget3',
    order: 2,
    position: '2 / 2',
    priority: 2,
    size: '300px',
    type: 'barChart',
  },
  {
    id: 'widget4',
    order: 2,
    position: '2 / 2',
    priority: 2,
    size: '300px',
    type: 'swarmPlot',
  },
  {
    id: 'widget5',
    order: 2,
    position: '2 / 2',
    priority: 2,
    size: '300px',
    type: 'radialBar',
  },
  {
    id: 'widget6',
    order: 2,
    position: '2 / 2',
    priority: 2,
    size: '300px',
    type: 'chordChart',
  },
];
