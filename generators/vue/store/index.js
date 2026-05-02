const path = require('path');

module.exports = function (plop) {
  plop.setGenerator('vue:store', {
    description: 'Create a new Pinia store',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the store name? (e.g., user, product)',
        validate: (value) => {
          if (!value) {
            return 'Store name is required';
          }
          return true;
        }
      },
      {
        type: 'input',
        name: 'path',
        message: 'Where should the store be created? (e.g., src/stores)',
        default: 'src/stores'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '{{path}}/{{camelCase name}}.ts',
        templateFile: path.join(__dirname, 'templates/store.ts.hbs')
      }
    ]
  });
};
