export default function($element, layout) {
  let navmode = this.$scope.qlik.navigation.getMode();
  this.$scope.updatedData(layout, navmode, false);
  return this.$scope.qlik.Promise.resolve();
}
