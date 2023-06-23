import { WidgetArray } from '../types/widgetTypes';

export const displayWidgetsByRow = (widgets: WidgetArray, row: number): WidgetArray => {
  const widgetsByRow = widgets.filter((widget) => widget.position.row === row);

  return widgetsByRow;
};
