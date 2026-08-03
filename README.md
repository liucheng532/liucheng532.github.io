# Liu Cheng — Personal Website

一个以静态文件为核心的个人网站，适合直接部署到 GitHub Pages。页面视觉参考了 `boyuan.space` 的信息架构：个人介绍、研究方向、精选论文、项目、经历与联系方式；内容已根据刘铖现有简历和公开 GitHub 资料整理。

## 本地预览

不要直接双击 `index.html`，建议在此文件夹启动一个静态服务器：

```powershell
py -m http.server 8000
```

然后打开 <http://localhost:8000>。

## 日常更新

- 个人信息、经历、项目、论文和奖项：编辑 `data.js`
- 页面结构：编辑 `index.html`
- 视觉样式和移动端布局：编辑 `styles.css`
- 交互和导航：编辑 `script.js`
- 简历文件：替换 `Liucheng_resume.pdf`
- 头像：替换 `pic/正面照.png`
- 项目视觉素材：替换 `media/` 中对应图片或动图，并在 `data.js` 更新 `image` / `imageAlt`

## GitHub Pages

1. 在 GitHub 新建一个公开仓库，例如 `liucheng532.github.io` 或 `personal-website`。
2. 首次连接远程仓库：

   ```powershell
   git remote add origin https://github.com/liucheng532/仓库名.git
   git push -u origin main
   ```

3. 在仓库的 **Settings → Pages** 中选择 `Deploy from a branch`，分支选择 `main` / `/ (root)`。

仓库名和 GitHub Pages 地址确定后，再把 README 里的示例替换成真实地址。

## 公开前检查

- 确认是否要公开简历中的邮箱、头像和项目资料。
- 检查 PDF 和 PPTX 文件是否包含不希望公开的联系方式、内部链接或未发布内容。
- 确认每一个项目链接、论文状态和获奖信息都已更新到最新版本。
