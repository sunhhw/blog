---
title: "搭建项目架构"
date: 2023-06-11 11:40:37
order: 1
category:
  - web
tag:
  - Vue3
---

# 一、使用Vite创建项目

vite官网:https://cn.vitejs.dev/guide/

- **vite**

vite是一种新型的前端构建工具,跟webapck类型,**但是vite的效率会更高,能够显著的提升前端开发者的体验。**

vite是利用 `ES6` 的 `import`会发送请求去加载文件的特性，拦截这些请求，做一些预编译，省去`webpack`冗长的打包时间,如果我们有一个应用程序，其中包含一些页面，如主页，关于，联系人等，并且我们访问主页，我们真的只需要主页的代码，这就是我们通过Vite获得的。webpack将处理所有页面的代码，然后才为主页提供代码。

- **pnpm**

performant npm ，意味“高性能的 npm”。[pnpm](https://so.csdn.net/so/search?q=pnpm&spm=1001.2101.3001.7020)由npm/yarn衍生而来，解决了npm/yarn内部潜在的bug，极大的优化了性能，扩展了使用场景。被誉为“最先进的包管理工具”

- **使用vite创建项目**

```js
npm create vite@latest
```

然后按照提示操作即可！

```tsx
sun@xiandeMacBook-Pro  ~/Documents/workplace/vue  npm create vite@latest
✔ Project name: … project
✔ Select a framework: › Vue
✔ Select a variant: › TypeScript
```

- **如果使用Vue3的话,删除Vetur插件,新增TypeScript Vue Plugin (Volar)插件,增加对Ts的支持**

**项目创建成功后,查看项目目录,如果发现main.ts中".vue"出现波浪号,异常为找不到该有模块,是因为Vue3还不识别.ts文件,此时可以按F1,搜索Volar: Select TypeScript version,选择Use workspace version即可**

# 二、配置eslint代码校验工具

[EsLint官网链接]: https://zh-hans.eslint.org/docs/latest/use/getting-started

1. 安装Eslint配置文件

你可以使用该命令安装并配置 ESLint：

```shell
npm init @eslint/config
```

根据提示并选择自己需要的配置: 不使用Eslint的格式化工具

```shell
sun@xiandeMacBook-Pro  ~/Documents/workplace/vue/project  npm init @eslint/config
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · vue
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser✔ What format do you want your config file to be in? · JavaScript
Local ESLint installation not found.
The config that you've selected requires the following dependencies:

@typescript-eslint/eslint-plugin@latest eslint-plugin-vue@latest @typescript-eslint/parser@latest eslint@latest
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · pnpm
```

2. 配置Eslint脚本

[EsLint脚本配置文档]: https://zh-hans.eslint.org/docs/latest/use/command-line-interface

```js
"scripts": {
    "dev": "vite",
    "build": "vue-tsc && vite build",
    "preview": "vite preview",
    "lint":"npx eslint './src/**/*.{js,jsx,vue,ts,tsx}'  --fix" // 新增
  },
```

**--fix:**是为了自动修复部分不规范代码

3. VsCode中安装EsLint插件,自动生效
4. rule通用配置

# 三、配置prittier格式化工具