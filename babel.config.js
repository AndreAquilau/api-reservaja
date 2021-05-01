module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
      '@babel/preset-typescript',
    ],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@config': './src/config',
            '@controllers': './src/controllers',
            '@database': './src/database',
            '@midlleware': './src/middleware',
            '@model': './src/model',
            '@repository': './src/repository',
            '@routes': './src/routes',
            '@services': './src/services',
          },
        },
      ],
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
    ],
    ignore: ['**/*.spec.ts'],
  };
  