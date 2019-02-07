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

  var app = qlik.currApp(this);



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
    element: $element.find('.lrp')[0]
  });

  $scope.chartBrush = enableSelectionOnFirstDimension($scope, $scope.chart, 'highlight', $scope.layout);


  $scope.updatedData = function(layout, mode, dataUpdate){

    console.log(layout);

    let up = {};
    app.theme.getApplied().then(qTheme => {
      console.log(qTheme);
      $scope.theme = qTheme;
      ThemeManager.setAppTheme($scope.theme);
      up.settings = bridgepicassospec(layout);
      $scope.chart.update(up);
    });


    if(dataUpdate){
      console.log("Data Update");
      let hq = ConvertHypercube.convertHypercube($scope.layout.qHyperCube);
      console.log(hq);
      up.data = [{
        type: 'q',
        key: 'qHyperCube',
        data: hq
      }];
    }

    if(mode === 'edit' || typeof $scope.chart.settings === 'undefined'){
      console.log("Settings Update");
      up.settings = bridgepicassospec(layout);
    }

    $scope.chart.update(up);
      console.log("Update Complete");
  }

}]
