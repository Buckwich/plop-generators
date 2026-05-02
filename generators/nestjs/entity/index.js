const path = require('path');

module.exports = function (plop) {
  plop.setGenerator('nestjs:entity', {
    description: 'Create a new NestJS entity (TypeORM)',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the entity name?',
        validate: (value) => {
          if (!value) return 'Entity name is required';
          return true;
        }
      },
      {
        type: 'input',
        name: 'path',
        message: 'Where should the entity be created? (e.g., src/entities)',
        default: 'src/entities'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '{{path}}/{{kebabCase name}}.entity.ts',
        templateFile: path.join(__dirname, 'templates/entity.ts.hbs')
      }
    ]
  });
};
