# [知乎全部显示][project-url]：修复知乎网页版需要登录才能查看完整文章的BUG
 [![GitHub issues][issues-image]][issues-url]
 [![Github Pulls][pulls-image]][pulls-url]
 [![GitHub stars][stars-image]][stars-url]
 [![GitHub forks][forks-image]][forks-url]
 [![license][license-image]][license-url] 
 [![repo-size][repo-size-image]][repo-size-url]
 [![hits][hits-image]][hits-url]

## 👋 介绍
本项目修复了知乎网页版未登录文章不完整的BUG，修复后，~~您可以在知乎网页版中查看完整文章~~，您可以在新页面上查看完整文章。
对知乎的吐槽以及本插件实现原理请点击[这里](docs/原理以及吐槽.md)。

本插件使用 **TypeScript** 编写。如果有什么建议或提交BUG请提交 [议题(`issue`)][issues-url]或参与 [讨论(`discussion`)][discussions-url]。



## ⬇️ 安装
### Chrome，Edge 或基于 Chromium 内核的浏览器。
> 由于作者**无法注册**Google开发者账户，故**不提供**在线安装方式
1. 前往[发行版 (`Release`)](https://github.com/TC999/zhihu-full-show/releases/latest)页面下载`extension.zip`文件
2. 打开开发者模式（如果需要）
3. 在 Edge 浏览器中打开 `edge://extensions` 或者在 Chrome 浏览器中打开 `chrome://extensions` 界面，只需将下载的 `extension.zip` 文件拖放到浏览器中即可完成安装。

### Firefox 或基于 Gecko 内核的浏览器
敬请期待

## 使用方法
1. 打开需要登录展开全文的知乎专栏，如果弹出登录框记得关闭！
2. 直接点击"展开阅读全文"，稍后在新页面直接查看完整内容！
> [!TIP]
> 可以使用[GreasyFork脚本][zhihu-enhance-url]自动关闭登录框。

## ✔ 待办(TODO)

- [ ] 自动替换元素(仓库内有代码，暂时无法实现)
- [ ] 多语言适配(好像没啥必要)

## 为本项目做贡献
> [!IMPORTANT]
> 请在Git上提前设置GPG密钥，如果不知道如何操作请查看[Github官方文档][github-doc-gpg-url]
1. 复刻`(Fork)`此仓库
2. 创建一个分支`(Branch)`并以功能命名
3. 将代码拉到本地修改并提交`(Commit)`
4. 创建一个拉取请求`(Pull Request)`

## 📝 许可证
本仓库采用[GPL-3.0许可证][LICENSE]。

## ❤️ 鸣谢
- ChatGPT4 - 代码编写者

<!-- 链接开始 -->
[issues-url]: https://github.com/TC999/zhihu-full-show/issues "议题"
[issues-image]: https://img.shields.io/github/issues/TC999/zhihu-full-show?style=flat&logo=github&%3Fcolor%3Dgreen&label=%E8%AE%AE%E9%A2%98

[pulls-url]: https://github.com/TC999/zhihu-full-show/pulls "拉取请求"
[pulls-image]: https://img.shields.io/github/issues-pr/TC999/Structura-Chinese?style=flat&logo=github&%3Fcolor%3Dgreen&label=%E6%8B%89%E5%8F%96%E8%AF%B7%E6%B1%82

[stars-url]: https://github.com/TC999/zhihu-full-show/stargazers "星标"
[stars-image]: https://img.shields.io/github/stars/TC999/zhihu-full-show?style=flat&logo=github&%3Fcolor%3Dblue&label=%E6%98%9F%E6%A0%87%E6%95%B0

[forks-url]: https://github.com/TC999/zhihu-full-show/fork "复刻"
[forks-image]: https://img.shields.io/github/forks/TC999/zhihu-full-show?style=flat&logo=github&%3Fcolor%3Dblue&label=%E5%A4%8D%E5%88%BB

[discussions-url]: https://github.com/TC999/zhihu-full-show/discussions "讨论"

[hits-url]: https://hits.dwyl.com/ "访问量"
[hits-image]: https://img.shields.io/endpoint?url=https%3A%2F%2Fhits.dwyl.com%2FTC999%2Fzhihu-full-show.json%3Fcolor%3Dgreen&label=%E8%AE%BF%E9%97%AE%E9%87%8F 

[project-url]: https://github.com/TC999/zhihu-full-show "项目地址"

[repo-size-url]: https://img.shields.io/github/repo-size/TC999/zhihu-full-show?style=flat&label=%E4%BB%93%E5%BA%93%E5%A4%A7%E5%B0%8F&labelColor=3F "仓库大小"
[repo-size-image]: https://img.shields.io/github/repo-size/TC999/zhihu-full-show?style=flat&label=%E4%BB%93%E5%BA%93%E5%A4%A7%E5%B0%8F&labelColor=3F

[LemurBrowser-url]: https://lemurbrowser.com "狐猴浏览器"

[license-url]: https://github.com/TC999/zhihu-full-show/blob/master/LICENSE "许可证"
[license-image]: https://img.shields.io/github/license/TC999/zhihu-full-show?style=flat&label=%E8%AE%B8%E5%8F%AF%E8%AF%81

[Ungoogled-Chromuim-url]: https://ungoogled-software.github.io/ungoogled-chromium-binaries/ "Ungoogled-Chromuim 官网"

[zhihu-enhance-url]: https://greasyfork.org/zh-CN/scripts/419081-%E7%9F%A5%E4%B9%8E%E5%A2%9E%E5%BC%BA "知乎增强"

[github-doc-gpg-url]: https://docs.github.com/zh/authentication/managing-commit-signature-verification/generating-a-new-gpg-key "GPG签名"
<!-- 链接结束 -->