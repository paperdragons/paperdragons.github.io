---
layout: post
title:  "ubuntu安装搜狗输入法"
categories: [Python, test1, test2]
excerpt: 下载地址在 http://pinyin.sogou.com/linux/ 根据你的系统选择32位或者64位
---

1. **从搜狗官方下载deb包**<br/>
下载地址在 [http://pinyin.sogou.com/linux/](http://pinyin.sogou.com/linux/) 根据你的系统选择32位或者64位

2. **安装下载好的安装包命令**<br/>
```sudo dpkg -i sougou_64.deb```<br/>
这里的sougou_64.deb是上一步下载的安装包文件名,根据你自己上一步的文件名来进行安装。<br/>
安装后运行命令查看安装状态<br/>
```dpkg -l | grep sogou ```<br/>

3. **若dpkg安装sogoupingyin出错**<br/>
执行```apt-get install -f```安装正确的依赖后重新安装

4. **安装成功**<br/>
在编辑器中使用```ctrl + shift```切换不同输入法
