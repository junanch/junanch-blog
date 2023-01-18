---
title: 2022 年博客改版
date: '2022-04-18'
tags: ['Next.js', 'Markdown', 'TailwindCSS', 'Blog']
draft: false
layout: PostLayout
---

由于之前的 notion blog 个人感觉样式有点难看，加上数据存储问题，文章存储的地方是 notion 里面，万一哪一天像 Evernote 那样数据迁移就是一个大问题了，所以想来想去，觉得文章、笔记还是得以 markdown 文件格式存储管理来得实际一点，所以就进行了改版。

## 博客模版

为了好看，所以特意在 GitHub 上面搜索了一下，发现用 Next.js、MDX 关键词搜索 Stars 比较高的项目里面有一个 [timlrx/tailwind-_nextjs_-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) 项目挺符合自己的要求的，所以就选用了这个项目为起始模版。

使用 `npx degit https://github.com/timlrx/tailwind-nextjs-starter-blog.git` 直接下载，按照项目文档修改一下相关网站配置就可以了。

## 布局样式

调整了一下首页的布局，自己比较喜欢用时间轴来串联起文章，所在文章列表上面用 “年” 做为一个周期，这样也方便每一年都可以做一个总结。

![https://static.junanch.com/W3rGK4-20220517.png](https://static.junanch.com/W3rGK4-20220517.png)

文章详情页加了一个头部进度条，可以知道文章的页面长度

## 部署

Next.js 开发的项目可以部署到它家的 [Vercel](https://vercel.com/) 上面，再配合自己的域名，完全不用自己购买服务器了。
