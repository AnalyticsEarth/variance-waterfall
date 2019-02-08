export default function($element, layout) {
  const ext = this;
  const viz = ext.$scope.viz;
  let navmode = this.$scope.qlik.navigation.getMode();
  this.$scope.updatedData(layout, navmode, false);

  return this.$scope.qlik.Promise.resolve();
}
