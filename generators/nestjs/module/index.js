const path = require('path');

module.exports = function (plop) {
  plop.setGenerator('nestjs:module', {
    description: 'Create a new NestJS module',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the module name?',
        validate: (value) => {
          if (!value) return 'Module name is required';
          return true;
        }
      },
      {
        type: 'input',
        name: 'path',
        message: 'Where should the module be created? (e.g., src)',
        default: 'src'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '{{path}}/{{kebabCase name}}/{{kebabCase name}}.module.ts',
        templateFile: path.join(__dirname, 'templates/module.ts.hbs')
      }
    ]
  });
};
