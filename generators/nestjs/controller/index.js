const path = require('path');

module.exports = function (plop) {
  plop.setGenerator('nestjs:controller', {
    description: 'Create a new NestJS controller',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the controller name?',
        validate: (value) => {
          if (!value) return 'Controller name is required';
          return true;
        }
      },
      {
        type: 'input',
        name: 'path',
        message: 'Where should the controller be created? (e.g., src/users)',
        default: 'src'
      },
      {
        type: 'input',
        name: 'route',
        message: 'What is the route prefix? (e.g., users)',
        default: (data) => data.name.toLowerCase()
      }
    ],
    actions: [
      {
        type: 'add',
        path: '{{path}}/{{kebabCase name}}.controller.ts',
        templateFile: path.join(__dirname, 'templates/controller.ts.hbs')
      }
    ]
  });
};
