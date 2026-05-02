const path = require('path');

module.exports = function (plop) {
  plop.setGenerator('nestjs:resource', {
    description: 'Create a new NestJS resource (module, controller, service)',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the resource name?',
        validate: (value) => {
          if (!value) return 'Resource name is required';
          return true;
        }
      },
      {
        type: 'input',
        name: 'path',
        message: 'Where should the resource be created? (e.g., src)',
        default: 'src'
      },
      {
        type: 'input',
        name: 'route',
        message: 'What is the route prefix?',
        default: (data) => data.name.toLowerCase()
      }
    ],
    actions: [
      {
        type: 'add',
        path: '{{path}}/{{kebabCase name}}/{{kebabCase name}}.module.ts',
        templateFile: path.join(__dirname, 'templates/module.ts.hbs')
      },
      {
        type: 'add',
        path: '{{path}}/{{kebabCase name}}/{{kebabCase name}}.controller.ts',
        templateFile: path.join(__dirname, 'templates/controller.ts.hbs')
      },
      {
        type: 'add',
        path: '{{path}}/{{kebabCase name}}/{{kebabCase name}}.service.ts',
        templateFile: path.join(__dirname, 'templates/service.ts.hbs')
      }
    ]
  });
};
