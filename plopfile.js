module.exports = function (plop) {
  // Load Angular generators
  plop.load('./generators/angular/component');

  // Load React generators
  plop.load('./generators/react/component');
  plop.load('./generators/react/hook');

  // Load Vue generators
  plop.load('./generators/vue/component');
  plop.load('./generators/vue/composable');
  plop.load('./generators/vue/store');

  // Load NestJS generators
  plop.load('./generators/nestjs/module');
  plop.load('./generators/nestjs/controller');
  plop.load('./generators/nestjs/service');
  plop.load('./generators/nestjs/resource');
  plop.load('./generators/nestjs/entity');
  plop.load('./generators/nestjs/gateway');
  plop.load('./generators/nestjs/middleware');
  plop.load('./generators/nestjs/guard');
  plop.load('./generators/nestjs/interceptor');
  plop.load('./generators/nestjs/pipe');
  plop.load('./generators/nestjs/filter');
};
