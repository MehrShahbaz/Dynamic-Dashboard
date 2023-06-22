type WidgetType = 'pieChart' | 'chartLine' | 'barChart' | 'swarmPlot' | 'radialBar' | 'chordChart';

export enum WidgetTypes {
  PIE_CHART = 'pieChart',
  CHART_LINE = 'chartLine',
  BAR_CHART = 'barChart',
  SWARM_PLOT = 'swarmPlot',
  RADIAL_BAR = 'radialBar',
  CHORD_CHART = 'chordChart',
}

export interface Widget {
  id: string;
  priority: number;
  type: WidgetType;
  order: number;
  position: string;
  size: string;
}

export interface WidgetProps {
  data: Widget;
}
