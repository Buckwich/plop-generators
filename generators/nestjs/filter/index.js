const path = require('path');

module.exports = function (plop) {
  plop.setGenerator('nestjs:filter', {
    description: 'Create a new NestJS exception filter',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the filter name?',
        validate: (value) => {
          if (!value) return 'Filter name is required';
          return true;
        }
      },
      {
        type: 'input',
        name: 'path',
        message: 'Where should the filter be created? (e.g., src/filters)',
        default: 'src/filters'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '{{path}}/{{kebabCase name}}.filter.ts',
        templateFile: path.join(__dirname, 'templates/filter.ts.hbs')
      }
    ]
  });
};
