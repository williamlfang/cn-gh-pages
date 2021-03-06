---
layout:   post
title:    "GoAgent启动后无反应的问题解决方法"
category: Google 
tags:     
    -  Goagent
    -  翻墙 
description: 
published: true
status: publish
---
 
我一直都在使用 Google 开发的一款翻墙插件上网。这个「神器」在我的博客里面也有[介绍](http://williamlfang.github.io/cn/2014/01/05/goagent/)。科学上网，远离 GFW。
 
不过十分蹊跷的是，这几天使用 `Goagent` 的时候出现了不明的原因。情况是这样的：
 
> 正常启动 `goagent-gtk.py` 后可以现实界面，没有报错的情况。可是也没有出现 `log` 上传信息的提示。然后使用 `Chrome` 登入，已经无法翻墙了。
 
<!-- more -->
 
无法翻墙对我来说就像关进了一个思想的囚牢，难以自由。现在连基本的 `Google` 网站都无法登入，使用 `Baidu` 来搜索，根本就没有任何的记录。
 
我首先想到的是必须要通过 `Google` 来寻求帮助。我在 `Linux` 的主机下有安装了 `VirtualBox`，里面的 `Chrome` 是可以正常访问 `Google` 的。联想到我以前是通过修改 `hosts` 进行简单的翻墙，因此首先复制一份 `Windows` 里面的 `hosts`到 `Linux` 在 `ets\hosts`。这样是基本可以访问 `Google` 了。
 
通过 Google 搜索以下问题，立马就有类似的[情况出现](https://code.google.com/p/goagent/issues/detail?id=11826)了
 
> goagent  启动后 没反应
 
找到上面的提示，说是可能跟某个插件有冲突。同时，下面的评论里面也有提到说可能会跟优酷的一款去广告插件冲突。突然想到前几天有通过 Chrome Store 安装了一个取出优酷视频广告的插件，然后接下来的几天都无法使用 `Goagent` 了。果断去去把这个插件删除了。接下来重启 `goagent-gtk.py`，立马就满血了。好开心，有可以翻墙了。
 
兹作记录。
 
