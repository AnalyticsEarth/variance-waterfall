import ConvertHypercube from "./converthypercube"
import picasso from 'picasso.js';
import pq from 'picasso-plugin-q';

import bridgepicassospec from "./bridgepicassospec";
import ThemeManager from './theme'

import {
  interactionsSetup,
  mouseEventToRangeEvent,
  enableSelectionOnFirstDimension
} from './interactions.js'

var qlik = window.require('qlik');

export default ['$scope', '$element', function($scope, $element) {
  $scope.qlik = qlik;
  $scope.theme = null;
  $scope.updated = false;

  $scope.app = qlik.currApp(this);

  picasso.use(pq);

  $scope.pic = picasso({
    renderer: {
      prio: ['canvas']
    },
    logger: { // experimental
      level: 4
    },
    style: ThemeManager.getPicassoTheme()
  });

  $scope.chart = $scope.pic.chart({
    element: $element.find('.lrp')[0],
    updated: () => {
      $scope.updated = true;
    },
    beforeUpdated: () => {
      $scope.updated = false;
    }
  });

  $scope.chartBrush = enableSelectionOnFirstDimension($scope, $scope.chart, 'highlight', $scope.layout);


  $scope.updatedData = async function(layout, mode, dataUpdate) {
    let up = {};

    if (dataUpdate) {
      let hq = ConvertHypercube.convertHypercube($scope.layout.qHyperCube);
      up.data = [{
        type: 'q',
        key: 'qHyperCube',
        data: hq
      }];
    }

    if (mode === 'edit' || typeof $scope.chart.settings === 'undefined') {
      up.settings = bridgepicassospec(layout, $scope.$parent.options.direction);
    }

    let update = $scope.chart.update(up);
    console.log($scope.updated);
  }

}]
