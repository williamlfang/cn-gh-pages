---
layout:   post
title:    "PDF转HTML的方法"
category: Tech
tags:   
- 简历
- PDF
- HTML
- LaTeX
description: 
published: true
status: publish
---
 
今天本来是想要给公司人力资源部发送简历，顺便做了一些调改，是以附件的PDF格式呈送的。可是那边的却通知我说公司有规定，不能在邮件里直接打开附件（有时甚至会直接被视为病毒删除掉）。因此，我只好另寻方法，既能够满足我使用*LaTeX*制作简历的极客范，又能符合公司的客观规定。
 
一来我现在使用的系统是**Linux Mint**，不存在说需要使用*Word*制作简历的可能性，而且如果真的制作了，不也是一样需要以附件形式发送嘛——如果你非得使用Word制作简历，那么到时候就只能以「复制、粘贴」的方法写到邮件正文中。可是如此以来，所有的格式都消失了，而且由于**Email**采用*Markup*格式，到时候Word复制粘贴出来的文本几乎无法被正常显示，更不要说让挑剔的人力部来阅读邮件了。二者，我前面也提到了，我极度使用一切与**TeX**相关的技术，这包括在**R**中使用*knitr*，在*Html*网页中显示由**LaTeX**生成的*pdf*文档，使用*Pandoc*转化*markdown*为pdf输出等等。
 
<!-- more -->
 
## 解决思路
 
不怕有问题，我们需要相信强大的黑客社区与开源社区。针对我今天遇到的这个问题，其实已经有人早早就提出来了，而且还写了一个小程序来实现。
 
其实想法很简单：既然不让使用附件传送PDF格式的简历，那么，我们现在换一种思路，将其转化成*markup*语言，然后在邮件正文就能够显示出来符合原来文件排版的简历内容了。这个问题放大了看，其实就是如何在浏览器中显示PDF文档。原来的解决思路是通过浏览器自带的阅读器来打开该格式的文档，比如Chrome等。然而，这对系统运行难免带来压力，有些时候Chrome打开一个PDF文件非常的卡，非常的慢。
 
由[Lu Wang](http://www.cse.ust.hk/~luwang/)开发的这个[**pdf2htmlEX**](https://github.com/coolwanglu/pdf2htmlEX)正好解决了这个问题，实现了将PDF文件**精确、无差**的转化为相应的HTML文件，整个过程支持**LaTeX**语法，尤其适用与包含了**LaTeX**数学公式的文档。
 
- 首先，我们经过**LaTeX**编译后得到了一个pdf简历。这里面既可以包括文字、图形、照片，又可以包括诸如数学公式、特殊符号在内的各种格式。
- 然后，使用*pdf2htmlEX*，实现「无缝对接」，得到了一个html文件。
- 之后，我们便可以像对待其他html格式文件一样的，乐趣所需。
 
## 安装方法
 
在Linux中有两种安装方法，一种是直接在终端输入命令语句安装，另一种是自己按照各种依赖包一路安装到底。前者简单适用，后者过于复杂。我这里介绍如何使用前一种方法安装**pdf2htmlEX**。
 
    sudo apt-add-repository ppa:coolwanglu/pdf2htmlex
    sudo apt-get update
    sudo apt-get install pdf2htmlex
 
 安装成功后，我们可以查看一下相应的版本
 
    sudo pdfhtmlex --version
    
  同时，可以查看使用手册
  
    pdf2htmlEX –help
    man pdf2htmlEX
    
[![pdf2htmlEX01](/cn/assets/images/r-figures/2014-03-30-pdf-zhuan-html-de-fang-fa/pdf2htmlEX01.png)](/cn/assets/images/r-figures/2014-03-30-pdf-zhuan-html-de-fang-fa/pdf2htmlEX01.png)
 
 
## 使用
 
现在，「万事具备」，只需要一个命令就可以实现：
 
    pdf2htmlEX “test.pdf”
    
    
    
    
 
 
 
 
 
 
 
 
 
 
 
