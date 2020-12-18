'use strict';
// Docs: http://stylelint.io
// Style lint rule detail: https://github.com/stylelint/stylelint/tree/master/src/rules/RULE-NAME

module.exports = {
    plugins: [
        'stylelint-scss',
        'stylelint-selector-bem-pattern',
        'stylelint-order',
    ],
    ignoreFiles: [],
    rules: {
        'selector-list-comma-newline-after': 'always',
        'declaration-colon-space-after': 'always',
        'declaration-colon-space-before': 'never',
        'block-opening-brace-space-before': 'always',
        'declaration-block-single-line-max-declarations': 1,
        'rule-empty-line-before': ['always', {
            ignore: ['after-comment'],
        }],

        // Comments
        'comment-empty-line-before': ['always', {
            ignore: ['stylelint-commands'],
        }],

        // Bem
        'plugin/selector-bem-pattern': {
            componentName: '[A-Z]+',
            componentSelectors: {
                initial: '^\\.{componentName}(?:-[a-z]+)?$',
                combined: '^\\.combined-{componentName}-[a-z]+$',
            },
            utilitySelectors: '^\\.util-[a-z]+$',
        },

        // Border
        'declaration-property-value-blacklist': {
            '/^border/': ['none'],
        },
        // forbid extend
        'at-rule-blacklist': ['extend'],

        // Nesting depth
        'max-nesting-depth': 3,

        /* ==========================================================================
           Best practices
           ========================================================================== */
        // Specificity
        // To learn more about this:
        // http://csswizardry.com/2014/07/hacks-for-dealing-with-specificity/
        // "id,class,type",
        // selector-max-specificity
        'declaration-no-important': true,
        'selector-max-compound-selectors': 4,
        'selector-no-qualifying-type': [ true, {
            ignore: ["attribute"]
        }],

        // Selectors
        'no-duplicate-selectors': true,

        // Blocks
        'block-no-empty': true,
        'at-rule-empty-line-before': [
            'always', {
                except: ['after-same-name', 'blockless-after-blockless', 'first-nested'],
                ignore: ['after-comment'],
                // Allow mixins to have an empty line before
                ignoreAtRules: ['include', 'import'],
            }],
        // More styling rules for more consistency
        'at-rule-name-case': 'lower',

        // Colors
        'color-hex-case': 'lower',
        'color-hex-length': 'long',
        'color-no-invalid-hex': true,

        // strings
        'string-quotes': 'single',

        // Values
        // Disallow vendor prefix, they are added by autoprefixer
        'value-no-vendor-prefix': true,
        'value-list-comma-space-after': 'always-single-line',

        // Disallows margin: 1px 1px 1px 1px;
        'shorthand-property-no-redundant-values': true,

        // Comments
        'comment-whitespace-inside': 'always',

        // Functions
        'function-comma-space-after': 'always-single-line',
        'function-comma-space-before': 'never',

        // Numbers
        // unitless zero and no trailing zeros
        'length-zero-no-unit': true,
        'number-no-trailing-zeros': true,

        // Syntax
        'declaration-block-trailing-semicolon': 'always',

        // Declaration blocks
        'declaration-block-no-duplicate-properties': true,

        // Prevents adding unnecesary Specificity or complicated sass stuff
        'scss/selector-no-redundant-nesting-selector': true,
    },
};
