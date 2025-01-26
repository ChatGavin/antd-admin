### v0.1.0

**主要更新**

- 项目管理
  - 采用 yarn workspaces 管理项目依赖，简化了 monorepo 的管理流程
  - 在 package.json 中配置了 scripts 命令，支持通过 yarn 运行和打包 admin 项目
- 部署改进
  - 新增 GitHub Actions 工作流，实现自动化部署到 GitHub Pages
  - 解决了 pnpm 在 GitHub Pages 部署中的兼容性问题，改用 yarn 进行依赖管理
  - 配置了自定义域名，提升了项目的可访问性
- 版本管理
  - 简化了分支管理策略，采用 master 和 dev 两个主要分支
  - 使用 tag 进行版本管理，确保版本发布的简洁和清晰

**注意事项**

- 部署到 GitHub Pages 时, 需要指定 lockfile, 使用 yarn 管理依赖
- 部署时请注意打包后的静态资源的 base 路径设置, 以确保在 GitHub Pages 上资源被正确加载
- 部署到 GitHub Pages 时, 需要使用仓库名作为基础路径 /mono-flow/, 但通过自定义域名访问时, 需要将 base 路径设置为 /
