# Dan Koe 中文译文库

Dan Koe 的免费通讯 [letters.thedankoe.com](https://letters.thedankoe.com) 的中文翻译，共 74 篇。

站点：**https://wangbinyq.github.io/dankoe-cn/**

## 技术栈

- [Astro](https://astro.build) 静态站点生成，Bun 安装依赖和构建
- 数据源：`src/data/articles.json`（由项目根目录的 `make-data.py` 生成，包含标题、日期、摘要和正文 HTML）
- 全部样式内联，没有外部字体、图片或 JS 依赖，构建产物是纯 HTML
- GitHub Actions 构建并部署到 Pages

## 本地开发

```sh
bun install
bun run dev      # http://localhost:4321/dankoe-cn/
bun run build    # 输出到 dist/
```

## 结构

```
src/
  data/articles.json      74 篇文章（元数据 + 正文）
  layouts/Base.astro      全局样式与页面外壳
  pages/index.astro       目录页（搜索、按年份筛选）
  pages/a/[slug].astro    每篇文章一页
astro.config.mjs          format: 'file'，输出 /a/<slug>.html
.github/workflows/deploy.yml
```

改动 `articles.json` 之后提交并推送，CI 会自动重新构建和部署。

## 版权

原文版权归 Dan Koe 所有，这里是个人学习用的翻译。每篇文章页都有指向原文的链接。
