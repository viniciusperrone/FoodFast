module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          root: ".",
          extensions: [
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
            ".android.js",
            ".android.tsx",
            ".ios.js",
            ".ios.tsx",
          ],
          alias: {
            "assets": "./src/assets",
            "global": "./src/global",
            "@utils": "./src/utils",
            "@components": "./src/components",
            "@hooks": "./src/hooks",
            "@routes": "./src/routes",
            "@screens": "./src/screens",
            "@server": "./src/server",
          },
        },
      ],
    ],
  };
};
