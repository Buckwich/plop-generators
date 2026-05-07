module.exports = async function (plop) {
  // Load Angular generators
  await plop.load('./generators/angular/component/index.js');

  // Load React generators
  await plop.load('./generators/react/component');
  await plop.load('./generators/react/hook');

  // Load Vue generators
  await plop.load('./generators/vue/component');
  await plop.load('./generators/vue/composable');
  await plop.load('./generators/vue/store');

  // Load NestJS generators
  await plop.load('./generators/nestjs/module');
  await plop.load('./generators/nestjs/controller');
  await plop.load('./generators/nestjs/service');
  await plop.load('./generators/nestjs/resource');
  await plop.load('./generators/nestjs/entity');
  await plop.load('./generators/nestjs/gateway');
  await plop.load('./generators/nestjs/middleware');
  await plop.load('./generators/nestjs/guard');
  await plop.load('./generators/nestjs/interceptor');
  await plop.load('./generators/nestjs/pipe');
  await plop.load('./generators/nestjs/filter');
};
