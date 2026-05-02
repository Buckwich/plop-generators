const path = require('path');

module.exports = function (plop) {
  plop.setGenerator('nestjs:guard', {
    description: 'Create a new NestJS guard',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the guard name?',
        validate: (value) => {
          if (!value) return 'Guard name is required';
          return true;
        }
      },
      {
        type: 'input',
        name: 'path',
        message: 'Where should the guard be created? (e.g., src/guards)',
        default: 'src/guards'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '{{path}}/{{kebabCase name}}.guard.ts',
        templateFile: path.join(__dirname, 'templates/guard.ts.hbs')
      }
    ]
  });
};
