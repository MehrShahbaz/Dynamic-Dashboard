type WidgetType = 'pieChart' | 'chartLine' | 'barChart' | 'swarmPlot' | 'radialBar' | 'chordChart' | 'progressBar';

export type WIdgetType = 'sm' | 'm' | 'l' | 'xl';

export enum WidgetTypes {
  PIE_CHART = 'pieChart',
  CHART_LINE = 'chartLine',
  BAR_CHART = 'barChart',
  SWARM_PLOT = 'swarmPlot',
  RADIAL_BAR = 'radialBar',
  CHORD_CHART = 'chordChart',
  PROGRESS_BAR = 'progressBar',
}

export interface Widget {
  id: string;
  title?: string;
  priority: number;
  type: WidgetType;
  order: number;
  position: string;
  size: string;
}

export interface WidgetProps {
  data: Widget;
}
