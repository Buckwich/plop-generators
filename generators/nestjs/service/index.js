const path = require('path');

module.exports = function (plop) {
  plop.setGenerator('nestjs:service', {
    description: 'Create a new NestJS service',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the service name?',
        validate: (value) => {
          if (!value) return 'Service name is required';
          return true;
        }
      },
      {
        type: 'input',
        name: 'path',
        message: 'Where should the service be created? (e.g., src/users)',
        default: 'src'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '{{path}}/{{kebabCase name}}.service.ts',
        templateFile: path.join(__dirname, 'templates/service.ts.hbs')
      }
    ]
  });
};
