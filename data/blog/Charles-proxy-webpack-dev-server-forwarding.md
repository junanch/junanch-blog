---
title: Charles 代理 webpack-dev-server 的转发
date: '2022-08-01'
tags: ['Charles', 'Webpack', 'Network']
draft: false
layout: PostLayout
---

最近使用 Ant Design Pro 的时候，发现本地开发请求数据的时候通常会用一个 `proxy.js` 文件设置 `webpack` 代理，它的用处是在于解决本地 `localhost:8000` 请求测试环境数据的跨域问题，流程大概是浏览器 -> webpack-dev-server (nodejs) -> 测试服务器，但是这样无法解决我的一个问题，那就是我想使用 Charles 抓包，把某个 API 实际返回的 JSON 内容映射成我本地的 JSON，也就是需要在前者的流程下插入一个 Charles 代理，浏览器 -> Charles -> webpack-dev-server (nodejs) -> 测试服务器，映射成我本地的 JSON 好处是每当我需要修改请求内容中的某个字段值时，我只需要修改 JSON 保存即可

通过阅读到的相关资料我解决了这问题

- [webpack-dev-server 转发的请求为什么无法被 charles 抓包？](https://segmentfault.com/q/1010000012758832/a-1020000012759932)
- [Localhost traffic doesn't appear in Charles](https://www.charlesproxy.com/documentation/faqs/localhost-traffic-doesnt-appear-in-charles/)

可以利用 Charles 官方提供的 `localhost.charlesproxy.com` 域名替换 `localhost`，然后使用 SwitchyOmega 转发至 Charles，而 Charles 则把你想要的 API 映射到本地，其他的 API 最终会继续使用 web-dev-server 代理请求

## SwitchyOmega

设置浏览器代理转发至 Charles 客户端
![](https://static.junanch.com/1yy0ae-20220801.png)
![](https://static.junanch.com/VUgYPV-20220801.png)

## Charles

Charles 在系统里默认占用的 Proxy 端口是 8888 (http)、8889 (https)，因为 8888 端口和 Surge 的默认端口是一样的，它们互相抢占了，这意味着如果我想要同时使用 Charles 的抓包和 Surge 的网络代理的话，就必须把它们的端口分别重新设置，所以我把 Charles 的 Proxy 端口改为了 7777、7778，然后把它的请求再转发至 Surge。

> Tips：如果没有转发至 Surge 的需求则完全可以不用重新设置 Charles 的端口，使用默认的 8888 端口即可，SwitchyOmega 转发 Charles 的端口也需要同步修改一下

关于如何修改 Charles 端口这个问题，可以通过 External Proxy Setting 修改
![](https://static.junanch.com/VjJUCs-20220801.png)

修改好之后，把浏览器的访问链接 `http://localhost:8000/` 修改成 `http://localhost.charlesproxy.com:8000/`
![](https://static.junanch.com/8eBed0-20220801.png)

刷新之后，在 Charles 里把需要的 API 映射成本地的 JSON 文件即可
![](https://static.junanch.com/4XgH6w-20220801.png)

通过这个流程配置，就可以兼容 Charles 和 webpack-dev-server 同时使用的问题了
