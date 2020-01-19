// vue.config.js

module.exports = {
  // 选项...
  chainWebpack: config => {
    // 修复HMR
    //config.resolve.symlinks(true);
    // const scss = config.module.rule('scss').toConfig();
    // const useable = { ...scss.oneOf[3], test: /\.useable.scss$/ };
    // useable.use = [...useable.use];
    // useable.use[0] = { loader: 'style-loader/useable' };
    // config.module.rule('scss').merge({ oneOf: [useable] });
  }
}