// vue.config.js
module.exports = {
  // publicPath: process.env.NODE_ENV === "production" ? "http://localhost:8081/" : "/",
  publicPath: "/vue-app2/",
  filenameHashing: false,
  chainWebpack: config => {
    // config.externals(["vue", "vue-router"]);
  }
};
