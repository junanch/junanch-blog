---
title: 新的图床方案 Cloudflare + Backblaze
date: '2022-04-22'
tags: ['Image', 'Storage', 'Cloudflare']
draft: false
layout: PostLayout
---

最近把自己的图床存储方案从阿里云切换到了 Backblaze，之所以切换主要是因为国内备案太难了，加上最近看到的这篇文章 [How we handle 80TB and 5M page views a month for under $400 – Poly Haven Blog](https://blog.polyhaven.com/how-we-handle-80tb-and-5m-page-views-a-month-for-under-400/)，而且想到自己之前从 Cloudflare 购买了新的域名，所以索性就尝试、体验一番。

## 阿里云 OSS 对象存储

之前使用阿里云主要是因为自己关注的博客中有相关的文章，所以就按流程实际动手了一下。

- [国内自建图床指南](https://lutaonan.com/blog/aliyun-cdn-tutorial/)

- [个人博客自建图床](https://blog.sailfishc.com/posts/2021/12/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E8%87%AA%E5%BB%BA%E5%9B%BE%E5%BA%8A/)

但是搞到一半发现如果需要国内加速、CDN 的话，不仅需要国内的域名，而且还需要备案 😂

- 域名这个还好办，直接从阿里云购买一个 .cn 域名就行了，价格大概是首年 29 元，后面续费就是 39 元/年了。
- 域名备案就太难受了，不仅需要购买一个 ICP 备案服务码，而且这个备案码还需要绑定自己的云服务才能使用，也就意味着还需要养一个云服务，这一套流程下来价格实在是太感人了，劝退。
  - ICP 备案服务码 ¥100 (踩坑了，购买后发现不能还需要绑定云服务，直接就退款)
  - 阿里的云服务器 ¥300 多一年

搞到这突然间发现自己好像能理解为什么 CDN、回源等策略可以节省 OSS 图片访问流量了，其实就是用自己购买的云服务器做缓存，然后用绑定自己服务器的域名 `.cn` 做访问中转，以达到节省 OSS 流量的目的，😂  可我就是想用一下国内加速、CDN 而已，就得花这么多钱养着，哎，如果还想要用阿里云的话还是直接包月 OSS 资源套餐吧。

## Cloudflare + Backblaze

最近看到还可以有更经济的方案，使用 Cloudflare + Backblaze

- Cloudflare Workers 一天 10 万次请求 (免费额度)
- Backblaze 前 10GB 存储免费

这已经能满足我自己对与图床的需要了，至于具体怎么搭建我是看这篇文章解决的：

[使用 Backblaze B2 和 Cloudflare Workers 搭建免费的自定义域名图床](https://blog.meow.page/archives/free-personal-image-hosting-with-backblaze-b2-and-cloudflare-workers/)

## uPic 使用 S3 协议上传

由于 Backblaze 还兼容 S3 协议上传，那么还可以配合 uPic 的自定义 S3 协议上传

[Getting Started with the S3 Compatible API](https://help.backblaze.com/hc/en-us/articles/360047425453?_ga=2.209446997.638194624.1650768093-549181743.1648794068)

![https://static.junanch.com/8rvewt-20220429.png](https://static.junanch.com/8rvewt-20220429.png)
