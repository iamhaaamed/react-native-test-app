module.exports = function () {
  return { plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: [
          '.ios.ts',
          '.ios.tsx',
          '.android.ts',
          '.android.tsx',
          '.ts',
          '.tsx',
          '.js',
          '.jsx',
          '.json',
        ],
        alias: {
          '@': './src',
        },
      },
    ],
    'nativewind/babel',
  ],
  presets: ['module:@react-native/babel-preset'],
}
}