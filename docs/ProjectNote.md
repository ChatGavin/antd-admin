# 需求文档

## v0.1.x

- 使用 monorepo 管理项目
- 部署 github pages
- 自定义域名与版本管理

### v0.1.3

**自定义域名与版本管理**

- 本项目不打算严格按照,feat/release/fix 等分支管理, 而是使用 tag 管理
- 项目目前只打算有 master/dev 两个分支, tag 对应的即为版本号
- 自定义域名映射 github pages 的域名

### v0.1.2

**部署 github pages**

- 新建 .github/workflows/deploy.yml 文件
  - 使用 github actions 部署到 github pages
  - 部署需要指定 lockfile, 使用 yarn 管理依赖
- 在 package.json 中配置 scripts 命令, 打包运行 admin 项目
  - ~~"build:admin": "pnpm --filter admin build", 通过 pnpm 执行指定目录的命令~~
  - "build:admin": "yarn build:admin", 通过 yarn 执行指定目录的命令
- 使用 github pages 提供的 deploy.yml 文件, 部署到 github pages
  - 注意打包后的 base 路径, 需要结合二级域名使用

### v0.1.1

**使用 monorepo 管理项目**

- 使用 pnpm workspaces 管理项目依赖, 配置 package.json 和 pnpm-workspace.yaml
  - ~~通过 pnpm-workspace.yaml 管理指定的依赖目录~~
  - 改用 yarn workspaces 管理项目依赖, 因为部署到 github pages 时由于无法识别 pnpm-workspace.yaml, 导致无法识别依赖
- 在 package.json 中配置 scripts 命令, 打包运行 admin 项目
  - ~~"dev:admin": "pnpm --filter admin dev", 通过 pnpm 执行指定目录的命令~~
  - "dev:admin": "yarn dev:admin", 通过 yarn 执行指定目录的命令
