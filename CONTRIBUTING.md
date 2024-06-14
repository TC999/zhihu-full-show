# 开发指南
本插件使用 **TypeScript** 编写。请确保你已经安装[Nodejs](https://nodejs.org)和[pnpm](https://pnpm.io/zh)，同时建议使用[Visual Studio Code](https://code.visualstudio.com)作为开发工具。

1. 克隆仓库到本地或直接下载ZIP：
```shell
git clone https://github.com/TC999/zhihu-full-show.git
```
2. 安装依赖：
```shell
pnpm install
```
3. 构建
```shell
pnpm run build
```
4. 将`src`目录中的`manifest.json`和`icon.png`复制到`dist`目录下
5. 将`dist`全部加载到浏览器中调试
6. 如果有问题，请按F12进入控制台查看`content.js`和`newPageContent.js`的日志

# 🤝 贡献
## 关于分支
### 常驻分支

- **main**：用此分支进行错误修复、新功能的开发、性能改进

## 提交(Commit)规范

你也可以参照 [Angular commit message guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)

- `feat`：新功能
- `fix`：修复 Bug
- `docs`：文档更新
- `refactor`：重构代码
- `test`：添加或更新测试
- `chore`：构建过程或工具链的变更
- `perf`：性能改进
- `ci`：持续集成/交付的变更
也欢迎增加 scope 和 footer
例如:
`fix(dock): xxx`
`变更描述`
`相关 PR: url`