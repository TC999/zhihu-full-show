# [知乎全部显示][repo-url]：修复知乎网页版需要登录才能查看完整专栏的BUG
 [![GitHub issues][issues-image]][issues-url]
 [![Github Pulls][pulls-image]][pulls-url]
 [![GitHub stars][stars-image]][stars-url]
 [![GitHub forks][forks-image]][forks-url]
 [![Github Downloads][download-image]][download-url]
 [![license][license-image]][license-url]
 ![repo-size][repo-size-image]
 [![hits][hits-image]][hits-url]

## 👋 介绍
本项目修复了知乎网页版未登录专栏不完整的BUG，修复后，您可以~~在知乎网页版中查看完整文章~~在新页面上查看完整文章。

本插件使用 **TypeScript** 编写。如果有什么建议或提交BUG请提交[议题(`issue`)][issues-url]或参与[讨论(`discussion`)][discussions-url]。

> [!TIP]
> 本插件自带日志系统，如有BUG请按F12进入控制台查看日志


## ⬇️ 安装
### Chrome 或基于 Chromium 内核的浏览器
> [!CAUTION]
> 由于作者无法注册Google开发者账户，故不提供在线安装方式
1. 前往[发行版 (`Release`)][download-url]页面下载`extension.zip`文件
2. 全部解压到一个空文件夹下
3. 打开开发者模式
4. 在 Edge 浏览器中打开 `edge://extensions` 或者在 Chrome 浏览器中打开 `chrome://extensions` 界面，点击“加载已解压的扩展程序”，选择刚解压的位置即可完成安装。
>[!NOTE]
> 如果您使用[Ungoogled-Chromium][Ungoogled-Chromuim-url]或[狐猴浏览器][LemurBrowser-url]，单击`extension.crx`即可直接安装。

### Firefox 或基于 Gecko 内核的浏览器
敬请期待

## 开发指南
详见[开发指南](CONTRIBUTING.md)。
## 使用方法
1. 打开需要登录展开全文的知乎专栏，如果弹出登录框记得关闭！

<video src="docs/演示.mp4" controls="controls"></video>

2. 直接点击"展开阅读全文"，稍后在新页面直接查看完整内容！
> [!TIP]
> 可以使用[篡改猴脚本][zhihu-enhance-url]自动关闭登录框。

## ✔ 待办(TODO)

- [ ] 自动替换元素(仓库内有相应代码，但暂时无法实现，急需大佬PR)
- [ ] 多语言适配(好像没啥必要)

## ✨ 贡献
> [!IMPORTANT]
> 请提前设置GPG密钥，具体操作请查看[Github官方文档][github-doc-gpg-url]
1. 复刻`(Fork)`此仓库
2. 创建一个分支`(Branch)`并以你修改的功能命名
3. 将代码拉到本地修改并提交`(Commit)`
4. 创建一个拉取请求`(Pull Request)`

## 更新日志
[点此查看](CHANGELOG.md)

## 📝 许可证
本仓库采用[GPL-3.0许可证](LICENSE)。

## ❤️ 鸣谢
- ChatGPT-4o - 代码编写
- [TC999](https://github.com/TC999) - 代码调试，仓库所有者，作者

<!-- 链接开始 -->
[issues-url]: https://github.com/TC999/zhihu-full-show/issues "议题"
[issues-image]: https://custom-icon-badges.demolab.com/github/issues-raw/TC999/zhihu-full-show?logo=issue-opened&label=%E8%AE%AE%E9%A2%98

[pulls-url]: https://github.com/TC999/zhihu-full-show/pulls "拉取请求"
[pulls-image]: https://custom-icon-badges.demolab.com/github/issues-pr-raw/TC999/zhihu-full-show?style=flat&logo=git-pull-request&%3Fcolor%3Dgreen&label=%E6%8B%89%E5%8F%96%E8%AF%B7%E6%B1%82

[stars-url]: https://github.com/TC999/zhihu-full-show/stargazers "星标"
[stars-image]: https://custom-icon-badges.demolab.com/github/stars/TC999/zhihu-full-show?style=flat&logo=star&%3Fcolor%3Dblue&label=%E6%98%9F%E6%A0%87

[forks-url]: https://github.com/TC999/zhihu-full-show/fork "复刻"
[forks-image]: https://custom-icon-badges.demolab.com/github/forks/TC999/zhihu-full-show?style=flat&logo=repo-forked&%3Fcolor%3Dblue&label=%E5%A4%8D%E5%88%BB

[discussions-url]: https://github.com/TC999/zhihu-full-show/discussions "讨论"

[hits-url]: https://hits.dwyl.com/ "访问量"
[hits-image]: https://custom-icon-badges.demolab.com/endpoint?url=https%3A%2F%2Fhits.dwyl.com%2FTC999%2Fzhihu-full-show.json%3Fcolor%3Dgreen&label=%E8%AE%BF%E9%97%AE%E9%87%8F&logo=graph 

[repo-url]: https://github.com/TC999/zhihu-full-show "仓库地址"

[repo-size-image]:https://custom-icon-badges.demolab.com/github/repo-size/TC999/zhihu-full-show?style=flat&logo=file-code&label=%E4%BB%93%E5%BA%93%E5%A4%A7%E5%B0%8F&labelColor=3F

[download-url]: https://github.com/TC999/zhihu-full-show/releases/latest "下载"
[download-image]: https://custom-icon-badges.demolab.com/github/downloads/TC999/zhihu-full-show/total?style=flat&logo=download&label=%E4%B8%8B%E8%BD%BD%E6%95%B0&%3Fcolor%3Dblue "总下载数"

[LemurBrowser-url]: https://lemurbrowser.com "狐猴浏览器"

[license-url]: https://github.com/TC999/zhihu-full-show/blob/master/LICENSE "许可证"
[license-image]: https://custom-icon-badges.demolab.com/github/license/TC999/zhihu-full-show?style=flat&logo=law&label=%E8%AE%B8%E5%8F%AF%E8%AF%81

[Ungoogled-Chromuim-url]: https://ungoogled-software.github.io/ungoogled-chromium-binaries/ "Ungoogled-Chromuim 官网"

[zhihu-enhance-url]: https://greasyfork.org/zh-CN/scripts/419081-%E7%9F%A5%E4%B9%8E%E5%A2%9E%E5%BC%BA "知乎增强"

[github-doc-gpg-url]: https://docs.github.com/zh/authentication/managing-commit-signature-verification/generating-a-new-gpg-key "GPG签名"
<!-- 链接结束 -->