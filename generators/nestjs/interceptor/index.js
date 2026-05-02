const path = require('path');

module.exports = function (plop) {
  plop.setGenerator('nestjs:interceptor', {
    description: 'Create a new NestJS interceptor',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the interceptor name?',
        validate: (value) => {
          if (!value) return 'Interceptor name is required';
          return true;
        }
      },
      {
        type: 'input',
        name: 'path',
        message: 'Where should the interceptor be created? (e.g., src/interceptors)',
        default: 'src/interceptors'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '{{path}}/{{kebabCase name}}.interceptor.ts',
        templateFile: path.join(__dirname, 'templates/interceptor.ts.hbs')
      }
    ]
  });
};
