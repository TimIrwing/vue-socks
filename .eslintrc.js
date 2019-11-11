module.exports = {
  extends: [
    'airbnb-base',
    'plugin:vue/base',
  ],
  rules: {
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],
    "vue/html-closing-bracket-spacing": ["error", {
      "startTag":"never",
      "endTag": "never",
      "selfClosingTag": "never",
    }],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "never",
        "normal": "never",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }]
  },
};
