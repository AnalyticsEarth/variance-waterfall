import ThemeManager from './theme'

export default function($element, layout) {
  console.log(layout);
  console.log(this.$scope.$parent.options.direction);
  let app = this.$scope.qlik.currApp(this);
  app.theme.getApplied().then(qTheme => {
    this.$scope.theme = qTheme;
    ThemeManager.setAppTheme(this.$scope.theme);

    let navmode = this.$scope.qlik.navigation.getMode();
    this.$scope.updatedData(layout, navmode, true);

    return this.$scope.qlik.Promise.resolve();
  });

}
