const path = require('path');

module.exports = function (plop) {
  plop.setGenerator('react:component', {
    description: 'Create a new React component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the component name?',
        validate: (value) => {
          if (!value) {
            return 'Component name is required';
          }
          return true;
        }
      },
      {
        type: 'input',
        name: 'path',
        message: 'Where should the component be created? (e.g., src/components)',
        default: 'src/components'
      },
      {
        type: 'confirm',
        name: 'spec',
        message: 'Do you want to create a spec file?',
        default: true
      }
    ],
    actions: [
      {
        type: 'add',
        path: '{{path}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: path.join(__dirname, 'templates/component.tsx.hbs')
      },
      {
        type: 'add',
        path: '{{path}}/{{pascalCase name}}/index.ts',
        templateFile: path.join(__dirname, 'templates/index.hbs')
      },
      {
        type: 'add',
        path: '{{path}}/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
        templateFile: path.join(__dirname, 'templates/component.spec.tsx.hbs'),
        skip: (data) => !data.spec
      }
    ]
  });
};
