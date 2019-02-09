var colorsAndLegend = {
  translation: "properties.colorsAndLegend",
  type: "items",
  grouped: true,
  items: {
    colors: {
      type: "items",
      items: {
        autoColor: {
          ref: "color.auto",
          type: "boolean",
          translation: "properties.colors",
          component: "switch",
          defaultValue: true,
          options: [{
            value: true,
            translation: "Common.Auto"
          }, {
            value: false,
            translation: "Common.Custom"
          }]
        },
        positiveValueColor: {
          ref: "color.positiveValue.paletteColor",
          translation: "properties.waterfall.color.positiveValueColor",
          type: "object",
          component: "color-picker",
          dualOutput: true,
          defaultValue: {
            index: 6,
            color: null
          },
          show: (a) => !a.color.auto
        },
        negativeValueColor: {
          ref: "color.negativeValue.paletteColor",
          translation: "properties.waterfall.color.negativeValueColor",
          type: "object",
          component: "color-picker",
          dualOutput: true,
          defaultValue: {
            index: -1,
            color: "#cc6677"
          },
          show: (a) => !a.color.auto
        },
        subtotalColor: {
          ref: "color.subtotal.paletteColor",
          label: "Start Value Color",
          type: "object",
          component: "color-picker",
          dualOutput: true,
          defaultValue: {
            index: -1,
            color: "#c3c3c3"
          },
          show: (a) => !a.color.auto
        },
        subtotalEndColor: {
          ref: "color.subtotalEnd.paletteColor",
          label: "End Value Color",
          type: "object",
          component: "color-picker",
          dualOutput: true,
          defaultValue: {
            index: -1,
            color: "#c3c3c3"
          },
          show: (a) => !a.color.auto
        }
      }
    },
    legend: {
      type: "items",
      items: {
        show: {
          ref: "legend.show",
          type: "boolean",
          translation: "properties.legend.show",
          component: "switch",
          defaultValue: true,
          options: [{
            value: true,
            translation: "Common.Auto"
          }, {
            value: false,
            translation: "properties.off"
          }]
        },
        dock: {
          type: "string",
          component: "dropdown",
          ref: "legend.dock",
          translation: "properties.legend.position",
          options: [{
            value: "auto",
            translation: "Common.Auto"
          }, {
            value: "right",
            translation: "properties.dock.right"
          }, {
            value: "bottom",
            translation: "Common.Bottom"
          }, {
            value: "left",
            translation: "properties.dock.left"
          }, {
            value: "top",
            translation: "Common.Top"
          }],
          defaultValue: "auto",
          show: (a) => a.legend.show
        }
      }
    }
  }
};

var s = {
  type: "items",
  translation: "properties.presentation",
  grouped: true,
  items: {
    gridLines: {
      type: "items",
      snapshot: {
        tid: "property-gridLines"
      },
      items: {
        showGridLines: {
          ref: "gridlines.auto",
          type: "boolean",
          translation: "properties.gridLine.spacing",
          component: "switch",
          defaultValue: true,
          options: [{
            value: true,
            translation: "Common.Auto"
          }, {
            value: false,
            translation: "Common.Custom"
          }]
        },
        gridSpacing: {
          ref: "gridlines.spacing",
          type: "number",
          component: "dropdown",
          defaultValue: 2,
          options: [{
            value: 0,
            translation: "properties.gridLine.noLines"
          }, {
            value: 2,
            translation: "properties.gridLine.medium"
          }, {
            value: 3,
            translation: "properties.gridLine.narrow"
          }],
          show: function e(t) {
            return t.gridlines && !t.gridlines.auto
          }
        }
      }
    },
    showLabels: {
      ref: "dataPoint.showLabels",
      type: "boolean",
      translation: "properties.dataPoints.labelmode",
      component: "switch",
      defaultValue: true,
      options: [{
        value: true,
        translation: "Common.Auto"
      }, {
        value: false,
        translation: "properties.off"
      }],
      snapshot: {
        tid: "property-dataPoints"
      }
    },
    names: {
      type: "items",
      items: {
        showLabels: {
          ref: "labelsshow",
          type: "boolean",
          label: "Labels",
          component: "switch",
          defaultValue: true,
          options: [{
            value: true,
            translation: "Common.Auto"
          }, {
            value: false,
            translation: "Common.Custom"
          }]
        },
        startName: {
          ref: "startName",
          type: "string",
          label: "Start Value Label",
          expression: "optional",
          defaultValue: "Start Value",
          show: function e(t) {
            return !t.labelsshow
          }
        },
        endName: {
          ref: "endName",
          type: "string",
          label: "End Value Label",
          expression: "optional",
          defaultValue: "End Value",
          show: function e(t) {
            return !t.labelsshow
          }
        },
        posName: {
          ref: "posName",
          type: "string",
          label: "Positive Label",
          expression: "optional",
          defaultValue: "Positive Variance",
          show: function e(t) {
            return !t.labelsshow
          }
        },
        negName: {
          ref: "negName",
          type: "string",
          label: "Negative Label",
          expression: "optional",
          defaultValue: "Negative Variance",
          show: function e(t) {
            return !t.labelsshow
          }
        }
      }
    }
  }
};

var u = {
  uses: "axis.picasso.measureAxis",
  label: "Y-axis",
  items: {
    title: {
      ref: "measureAxis.title",
      type: "string",
      label: "Axis Title",
      defaultValue: "",
      expression: "optional"
    }
  }
};
var c = {
  uses: "axis.picasso.dimensionAxis"
};

var d = {
  type: "items",
  component: "expandable-items",
  translation: "properties.addons",
  items: {
    dataHandling: {
      uses: "dataHandling",
      items: {
        suppressZero: null,
        calcCond: {
          uses: "calcCond"
        }
      }
    }
  }
};

let about = {
  type: "items",
  label: "About",
  items: {
    about1: {
      type: "string",
      component: "text",
      label: "Steven Pressland 2019"
    },
    about1a: {
      type: "string",
      component: "text",
      label: "v1.0.1"
    },
    about2: {
      type: "string",
      component: "text",
      label: "GitHub: www.github.com/analyticsearth"
    },
    about3: {
      type: "string",
      component: "text",
      label: "A Waterfall chart for displaying variance between two metrics, walking through a set of dimension values."
    }
  }
};

export default {
  type: "items",
  component: "accordion",
  items: {
    data: {
      uses: "data",
      items: {
        dimensions: {
          min: 1,
          max: 1,
          disabledRef: "",
          description: (a, b) => {
            return "Bridge Dimension";
          }
        },
        measures: {
          min: 2,
          max: 2,
          disabledRef: "",
          description: (a, b) => {
            return ["Start Value", "End Value"][b];
          },
          items: {
            variance: {
              show: (a, b) => {
                if (b.properties.qHyperCubeDef.qMeasures[0] == a) {
                  return true;
                } else {
                  return false;
                }
              },
              type: "string",
              label: "Variance Formula",
              ref: "qAttributeExpressions.0.qExpression",
              expression: "always",
              defaultValue: (a, b) => {
                console.log(b);
                return "num(Column(2) - Column(1),'#,##0.00')"
              }
            }
          }
        }
      }
    },
    sorting: {
      uses: "sorting"
    },
    addons: d,
    settings: {
      uses: "settings",
      items: {
        presentation: s,
        colors: colorsAndLegend,
        measureAxis: u,
        dimensionAxis: c
      }
    },
    about
  }
}
