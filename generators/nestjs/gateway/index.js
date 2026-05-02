const path = require('path');

module.exports = function (plop) {
  plop.setGenerator('nestjs:gateway', {
    description: 'Create a new NestJS WebSocket gateway',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the gateway name?',
        validate: (value) => {
          if (!value) return 'Gateway name is required';
          return true;
        }
      },
      {
        type: 'input',
        name: 'path',
        message: 'Where should the gateway be created? (e.g., src/gateways)',
        default: 'src/gateways'
      },
      {
        type: 'input',
        name: 'namespace',
        message: 'What is the WebSocket namespace?',
        default: (data) => `/${data.name.toLowerCase()}`
      }
    ],
    actions: [
      {
        type: 'add',
        path: '{{path}}/{{kebabCase name}}.gateway.ts',
        templateFile: path.join(__dirname, 'templates/gateway.ts.hbs')
      }
    ]
  });
};
