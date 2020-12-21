// rule reference: http://eslint.org/docs/rules
// individual rule reference: http://eslint.org/docs/rules/NAME-OF-RULE
module.exports = {
    root: true,
    extends: "airbnb",
    env: {
      es6: true,
      node: true,
      browser: true,
    },
    globals: {
        Drupal: true,
        drupalSettings: true,
        jQuery: true,
        _: true,
        domready: true,
    },
    rules: {
        'consistent-return': [0],
        'no-underscore-dangle': [0],
        'max-nested-callbacks': [1, 3],
        'prefer-spread': [0],
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'no-param-reassign': [1, { props: false }],
        'no-prototype-builtins': [0],
        'valid-jsdoc': [1, {
            'prefer': {
                'returns': 'return',
                'property': 'prop'
            },
            'requireReturn': false
        }],
        'brace-style': ['error', 'stroustrup'],
        'no-unused-vars': [1],
        'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
        'strict': [0],
        'react/require-extension': 'off',
        'max-len': [0],
    },
};
