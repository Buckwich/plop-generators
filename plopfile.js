module.exports = function (plop) {
  // Load Angular generators
  plop.load('./generators/angular/component');

  // Load Vue generators
  plop.load('./generators/vue/component');
  plop.load('./generators/vue/composable');
  plop.load('./generators/vue/store');
};
