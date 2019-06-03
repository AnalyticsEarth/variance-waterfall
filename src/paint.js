import ThemeManager from './theme';

export default function($element, layout) {
  let app = this.$scope.qlik.currApp(this);
  let navmode = this.$scope.qlik.navigation.getMode();
  this.$scope.updatedData(layout, navmode, true);
  app.theme.getApplied().then(qTheme => {
    this.$scope.theme = qTheme;
    ThemeManager.setAppTheme(this.$scope.theme);

    this.$scope.updatedData(layout, navmode, true);
    return this.$scope.qlik.Promise.resolve();
  });
}
