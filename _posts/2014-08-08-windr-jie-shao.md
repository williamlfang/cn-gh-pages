---
layout:   post
title:    "WindR介绍"
category: [金融 R]
tags:     
-  金融
-  Wind
-  数据
-  股票
description: 
published: true
status: publish
output:
  html_document:
    toc: true                  ## TABLE OF CONTENT
    toc_depth: 4
    fig_width: 10
    fig_height: 6
    fig_caption: true
    keep_md: true
---

时下金融界正在热火朝天地讨论如何应对「金融大数据」对股市研究的影响。我的个人看法是：

    有总比没有好。
    
如果换做几年前，我们去研究沪深市场，查看个股行情，唯一能得到的数据是由各个券商预装的交易软件。这些往往只能得到一个大体的、模糊的、有限制使用权限的金融数据，大抵上只能得到股市的基本行情变动，无法确切的得
到每只股票的具体交易记录更何谈再深入的进行统计模型与数据挖掘。因此，在那个时代，谁能够得到更新的、更全的、更具有实质内容的金融数据，那就将得到一个统计研究的制高点。如果我们去翻看前几年的金融期刊，也会发
现一些规律，即往往那些也已发表的文章，仅仅是因为其得到的数据较于他人更具有「故事性」，而非其用作数据分析的统计或计量方法有多好（甚至可称「低级趣味」）。因此，大家都击破脑门去花钱找数据，也是情理所在。

那么，现在已然进入了一个金融数据大暴发的新时期，互联网的高速发展与深入推进提供了社交媒介在我们日常生活与工作当中的主角地位，而这里移动设备每时每刻都在记录着任何可供追踪记录的「信息」。现在，所谓「信息」
的概念，已经不仅仅是停留在传统理念下的生产与消费记录，如投入产出表，而是扩大性的囊括了与个体活动有关的交易、社交、活动、娱乐、观点等综合数据。这些数据一方面具有「大」与「多」的特征，通常移动设备每天得到
的数据是以 TB 来衡量的，另一方面还具有「细」与「密」的个体性特征，往往可以追踪记录任何一个通过互联网发生活动的个体每日的活动情况。现在，这些数据可以供我们进行传统统计由于数据维度灾难而无法完成的分析，提
供了一个全新的视角。

<!-- more -->

## **WindR** 初识
说到金融数据，我们不得不提 **Wind**。作为目前国内首屈一指的金融讯息提供商，Wind 在金融界的地位无可替代，其提供的全方位、多领域、高质量的经济与金融数据强有力的支持了我们对金融市场的研究分析。我个人目前的
工作基本上就是依赖 Wind 的数据输出与图形可视化来实现的。因此，当我听说 Wind 现在也提供了 **R** 的 API 借口时，本人竟然感到无比的激动，这种激动就像麦兜在听到华仔唱歌时那个无以抑制的想要「尿尿」的感觉。现
在，我可以通过 **WindR** 插件，直接读取 Wind 里面的金融数据，接下来便可以利用 R 强大的统计分析与数据可视化功能了。

> 这里多唠叨几句。其实 Wind 在几年前就已经开始尝试提供多种数据处理软件的接口了。例如，在 2012 年的时候推出的 Excel 接口，可以方便我们在 Excel 里面直接导出想要的数据，其中包括了个股的基本面时间序列数据、
日间与日内高频行情数据、历史快照与实时截面数据、日内分钟更新数据、上市公司财务报表等。同时，考虑到 Matlab 在金融建模领域的重要性，Wind 还推出了 Matlab 的接口，利用 Excel 通道来获得相关数据，并且辅之以 
Matlab 程序设计。

## 如何安装

### 系统要求

目前，由于 Wind 客户端只能在 Windows 系统下运行，因而其提供的所有软件接口都要求必须是安装在 Windows 操作系统环境下。目前我的绝大部分工作都是在 Linux Ming Qiana 操作系统下完成，所以无奈的我只好在原本就只
有 120G 大小的 SSD 硬盘中「忍辱割地」建立一个 Virtuabox 虚拟机，里面运行 Win7 系统。这个大小设定为 30G （只好这样子了）。

这里总结了一下需要的配置：

- Windows 系统，同时支持 32 位 和 64 位。

    目前我使用的是 Win7 64位的操作系统，Linux 主机内存为 4G + 1G，因而给虚拟机划分了大概有 2.5G 的内存（Linux 主机也是 64 位的，不过基本不怎么「吃」内存）。磁盘空间为 30G 固定大小，设置固定大小可以提供
运行速度。
   
- 官方要求 R 2.15.0 以上的环境。

    不过大概现在没有人会停留在 2 时代了，目前 CRAN 提供下载是已经 R 3.1.0 了。本人目前使用没有任何压力。所以建议大家可以升级的就动动手吧，表示一下对 R Core 团队辛苦劳作的支持喽。R 的安装我以前在博客有介
绍，大家可以去博客里面看看。
   
- 由于安装的借口插件需要写入**注册表**，因此需要系统管理员权限。所以请重新启动切换到管理员 Adm 。

### 安装过程

下面开始介绍如何在系统里面安装 WindR 软件包。

- 打开 Wind 客户端

<!--
   [![打开 Wind 客户端](/cn/assets/images/r-figures/2014-08-08-windr-jie-shao/img01.jpg)](/cn/assets/images/r-figures/2014-08-08-windr-jie-shao/img01.jpg)

- 在客户端左上角点击 `文件`，出现下拉框，选择 `修复插件` - 选择 `修复R插件`，得到下面的操作界面。

   [![修复插件](/cn/assets/images/r-figures/2014-08-08-windr-jie-shao/img02.jpg)](/cn/assets/images/r-figures/2014-08-08-windr-jie-shao/img02.jpg)

   [![修复插件2](/cn/assets/images/r-figures/2014-08-08-windr-jie-shao/img03.jpg)](/cn/assets/images/r-figures/2014-08-08-windr-jie-shao/img03.jpg)
 -->
- 根据提示，按任意键完成安装过程。这样，完整的 `WindR` 扩展包便成功在 R 中安装。接下来便是如何使用插件来辅佐研究。

## WindR 使用教程
### 加载包
与 R 中的其他扩展包一样，使用 WindR 前也需要预先加载。使用如下命令

```r
library(WindR)
```

经过扩展包的加载，我们便可以开始使用 `WindR` 里面的命令了。

### 启动 `WindR`
加载 WindR 后，在真正开始操作之前，我们需要使用命令登入 Wind 客户端并以命令的形式激活插件。命令如下：

```r
 w.start(showmenu = FALSE, waitTime = 60);   ## 缺省设置为「显示导航界面」,命令超时时间为 300 秒
```

```r
## $ErrorCode
## [1] 0
## 
## $ErrorMsg
## [1] "Already conntected!"
```

不过我一般选择在启动前预先加载常用包。这个在系统的 etc\Rprofile.site 中设置。通常，我个人的加载包如下

```r
options("width"=160)                # wide display with multiple monitors
options("digits.secs"=3)            # show sub-second time stamps

setHook(packageEvent("grDevices", "onLoad"),
    function(...) grDevices::X11.options(width=8, height=8, 
                                         xpos=0, pointsize=10, 
                                         #type="nbcairo"))  # Cairo device
                                         #type="cairo"))    # other Cairo dev
                                         type="xlib"))      # old default                                           
options(prompt="R> ", digits=4, show.signif.stars=FALSE)
options("pdfviewer"="okular")         # on Linux, use okular as the pdf viewer

.First <- function() {
library(graphics)
options("repos" = c(CRAN = "http://mirrors.softliste.de/cran/", CRANextra="http://www.stats.ox.ac.uk/pub/RWin"))
options("device" = "quartz") 
library(zoo)
library(xts)
library(TTR)
library(quantmod)  
library(ggplot2) 
library(WindR)
w.start()
}

.Last <- function() {
if (!any(commandArgs()=='--no-readline') && interactive()){
timestamp(,prefix=paste("##------ [",getwd(),"] ",sep=""))
try(savehistory("~/.Rhistory"))
}}
last <- function (x, n=1, ...) tail(x, n=n, ...)
```

### WindR 操作命令规范
任何的命令都以 `w.` 开始

`WindR` 为了对 `R` 命令做出统一的规范，特别适用了在各个命令语句前面添加 `w.` 以示区别于普通的R命令格式。因此，我们开始调用导航栏时，可以使用命令

```r
w.menu() # 首次使用显示导航界面
```

```
## NULL
```

```r
w.menu() # 第二次关系到导航界面
```

```
## NULL
```

```r
w.menu('wsd') # 显示 w.wsd() 导航 
```

```
## NULL
```

#### 命令严格区分大小写

我们知道，`R` 作为一门编程语言，是严格区别大小写的，比如

```r
X <- c(1,2,3)   ## 大写的 `X`
x <- seq(3,5)   ## 小写的 `x`
(X == x)        ## 判断二者是否相等
```

```
## [1] FALSE FALSE FALSE
```
因此，必然的，扩展包 `WindR` 也同样需要严格区分大小写命令。例如，`beginTime` 不能写成 `begintime` 或者 `BeginTime`。这些需要我们在往后的使用中多加注意，不要把大小写不同的命令代码搞混淆了。

#### 引号内输入不区分大小写

以上我们分析了在命令语句中 `WindR` 继承了 `R` 编程语言严格区分大小写的规定。可是，现在 WindR 又更加具有灵活性，提出了允许在引号内部是可以允许使用大小写混合输出的，不再做严格区分。比如，

```r
w.wsd('090007.IB','close',Sys.Date()-5,Sys.Date(),'Priceadj=F;tradingcalendar=NIB')
```

```
## $ErrorCode
## [1] 0
## 
## $Data
##      DATETIME CLOSE
## X1 2014-08-12 3.968
## X2 2014-08-13 3.960
## X3 2014-08-14 3.930
## X4 2014-08-15 3.950
## 
## $Code
## [1] "090007.IB"
```
等同于命令

```r
w.wsd('090007.ib','CLOSE',Sys.Date()-5,Sys.Date(),'Priceadj=f;tradingcalendar=nib')
```

```
## $ErrorCode
## [1] 0
## 
## $Data
##      DATETIME CLOSE
## X1 2014-08-12 3.968
## X2 2014-08-13 3.960
## X3 2014-08-14 3.930
## X4 2014-08-15 3.950
## 
## $Code
## [1] "090007.IB"
```

#### 支持数组形式的输入格式

所谓数组形式，即包含多个参数的向量。`WindR` 是允许我们使用更加高效的方法来输出多个参数变量的。比如，为了输出

```r
stock01 <- w.wss("600000,sh, 600005.sh, 600004.sh", "roe_avg, roa", "rptDate = 20101231")

code <- c('600000,sh', '600005.sh', '600004.sh')
field <- c('roe_avg', 'roa')
stock02 <- w.wss(code, field, "rptDate = 20101231")
```



### 获得相关帮助
通常我们在使用 `R` 遇到问题，首先应该想到的是伴随其安装而预先配置的使用手册。该手册通常包括了作者能够想到的所有问题的解决方法，依然足够我们日常的使用了。

在经过加载包 `library(WindR)` 后，我们可以使用内置的帮助命令 `help()` 来查找相关资讯。例如

```r
## library(WindR)
help(WindR)

help(w.wsd)
```

### WindR 各个命令使用说明[待续]
下面，我们分别从各个命令不同的语法结构与分析功能逐一介绍其功能、用法、特征以及可供金融数据分析使用命令。

#### `w.isconnected()` 判断客户端是否已经成功登入

由于我们使用 WindR 时需要有客户端的授权支持。因此，我们才需要一个命令查看当前操作是否已经通过了授权认证，以确定 WindR 是否登陆成功。

```r
## library(WindR)
w.isconnected()
```

```r
## [1] TRUE
```
输出结果为 TRUE 表面当前已经成功登入 Wind 客户端，可以使用 WindR 命令获得相应的数据查看权限。

#### `w.asDateTime()` 转换日期格式与特殊处理

从用户手册中可以发现，`WindR 接口函数中的时间指标不是标准的通用格式，而是采用「以距离某个时间点的天数形式输出的」，从而是一个浮点数。因此，我们需要特殊的日期格式处理命令，即 `.asDateTime()`。该命令的目
的在于把 WindR 中的浮点数日期数据转换为 R 的语言时间格式。

```r
df <- w.wss("600000.sh, 000002.sz", "last_trade_day, pre_close")
df
```

```
## $ErrorCode
## [1] 0
## 
## $Data
##        CODE LAST_TRADE_DAY PRE_CLOSE
## 1 600000.SH          41866      9.60
## 2 000002.SZ          41866      9.36
## 
## $Time
## [1] "2014-08-17 09:31:42.005 CST"
```

```r
df2 <- w.asDateTime(df$Data[,2], asdate = TRUE)
df2
```

```
## [1] "2014-08-15" "2014-08-15"
```








