# Variance Waterfall Chart for Qlik Sense

The Variance Waterfall chart is a Qlik Sense extension to provide variance analysis between two measures shown over the different values of a dimension. This type of chart is primarily used in financial Actual v's Forecast analysis.

## Download

[**Download Here**](https://github.com/AnalyticsEarth/variance-waterfall/releases/download/v1.1.3/variance-waterfall.zip)

Download the extension from the Releases page of github, you cannot install the contents of this GitHub repository.

## How to Use

The extension requires 1 dimension and 2 measures; One measure for the starting bar (typically the actual), another for the ending bar (typically the forecast). The Dimension provides the breakdown between the two measures, indicated as either a positive or negative amount. The extension only works when measure are SUM aggregations due to the way variance is calculated.

### Changing Number Formatting

Number Format must be set in 2 places, on the measure and in the `Variance Formula` expression on the first measure. This impacts the display on the variance bridge bars. Use the same Qlik formatting from the measure.

### Example
![Example screenshot of variance waterfall chart in Qlik Sense](docs/variance-waterfall-example.png?raw=true)

## Support

The extension supports the following Qlik Sense functionality:
- Responsive Design
- Themes
- Printing
- Export
- Snapshots
- Dimension Selection
- Right-to-Left and Left-to-Right

The extension is rendered using the Picasso.js chart framework, for more information visit [Picasso.js](https://picassojs.com/)
