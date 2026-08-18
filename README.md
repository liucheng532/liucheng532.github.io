# Cheng Liu — Personal Website

基于 Jekyll 的个人学术主页，部署地址为 <https://liucheng532.github.io>。页面沿用 AcadHomepage/Minimal Mistakes 系列模板的布局，并已迁移旧站中的个人资料、研究、项目、头像和简历。

## 以后只需要改这两个位置

1. 网站文字与条目：编辑 [`_data/content.yml`](./_data/content.yml)。
2. 图片、GIF、视频和 PDF：上传到 [`media/`](./media/)；头像替换 `images/avatar.png`，简历替换 `CV/Liu_Cheng_CV.pdf`。

在 `content.yml` 中填写素材相对路径，例如：

```yaml
media: "media/PROJECTS/my-project/demo.gif"
```

提交并推送到 `main` 后，GitHub Actions 会自动安装依赖、构建 Jekyll 并发布 GitHub Pages，不需要手动上传 `_site/`。

## Windows 首次配置

当前项目使用 Ruby 3.3 和 Jekyll 4.x。首次运行：

```powershell
.\scripts\setup.ps1
```

脚本会在缺少 Ruby 时通过 `winget` 安装 Ruby+DevKit，并安装 Bundler 与项目依赖。

## 本地预览

```powershell
.\scripts\serve.ps1
```

浏览器访问 <http://127.0.0.1:4000>。如果端口已占用：

```powershell
.\scripts\serve.ps1 -Port 4010
```

## 发布前构建检查

```powershell
.\scripts\build.ps1
```

生成结果位于 `_site/`，该目录不会提交到 GitHub。

## GitHub 自动部署

- 工作流：`.github/workflows/pages.yml`
- 触发条件：推送到 `main`，或在 Actions 页面手动运行
- Pull Request：只构建检查，不执行正式部署
- 正式部署：仅 `main` 分支可发布到 `github-pages` 环境
- 依赖更新：Dependabot 每月检查 Bundler 与 GitHub Actions

## 内容更新约定

- 路径统一使用 `/`，不要使用 Windows 的 `\`。
- 新素材建议使用英文小写文件名和连字符，例如 `fall-recovery-demo.mp4`。
- 单个文件应小于 100 MB；网页视频建议小于 20 MB，避免首屏加载过慢。
- 不要把密钥、访问令牌或未公开资料放进仓库。
- 如需新增 Google Scholar、LinkedIn 或 ORCID，在 `_data/content.yml` 的 `profile` 中加入对应字段即可，侧边栏会自动显示。

## 主要目录

```text
_data/content.yml       所有日常内容
_pages/about.md         页面渲染模板，通常无需修改
media/                  研究和项目素材
images/                 头像与网站图标
CV/                     公开简历
assets/                 样式、脚本和字体
scripts/                Windows 初始化、构建和预览脚本
.github/workflows/      GitHub Pages 自动部署
```

## License and attribution

本站模板基于 AcadHomepage、Minimal Mistakes 及其相关开源组件改造。原始许可与归属说明见 [`LICENSE`](./LICENSE)。
