export default function($element, layout) {
  console.log("Paint;");
  let navmode = this.$scope.qlik.navigation.getMode();
  this.$scope.updatedData(layout, navmode, true);
}
