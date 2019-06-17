export default function($element, layout) {
  let isEditMode = this.$scope.options.interactionState === 2;
  this.$scope.updatedData(layout, isEditMode, false);
  return this.$scope.qlik.Promise.resolve();
}
