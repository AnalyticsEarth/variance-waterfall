import pq from 'picasso-plugin-q';

var interactionsSetup = function() {
  "use strict";
  let rangeRef = 'rangex';
  var interactions = [{
    type: 'native',
    events: {
      mousedown: function(e) {
        const overComp = this.chart.componentsFromPoint({
          x: e.clientX,
          y: e.clientY
        })[0];
        rangeRef = overComp && ~["left", "right"].indexOf(overComp.dock) ? 'rangey' : 'rangex';

        if (typeof this.chart.component(rangeRef) != 'undefined') {
          this.chart.component(rangeRef).emit('rangeStart', mouseEventToRangeEvent(e));
        }

      },
      mousemove: function(e) {
        if (typeof this.chart.component(rangeRef) != 'undefined') {
          this.chart.component(rangeRef).emit('rangeMove', mouseEventToRangeEvent(e));
        }
      },
      mouseup: function(e) {
        if (typeof this.chart.component(rangeRef) != 'undefined') {
          this.chart.component(rangeRef).emit('rangeEnd', mouseEventToRangeEvent(e));
        }
      }
    }
  }];

  return interactions;
};

var mouseEventToRangeEvent = function(e) {
  return {
    center: {
      x: e.clientX,
      y: e.clientY
    },
    deltaX: e.movementX,
    deltaY: e.movementY
  };
}

var enableSelectionOnFirstDimension = function(that, chart, brush, layout) {
  var chartBrush = chart.brush(brush);
  chartBrush.on('start', (x) => {});
  chartBrush.on('update', (added, removed) => {
    var selection = pq.selections(chartBrush)[0];
    if (selection.method === 'resetMadeSelections') {
      chartBrush.end();
      that.backendApi.clearSelections();
    } else
    if (selection.method === 'selectHyperCubeValues') {
      if (added[0].values.filter(i => i > -2).length > 0) {
        let val = selection.params[2].filter(i => i > -2);
        that.selectValues(selection.params[1], val, false);
      }
    } else
    if (selection.method === 'rangeSelectHyperCubeValues') {
      if (chartBrush.isActive) {
        that.backendApi.selectRange(selection.params[1], true);
      }
    }
  });
  return chartBrush;
};

export {
  interactionsSetup,
  mouseEventToRangeEvent,
  enableSelectionOnFirstDimension
}
