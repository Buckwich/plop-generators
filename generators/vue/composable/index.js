const path = require('path');

module.exports = function (plop) {
  plop.setGenerator('vue:composable', {
    description: 'Create a new Vue composable',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the composable name? (e.g., useFetch, useForm)',
        validate: (value) => {
          if (!value) {
            return 'Composable name is required';
          }
          return true;
        }
      },
      {
        type: 'input',
        name: 'path',
        message: 'Where should the composable be created? (e.g., src/composables)',
        default: 'src/composables'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '{{path}}/{{camelCase name}}.ts',
        templateFile: path.join(__dirname, 'templates/composable.ts.hbs')
      }
    ]
  });
};
