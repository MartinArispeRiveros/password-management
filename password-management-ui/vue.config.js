module.exports = {
  lintOnSave: false,

  transpileDependencies: [
    'vuetify',
  ],
  devServer: {
    // port: 8383,
    https: false,
    proxy: {
      '/*': {
        target: 'http://localhost:3000',
        ws: false,
        changeOrigin: true,
      },
    },
  },
};
