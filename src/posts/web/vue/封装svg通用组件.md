---
title: "封装svg通用组件"
date: 2023-06-25 11:40:37
order: 2
category:
  - web
tag:
  - vue
---

1. 安装`vite-plugin-svg-icons`插件

```
pnpm i vite-plugin-svg-icons -D
```

2. 在main.ts中引入`vite-plugin-svg-icons`

```tsx
import 'virtual:svg-icons-register'
```

3. 创建`src/assets/icons`目录，用来存放svg图片

![在这里插入图片描述](../../../../src/.vuepress/public/assets/images/vue/svg.png)


4. 配置`vite.config.ts`

```typescript
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
plugins: [
    vue(),
    createSvgIconsPlugin({
      // 指定要缓存的文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]'
    })
  ],
```

5. 封装SvgIncon通用组件

```vue
<template>
  <div>
    <svg :style="{ width, height }">
      <use :xlink:href="prefix + name" :fill="color" />
    </svg>
  </div>
</template>

<script setup lang="ts" name="svgIcon">
defineProps({
  prefix: {
    type: String,
    default: '#icon-'
  },
  name: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: ''
  },
  height: {
    type: String,
    default: ''
  }
})
</script>
<style scoped></style>
```

- `xlink:href:`图片名称
- `fill：`图片颜色，如果这里不生效，可以去svg图片里，把fill相关属性删除即可

6. 使用

```vue
<template>
  <div>
    <svg-icon name="demo" color="green"></svg-icon>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/SvgIncon/index.vue'
</script>

<style scoped></style>
```

这里是需要引入SvgIcon组建的，可以考虑把该组件做全局注册，那样在使用的时候就不用到处注册了