module.exports =  {
    parser:  '@typescript-eslint/parser',  // ESLintをparseとして指定する
    extends:  [
        'plugin:@typescript-eslint/recommended',  // @typescript-eslint/eslint-plugin からの推奨ルールを使用します
        'prettier/@typescript-eslint',  // eslint-config-prettier を使用して @typescript-eslint/eslint-plugin ESLint のルールを無効化、prettierを使用すると競合してしまうため
        'plugin:prettier/recommended',  // eslint-plugin-prettier のスタイルエラーを ESLintのエラーとして表示する、絶対に最後に指定すること
        // 'airbnb', ここにairbnb を指定すれば airbnbのコーディング規約を使える、ただ今の設定だとごちゃごちゃになるのでまだ確認中
    ],
    parserOptions:  {
        ecmaVersion:  2018,  // 最新のECMAScriptでパースする
        sourceType:  'module',  // インポートできるようにする
        ecmaFeatures:  {
            jsx:  true,  // JSXのパースを有効化
        },
    },
    rules:  {
        // すでにあるESLintのルールをオーバーライドできる、いらないものを除去するなど
        "@typescript-eslint/explicit-member-accessibility": "off",
    },
    settings:  {
        react:  {
            version:  'detect',  //eslint-plugin-react が自動的にReactのバージョンを取得できるようにする
        },
    },
};