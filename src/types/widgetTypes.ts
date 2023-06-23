type WidgetCol = 1 | 2 | 3 | 4;

type WidgetPosition = {
  row: number;
  col: WidgetCol;
};

export enum WidgetTypes {
  PIE_CHART = 'pieChart',
  CHART_LINE = 'chartLine',
  BAR_CHART = 'barChart',
  SWARM_PLOT = 'swarmPlot',
  RADIAL_BAR = 'radialBar',
  CHORD_CHART = 'chordChart',
  PROGRESS_BAR = 'progressBar',
  DESCRIPTION_CARD = 'descriptionCard',
}

export interface Widget {
  id: string;
  title?: string;
  priority: number;
  WidgetType: WidgetTypes;
  order: number;
  position: WidgetPosition;
  size: string;
}

export interface WidgetProps {
  data: Widget;
}

export type WidgetArray = Widget[];
