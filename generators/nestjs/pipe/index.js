const path = require('path');

module.exports = function (plop) {
  plop.setGenerator('nestjs:pipe', {
    description: 'Create a new NestJS pipe',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the pipe name?',
        validate: (value) => {
          if (!value) return 'Pipe name is required';
          return true;
        }
      },
      {
        type: 'input',
        name: 'path',
        message: 'Where should the pipe be created? (e.g., src/pipes)',
        default: 'src/pipes'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '{{path}}/{{kebabCase name}}.pipe.ts',
        templateFile: path.join(__dirname, 'templates/pipe.ts.hbs')
      }
    ]
  });
};
