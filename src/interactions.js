import pq from 'picasso-plugin-q';

var interactionsSetup = function() {
  "use strict";
  let rangeRef = 'rangex';
  var interactions = [{
    type: 'hammer',
    gestures:[{
      type: 'Pan',
      options:{
        event: 'range',
        direction: 2 | 4
      },
      events:{
        rangestart: function(e){
          if (typeof this.chart.component(rangeRef) != 'undefined') {
            this.chart.component(rangeRef).emit('rangeStart', e);
          }
        },
        rangemove: function(e){
          if (typeof this.chart.component(rangeRef) != 'undefined') {
            this.chart.component(rangeRef).emit('rangeMove', e);
          }
        },
        rangeend: function(e){
          if (typeof this.chart.component(rangeRef) != 'undefined') {
            this.chart.component(rangeRef).emit('rangeEnd', e);
          }
        }
      }
    }]

  }];

  return interactions;
};

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
      let addedvals = [];
      let removedvals = [];
      if(added.length > 0) addedvals = added[0].values.filter(i => i > -2);
      if(removed.length > 0) removedvals = removed[0].values.filter(i => i > -2);
      let list = addedvals.concat(removedvals);
      that.selectValues(selection.params[1], list, true);
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
  enableSelectionOnFirstDimension
};
