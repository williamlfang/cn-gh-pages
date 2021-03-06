---
layout:   post
title:    "简历技术派"
category: Tech 
tags:     
- 简历
- LaTeX
- Html
description: 
published: true
status: publish
---
 
找工作至少要准备两种以上格式的简历，注意，这里值得不是中文或者英文的，而是具体的简历呈现的格式。
 
我非常不推荐使用 Word 来编辑简历，主要是因为
 
- MS 经常对 office 进行更新，动不动的我们就得升级，可能你电脑的 office 已经升级到了 2013 年，可是你老板公司却只能使用 XP 的，这样HR可能就无法查收使用 word 制作的简历了
 
- 最要命的，我们经常发现本来已经调好各种格式 的word 简历，却在另外的一台电脑里莫名其妙的出现格式错误，与原来设计的完全不同，甚至有时还会出现乱码的情况。所以，找工作，远离 MS 啊。
 
## 简历的两种境界
 
我这里推荐使用两种文件格式来制作简历。
 
<!-- more -->
 
- 首选当然是 LaTeX 啦。这个可是说是制作简历的神器，页面非常的美观，而且最后得到的 pdf 格式的文件通杀所有系统，能够完美无差的在不同的电脑、系统、环境中查看。再者，使用 LaTeX 本身也是一件拉风的事情，当 HR 在经过一整天的 Word 那丑陋而又抽风的格调后，相信第一眼看到完美的 pdf 会神清气爽的。（当然，简历最重要的要有「料」，如果你的能力与阅历本来就不甚了了，那可能真的埋踏了神器）。
    
  前段时间我使用 LaTeX 制作了一个带有时间标签的[简历](http://williamlfang.qiniudn.com/cv/william_cn.pdf)，里面可以对工作经历做时间上的排序，方便 HR 查看。颜色可以按照个人偏好选择。我使用的是金桔色，代表着「青春与活力」，希望自己在将来的工作中也「满腹热血」而非「满腹牢骚」，纵然「满腹经论」，好歹也得努力工作让家人「满脸幸福」。
 
- 其次，我们可以尝试制作一个应用 Html5 技术的网页版简历，生成的文档可是直接加入到 Email 正文。现在好多公司由于保密问题，通常不接受带附件的简历，那么，有用一款可以直接在邮件中文里显示的简历页面，将使你受益颇多。而且，现在的 Html5 技术已经非常成熟，可以制作一个异常漂亮的简历页面，里面还可以提供相应的链接，使得单页的简历在内容上得到扩展，增加你的筹码。
 
## Html5 制作简历
 
我原来本是打算直接用先前制作好的 pdf 格式来转成 Html 代码（这个可以使用 **pdf2htmlEX** 来实现，详见我的帖子，[PDF转HTML的方法](http://williamlfang.github.io/cn/2014/03/30/pdf-zhuan-html-de-fang-fa/)）。可是最后发现， 如果是直接将代码拷贝到邮件正文，根本就不可能被编译成 html（我在 Linux 系统下使用 Thunderbird）。因此，也就死了这条贪图便捷的心。还是乖乖的动手写代码吧。
  
思路还是蛮简单的，就是将 Html5 的代码全部放在一个邮件的文档里面。如果有外部链接，如图片、文件、音频等，这可以使用超链接的方式插入。全部代码包括几部分
 
- 表头部分：用于显示网页标题。
 
        <!DOCTYPE html>
        <!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
        <!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
        <!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
        <!--[if gt IE 8]><!--> 
        <html class="no-js"> <!--<![endif]-->
        <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>William · 方 莲</title>  	<!-- <title>My sweet one page CV</title> -->
        <meta name="viewport" content="width=device-width">
 
- **css**：使用 **<style type="text/css"> </style>** 引入，主要控制页面格式、相应方式、动画顺序、字体、颜色等。这部分往往是比较难的部分，可以找网上的帖子来做参考，省去一笔不必要的时间浪费。
 
  比如，我通常会选择在简历中添加 Google+、Facebook、新浪微薄等链接，方便 HR 直接跳转到更多的咨询。这点在传统的纸质简历中是难以想象到的。
  
[![cvex01](/cn/assets/images/r-figures/2014-03-31-jian-li-ji-shu-pai/cvex01.png)](/cn/assets/images/r-figures/2014-03-31-jian-li-ji-shu-pai/cvex01.png)
  
  再举个例子，我使用带有时间轴的标签，这个可以通过一下命令完成：
  
      .time {
      width: 20%;
      display: inline;
      float: left;
      text-align: right;
      width: 70px;
      margin-right: 20px;
      font-size: 15px;      /* -------------   time font size --------------------*/
      font-weight: bold;
      }
      
      .timeline {
      width: 80%;
      display: inline-block;
      }
      .timeline .element {
      margin: 0;
      padding: 0 0 10px 20px;
      border-left: 4px solid #4ec5e0;   /* 时间轴的宽度， 颜色: border-left: 4px solid #f1f1f1;   */
      -webkit-transition: 1s ease;
      -moz-transition: 1s ease;
      -o-transition: 1s ease;
      transition: 1s ease;
      }
      /*
      .timeline .element h3 {
      display: inline-block;
      }
      */
      .timeline .element:hover {
      border-left: 4px solid #c2d9a1;
      cursor: pointer;
      }
      .timeline .element:hover {
      -webkit-transition: 1s ease;
      -moz-transition: 1s ease;
      -o-transition: 1s ease;
      transition: 1s ease;
      }
      .timeline .element::before {
       content: " ";
      color: white;
      background: white;
      display: inline-block;
      margin-left: -29px;
      position: absolute;
      padding: 0;
      border: 1px solid rgba(0, 0, 0, 0.1);
      height: 12px;
      width: 12px;
      -webkit-border-radius: 6px;
      -moz-border-radius: 6px;
      -ms-border-radius: 6px;
      -o-border-radius: 6px;
      border-radius: 6px;
      }
      .timeline .element ul {
      list-style-type: square;
      padding-left: 15px;
      margin: 0;
      }
 
## 快来快来看一看
 
  得到的显示效果如下
  
[![cvex02](/cn/assets/images/r-figures/2014-03-31-jian-li-ji-shu-pai/cvex02.png)](/cn/assets/images/r-figures/2014-03-31-jian-li-ji-shu-pai/cvex02.png)
  
  这样，我们在给 HR 发送简历的时候，就可以使用 Thunderbird 的「插入 Html 」功能来实现网页版本的简历申请了。
  
[![cvex03](/cn/assets/images/r-figures/2014-03-31-jian-li-ji-shu-pai/cvex03.png)](/cn/assets/images/r-figures/2014-03-31-jian-li-ji-shu-pai/cvex03.png)
    
[![cvex04](/cn/assets/images/r-figures/2014-03-31-jian-li-ji-shu-pai/cvex04.png)](/cn/assets/images/r-figures/2014-03-31-jian-li-ji-shu-pai/cvex04.png)
  
[![cvex05](/cn/assets/images/r-figures/2014-03-31-jian-li-ji-shu-pai/cvex05.png)](/cn/assets/images/r-figures/2014-03-31-jian-li-ji-shu-pai/cvex05.png)
 
  
  
  
