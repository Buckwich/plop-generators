const path = require('path');

module.exports = function (plop) {
  plop.setGenerator('vue:component', {
    description: 'Create a new Vue component',
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
        path: '{{path}}/{{pascalCase name}}.vue',
        templateFile: path.join(__dirname, 'templates/component.vue.hbs')
      },
      {
        type: 'add',
        path: '{{path}}/{{pascalCase name}}.spec.ts',
        templateFile: path.join(__dirname, 'templates/component.spec.ts.hbs'),
        skip: (data) => !data.spec
      }
    ]
  });
};
