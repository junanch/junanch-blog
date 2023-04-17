---
title: 2022 新电脑装机记录
date: '2022-07-26'
tags: ['Apps', 'Configs', 'Mac', 'Backup']
draft: false
images: ['https://static.junanch.com/NQyCOf-20220726.png']
layout: PostLayout
---

![](https://static.junanch.com/NQyCOf-20220726.png)

趁着这次还新的 MacBook Pro M1 Pro，记录一下自己日常使用的 App、配置的还原。

## macOS 软件

收费软件自然有它的收费原因，无论是在日常维护或者体验上，而且买东西最重要就是图个自己喜欢、开心，用着舒服。
![](https://static.junanch.com/t8Ia4w-20220725.png)
![](https://static.junanch.com/JvAet0-20220725.png)
![](https://static.junanch.com/ohN7tH-20220823.png)

### [Bob](https://bobtranslate.com/)

高效、快速的翻译软件，官网文档描述的非常清楚，有社区版和 Pro 版
![](https://cdn.ripperhe.com/oss/master/2022/0508/translate_selection.gif)

### [AltTab](https://alt-tab-macos.netlify.app/)

窗口切换，App 内容先预览确保可以切换到你想要的窗口
![](https://alt-tab-macos.netlify.app/public/demo/frontpage.jpg)

### [~~Rectangle~~](https://rectangleapp.com/)

使用键盘快捷键进行窗口管理
![](https://static.junanch.com/Wxz1lB-20220726.png)
![](https://static.junanch.com/2qX7Cy-20220726.png)

> Update：更换为 Raycast Commands Window Management ![Raycast Commands Window Management](https://static.junanch.com/yelENa-20230417.png)

### [Keka](https://www.keka.io/zh-cn/)

文件压缩、解压

### [~~Mos~~](https://mos.caldis.me/)

> Update：更换为 [LinearMouse](https://linearmouse.app/zh-CN/)

鼠标滚轮方向切换，Mac 外接的鼠标滚轮方向和它的触控板滑动方向是一致的，所以有别于 Windowns 鼠标滚轮的方向

### [Go2Shel](https://zipzapmac.com/Go2Shell)

在 Finder 中打开一个指向当前目录的终端窗口
![](https://static.junanch.com/6CeXXj-20220721.png)

### [IINA](https://iina.io/)

视频播放器

### [~~Alfred~~](https://www.alfredapp.com/) （付费）

> Update：彻底更换为 Raycast

快捷搜索启动应用程序、系统命令(降低音量、清理垃圾)、文件搜索、计算器、剪切板历史...

### [Raycast](https://www.raycast.com/)

快捷搜索启动应用程序、系统命令(降低音量、清理垃圾)、文件搜索、计算器、窗口管理、剪切板历史、设置快捷键 ...

### [1Password](https://1password.com/zh-cn/) （付费）

全平台密码管理工具，体验很丝滑

> 备用方案：[~~Bitwarden~~](https://bitwarden.com/)，基础功能免费，GitHub 开源

### [Bartendbar](https://www.macbartender.com/) （付费）

菜单栏图标管理，一定程度上解决 “刘海屏” 隐藏图标的问题
![](https://www.macbartender.com/Bartender4/img/BartenderBar@2x.png)

> 备用方案：[~~Hidden Bar~~](https://github.com/dwarvesf/hidden)

### [CleanShot X](https://cleanshot.com/) （付费）

区域截图、滚动截图、GIF 录制、箭头文字标注，附送云空间

> 备用方案：[Shottr](https://shottr.cc/)，基础功能免费

### [One Switch](https://fireball.studio/oneswitch/) （付费）

快捷开关，连接耳机、屏幕清洁、隐藏桌面 App、麦克风静音、Dark/Light 模式切换、低电量模式...

### [PasteNow](https://pastenow.app/) （付费）

历史剪切板工具，iOS/iPadOS/macOS 多平台数据同步

![](https://static.junanch.com/hFStKG-20230417.png)

### [~~Manico~~](https://manico.im/) （付费）

快捷键启动程序，配合 Karabiner-Elments 使用，目的是避免快捷键重复的情况下能够快速开启/关闭某个应用，方便摸鱼 🌝。
![](https://static.junanch.com/cFbs8D-20230410.png)

> Update：更换为 Raycast App Hotkey ![Raycast App HotKey](https://static.junanch.com/fC5Mhx-20230417.png)

### [Karabiner-Elements](https://karabiner-elements.pqrs.org/)

键位修改，灵活配置组合快捷键，这个是我目前使用的改建配置功能 & [配置地址](https://github.com/junanch/dotfiles/blob/main/mackup/.config/karabiner/karabiner.json)

- SpaceFN: SpaceBar enables SpaceFN mode

- SpaceFN: SpaceBar + b to SpaceBar (hold to repeat)
- SpaceFN: SpaceBar + [h/j/k/l] to Left, Down, Up, Right
- SpaceFN: SpaceBar + [1/2/3/4/5/6/7/8/9/=/-] to F[1~12]
- SPaceFN: SpaceBar + [a/s/d/f/g/e/r/t/y/u/i/o/p/m] to [left_control + left_shift + left_option + left_command] + [a/s/d/f/g/e/r/t/y/u/i/o/p/m]
- right_command to [left_shift + left_option + left_command + left_control]
- backquote to Esc, left_control + Esc to backquote, left_shift + Esc to ~
- left_shift to left_control + SpaceBar (switch pervious input source)

![config](https://static.junanch.com/TvkqRD-20220728.png)

> 单纯的空格键 + [a/s/d/f/g/e/r/t/u/i/o/p/m] 键位触发，首先会有个多键位冲突问题，其次空格键触发有两个触发点，分别是按下、抬起，我所希望的仅仅是按住空格键后 + 字母键才触发 Manico，如果抬起空格键 + 字母键也会触发的话，那就会和平时打字冲突，日常打字手速太快的话会有很高频率触发抬起空格键 + 字母键

### [uPic](https://github.com/gee1k/uPic)

图床上传客户端，上传到自己的 OSS

### [Downie](https://software.charliemonroe.net/downie/) （付费）

在线视频下载，类似 YouTube、B 站、Twitter 等网站均可直接下载视频

### [Permute](https://software.charliemonroe.net/permute/) （付费）

> 实践一段时间下来发现并不这么常用到

允许你转换视频，音频和图像文件为不同的格式，增加音量，合并他们 (多个视频流合并成一个视频)，下载下来的视频可以转成 GIF

### [MenubarX](https://menubarx.app/)

菜单栏浏览器

### [MindNode](https://www.mindnode.com/)

思维导图

### [PDF Expert](https://pdfexpert.com/zh) （付费）

PDF 预览编辑、标注等，实践下来发现自己不太常用

### [Dato](https://sindresorhus.com/dato) （付费）

时间、日历一起展示，UI 样式和原生一致，之前打折的时候购入
![](https://static.junanch.com/zdwT1J-20230418.png)

### [iTerm](https://iterm2.com/)

命令行输入的终端，可以使用 Minimal 这个选项可以把导航栏缩小
![](https://static.junanch.com/rMKJb1-20220726.png)

**oh-my-zsh**:

- [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)：命令自动提示
- [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting)：命令语法高亮
- [zsh-completions](https://github.com/zsh-users/zsh-completions)：zsh 包管理，升级更新
- [zsh-you-should-use](https://github.com/MichaelAquilina/zsh-you-should-use)：把历史命令转化简短别名
- [git-open](https://github.com/paulirish/git-open)：打开 git 仓库

**提示**

- [spaceship](https://spaceship-prompt.sh/zh/)
- [pure](https://github.com/sindresorhus/pure)

### [~~Fig~~](https://fig.io/)

命令行提示

> Update：弃用，更换为 fzf + fzf-tab ![](https://static.junanch.com/PDZ5OF-20230417.png)

### [Charles](https://www.charlesproxy.com/)

网络抓包

### [Fork](https://git-fork.com/)

Git GUI 工具，看 Git 分支提交记录时更加直观、清晰

### [Drafts](https://getdrafts.com/)

快速收集想法、笔记、待完成的任务，之后整理一下再输入到其他 App，支持 iOS & macOS 双平台数据同步，当 iCloud 剪切板数据同步智障时可以暂时替代

### [Typora](https://typora.io/)

本地 Markdown 编辑器，支持编辑实时预览，目前用来做 Markdown 预览工具 🤣

### [Obsidian](https://obsidian.md/)

个人笔记工具（主要是笔记的存档），包含 iOS 和 Mac 端，本地 Markdown 编辑实时预览、双向链接，主要是方便手机和电脑跨端查看

### [Spark](https://sparkmailapp.com/)

> 多个邮箱的邮件聚合处理

多账号邮箱管理，通知分类 & 智能通知 (将陌生人和垃圾信息设置为静音)

### [Visual Studio Code](https://code.visualstudio.com/)

日常开发编辑器，github 账号同步配置

### [Graphite 石墨](https://github.com/xiaochunjimmy/Sogou-Input-Skin)

Mac 搜狗输入法皮肤
![](https://camo.githubusercontent.com/f880a627272364c8fe5fc8ebdd2ccfc68a0591d15e8793c67186091dde6abda9/68747470733a2f2f63646e2e72656d697863646e2e636f6d2f696d6167652f67726170686974652d636f7665722e706e67)

## Raycast 插件

### [Visual Studio Code Recent Projects](https://www.raycast.com/thomas/visual-studio-code)

打开最近使用的 VSCode 项目
![](https://static.junanch.com/O5lEtz-20230228.gif)

### [Antd open browser](https://www.raycast.com/crazyair/antd-open-browser)

搜索 Ant Design 组件

![](https://static.junanch.com/aI50pI-20230228.gif)

### [Search npm Packages](https://www.raycast.com/mrmartineau/search-npm)

搜索 npm 包

![](https://static.junanch.com/1srwt4-20230228.gif)

### [GitHub Repository Search](https://www.raycast.com/thomas/github-repository-search)

搜索 GitHub 仓库

![](https://files.raycast.com/c9z5sqt7xfissz6gd53tdg8eogk5)

### [Color Pick](https://www.raycast.com/thomas/color-picker)

快速选取颜色

![](https://files.raycast.com/4aq4ee779q3vny4tl6nnnim26yie)

### [Brew](https://www.raycast.com/nhojb/brew)

Brew 的图形界面
![](https://files.raycast.com/pp1sr128vs7ns5dsx8np0xn0z9h3)

### [Google Workspace](https://www.raycast.com/raycast/google-workspace/commands)

搜索你 Google 硬盘上面存储的文件
![](https://files.raycast.com/bh3q7gliyy0hproj5ch6697srmx2)

### [Port Manager](https://www.raycast.com/lucaschultz/port-manager)

查询正在运行的端口
![port manager](https://files.raycast.com/lmyiy7bppmeurq103mu3by7cykm4)

### [IP Geolocation](https://www.raycast.com/koinzhang/ip-geolocation)

查询电脑的 IP

![](https://files.raycast.com/6nsoq6hkanpzccy21rn0fv6o4fpx)

## Git 配置

### [1Password for SSH & Git](https://developer.1password.com/docs/ssh/)

每次换新电脑都需要重新迁移 SSH 密钥，这个是一个非常麻烦的事情，如果用 1Password 存储的话，可以轻松解决，而且以后每次 fetch、push 代码，只需要指纹验证一下即可

> 可以这么理解，流程大概是这样的，我们 ssh key 不是有私钥和公钥吗？我现在把私钥 & 公钥存在 1password，然后把里面的公钥下载到本地的 ssh 目录和 github 配置里面，私钥完全在 1password 的云端，以后每次 git 操作 push 代码，会用 ssh 里的公钥验证拉取 1password 的秘钥，1password 会验证一下密码 or 指纹，然后临时 copy 一个私钥副本作为验证，这个时候本地利用这个 ”临时秘钥“ 就可以和 github 里面的那对公钥匹配上了

![](https://static.junanch.com/1edlV4-20220726.gif)
![](https://static.junanch.com/dDOrCf-20230417.png)
![](https://static.junanch.com/7JxzqS-20230418.jpg)

把对应的公钥下载到 `.ssh/config` 里面，然后修改 config 文件的 host，指向对应公钥就行了

```bash
Host *
  IdentityAgent "~/Library/Group Containers/2BUA8C4S2C.com.1password/t/agent.sock"
  ForwardAgent yes
  UseKeychain yes
  AddKeysToAgent yes

Host GitHub
  HostName github.com
  User git
  IdentityFile ~/.ssh/GitHubAuthKey.pub
  IdentitiesOnly yes

Host Gitee
  HostName gitee.com
  User git
  IdentityFile ~/.ssh/GiteeAuthKey.pub
  IdentitiesOnly yes
```

### 工作和个人的 Git 账户配置

[如何为同一个用户进行多个 Git 配置](https://dev.to/amabdev/how-to-have-multiple-git-configs-for-the-same-user-3ahn)

git 配置好后就可以克隆项目了

## dotfiles

使用自己的 [dotfiles](https://github.com/junanch/dotfiles)，用途更多的是作为一个安装脚本，用于安装一些软件：

- iTerm2
- oh-my-zsh
- macOS 系统配置 (允许第三方软件安装、开机声效禁用)
- brew & mas 软件还原
- vim 配置

### [mackup](https://github.com/lra/mackup) 备份 App 偏好配置

平时用的软件偏好设置 & 快捷键也是非常个人化的，这个也要备份。
![](https://static.junanch.com/VJC5bD-20220725.png)
我通常是用一个定时任务每天跑一个备份，把安装的软件和偏好设置，备份到相对于的地方。mac 可以使用 `crontab -e` 定时触发你备份脚本

- [定期自动云备份 macOS 软件列表，维护一份属于自己的必备 App 清单](https://sspai.com/post/43265)

```bash
  ls -l /Applications | awk '{print $3"\t", $0}' | sort > ~/.backupfile/AppList && osascript -e 'display notification "~/.backupfile/Applist backup" with title "Applist" '

  brew bundle dump --describe --force --file="~/Code/dotfiles/config/Brewfile" && osascript -e 'display notification "~/Code/dotfiles/config/Brewfile backup" with title "Brewfile" '

  mackup -f backup && osascript -e 'display notification "mackup backup" with title "Mackup" '
```
