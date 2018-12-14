const path = require('path');

module.exports = {
  entry: "./src/js/fuwushang.js", // string | object | array  // 这里应用程序开始执行
  // webpack 开始打包

  output: {
    // webpack 如何输出结果的相关选项

    path: path.resolve(__dirname, "dist"), // string
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）

    filename: "fuwushang.js", // string    // 「入口分块(entry chunk)」的文件名模板（出口分块？）
},

  module: {
    rules: [
      {
          test:/\.less$/,
          use:[
              {
                  loader:"style-loader"
              },
              {
                  loader:"css-loader"
              },
              {
                  loader:"less-loader"
              }
          ]
      },
      {
        test: /\.html$/,
        use: [
          // 应用多个 loader 和选项
          "htmllint-loader",
          {
            loader: "html-loader",
            options: {
              /* ... */
            }
          }
        ]
      },

    ]
},
  plugins: [
    // ...
  ],
  // 附加插件列表


  /* 高级配置（点击展示） */}