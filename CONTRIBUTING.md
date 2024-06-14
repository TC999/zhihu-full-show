# 开发指南
本插件使用 **TypeScript** 编写。请确保您的电脑已经安装[Nodejs](https://nodejs.org/)和[pnpm](https://pnpm.io/zh)，同时建议使用[Visual Studio Code](https://code.visualstudio.com/)作为开发工具。

1. 克隆本仓库到本地：
```shell
git clone https://github.com/TC999/zhihu-full-show.git
```
2. 安装依赖：
```
pnpm install
```
3. 构建
```
pnpm run build
```
4. 将`dist`全部加载到浏览器中调试
5. 如果有问题，请按F12进入控制台查看`content.js`和`newPageContent.js`的日志