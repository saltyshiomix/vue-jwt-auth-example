module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/global.scss";',
      }
    }
  },
  devServer: {
    port: 3000,
  },
};
