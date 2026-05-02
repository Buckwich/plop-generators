const path = require('path');

module.exports = function (plop) {
  plop.setGenerator('nestjs:middleware', {
    description: 'Create a new NestJS middleware',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the middleware name?',
        validate: (value) => {
          if (!value) return 'Middleware name is required';
          return true;
        }
      },
      {
        type: 'input',
        name: 'path',
        message: 'Where should the middleware be created? (e.g., src/middleware)',
        default: 'src/middleware'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '{{path}}/{{kebabCase name}}.middleware.ts',
        templateFile: path.join(__dirname, 'templates/middleware.ts.hbs')
      }
    ]
  });
};
