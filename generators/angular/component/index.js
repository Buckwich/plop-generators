const path = require('path');

module.exports = function (plop) {
  plop.setGenerator('angular:component', {
    description: 'Create a new Angular component',
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
        message: 'Where should the component be created? (e.g., src/app/components)',
        default: 'src/app/components'
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
        path: '{{path}}/{{kebabCase name}}/{{kebabCase name}}.component.ts',
        templateFile: path.join(__dirname, 'templates/component.ts.hbs')
      },
      {
        type: 'add',
        path: '{{path}}/{{kebabCase name}}/{{kebabCase name}}.component.html',
        templateFile: path.join(__dirname, 'templates/component.html.hbs')
      },
      {
        type: 'add',
        path: '{{path}}/{{kebabCase name}}/{{kebabCase name}}.component.scss',
        templateFile: path.join(__dirname, 'templates/component.scss.hbs')
      },
      {
        type: 'add',
        path: '{{path}}/{{kebabCase name}}/{{kebabCase name}}.component.spec.ts',
        templateFile: path.join(__dirname, 'templates/component.spec.ts.hbs'),
        skip: (data) => !data.spec
      }
    ]
  });
};
