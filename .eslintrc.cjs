module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    env: {
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:ft-flow/recommended',
        'prettier'
    ],
    plugins: [
        'vue',
        'ft-flow'
    ]
}