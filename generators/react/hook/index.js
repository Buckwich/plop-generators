const path = require('path');

module.exports = function (plop) {
  plop.setGenerator('react:hook', {
    description: 'Create a new React custom hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the hook name? (e.g., useFetch, useForm)',
        validate: (value) => {
          if (!value) {
            return 'Hook name is required';
          }
          if (!value.startsWith('use')) {
            return 'Hook name must start with "use"';
          }
          return true;
        }
      },
      {
        type: 'input',
        name: 'path',
        message: 'Where should the hook be created? (e.g., src/hooks)',
        default: 'src/hooks'
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
        path: '{{path}}/{{camelCase name}}.ts',
        templateFile: path.join(__dirname, 'templates/hook.ts.hbs')
      },
      {
        type: 'add',
        path: '{{path}}/{{camelCase name}}.spec.ts',
        templateFile: path.join(__dirname, 'templates/hook.spec.ts.hbs'),
        skip: (data) => !data.spec
      }
    ]
  });
};
