---
title: Notion 博客搭建记录
date: '2021-04-25'
tags: ['Blog', 'Notion']
draft: false
layout: PostLayout
---

![https://static.junanch.com/lRTleW-20220517.jpg](https://static.junanch.com/lRTleW-20220517.jpg)

搭建博客的基本原理就是使用 Notion 作为 CMS，然后通过 [Next.js](https://nextjs.org/)、[react-notion](https://github.com/splitbee/react-notion)、[wreact-notion-x](https://github.com/NotionX/react-notion-x) 从 Notion 里获取内容并呈现出来，然后将网站的代码部署到 [Vercel](http://vercel.com/)。

这样做不仅可以使网站干净、整洁，方便自己二次定制网站，而且之后的文章都可以在 Notion 上编辑更新，不用每次都需要手动拉取仓库、编写 Markdown、推送代码这一系列操作 (缺点是没有 Git 版本管理)，也不用担心图床的问题，可以把图片直接存储到 Notion 上，并且可以利用 Next.js + Vercel 的 [增量式更新](https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration)，可以在更新 Notion 的文章后无需重复 build，只需要刷新一下博客网站就会自动更新内容，相比以往每次发布更新文章都需要手动去重新构建一次博客网站真的方便很多 🥳。

## 博客是如何构建？

- **数据源**
  传统博客的内容通常使用 Markdown 编写并托管到 Github 上（Hexo、Hugo、Jekyll），除此之外也有 Gatsby 和 Gridsome， 它们除了支持基础的内容编辑管理外还提供一些插件，使它们能够从第三方 CMS 中提取内容，提供更多精彩的内容展示 ，另外还有自我托管的 WordPress、Ghost 等方式。
- **内容呈现**
  利用前面提供的数据，并根据自己的需要在网站上呈现出来 🌝 。常见的博客（Hexo、Hugo、Jekyll）在构建时需要获取到它们的数据源，这意味着在数据更新时需要重新构建整个网站（如更新文章、发布新文章等）

## 内容的呈现

通常我们使用 React 或 Vue 构建的单页应用程序都是在浏览器加载网站的 HTML 后，根据每个页面执行不同的 JS 代码，然后再通过 Ajax 异步从服务器获取额外的数据渲染。这样的话意味着用户会有一个等待数据加载的过程以确保拉起取最新的数据，他们不得不在 HTML 加载后等待数据的请求，尤其是数据源服务器处于不同地区时 API 获取数据的时候会慢很多，具体流程如下图：

![https://static.junanch.com/ZPHYfr-20220517.jpg](https://static.junanch.com/ZPHYfr-20220517.jpg)

首先要知道浏览器其实相当于 “翻译机”， 将我们访问服务器所传回来的文件进行 “翻译”，然后在浏览器里呈现出来，对于静态网站来说它只关心服务器传来的文件，然后将它渲染就完事了，具体如下图：

![https://static.junanch.com/Hamw18-20220517.jpg](https://static.junanch.com/Hamw18-20220517.jpg)

明显可以看出来，服务器将既有的文件返回给客户端，然后让浏览器 “翻译” 并显示出来，所以其网页的内容是固定的，需要更新的时候我们只能去改动其源文件，所以流程更加简短、访问速度也会快很多。但这样也会带来新的问题。

## Next.js + Vercel 解决的问题

Next.js 它提供了一种预渲染的形式，只要你在它提供的 getStaticProps 函数里面发起的 Ajax，它将会在前端代码 build 的时候，利用 nodejs 预先请求接口后把数据以 JSON 文件的形式储存在打包目录里面，这个时候网站就会直接拿 JSON 的数据渲染，相对来说会快很多。

![https://static.junanch.com/qGX1Tc-20220517.jpg](https://static.junanch.com/qGX1Tc-20220517.jpg)

但是现在还有一个问题没解决，那就是如果 next.js 只在 build 的时候请求更新 JSON 文件的数据的话，就意味这我们没一次更新 Notion 的文章都需要重新 build 一下，这明显不符合最初的约定，还好它还提供来一个增量静态再生 (Incremental Static regeneration) 功能，只要我们在 getStaticProps 里再增加一下 revalidate: 1 的值，就可以利用 Vercel 的 serverless 稳定更新 JSON 文件的数据。 它的原理是利用 Vercel 的 serverless 监听检测 revalidate 设置的时间，等到检测失败后会在服务器上触发一次更新数据的操作，成功生成后，Next.js 将使缓存无效并显示更新页面所需要的 JSON 数据。如果后台重新生成失败，则旧页面保持不变。

![https://static.junanch.com/ZPgzWf-20220517.jpg](https://static.junanch.com/ZPgzWf-20220517.jpg)

## 参考 Link

- [Powering my blog with Notion - Spencerwoo](https://blog.spencerwoo.com/2021/02/nextjs-blog-notion)
- [Building a blog with Notion & Next.js - Splitbee](https://splitbee.io/blog/notion-as-cms-using-nextjs)
- [Next.js Notion Starter Kit - Travis Fischer](https://transitivebullsh.it/nextjs-notion-starter-kit)
- [ijjk/notion-blog](https://github.com/ijjk/notion-blog)
- [用 Notion 部署你的个人博客](https://sspai.com/post/66678)
