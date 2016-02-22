---
layout: post
title:  "ubuntu server使用pycharm中文显示和中文输入"
categories: Python
excerpt: 由于安装的是server版所以没有桌面，需要通过xwing实现ubuntu X11转发到windows显示IDE界面
---

* content
{:toc}

## pycharm启动

由于安装的是server版所以没有桌面，需要通过xwing实现ubuntu X11转发到windows显示IDE界面。<br/>
在启动pycharm.sh会出现<br/>
```fatal error: X11/extensions/Xrender.h: No such file or directory```<br/>
执行 <br/>
```sudo apt-get install libxrender-dev```<br/>
若出现 <br/>
```fatal error: X11/extensions/XTest.h: No such file or directory```<br/>
执行<br/>
```sudo apt-get install libxtst-dev```

## 中文显示
虚拟机安装的是ubuntu14.04 server选择语言en_US，系统本身不包含中文语言包和字体，所以安装pycharm后在IDE中显示中文“口口口口”无法识别。

**解决办法：**<br/>
运行命令<br/>
```sudo apt-get install fonts-arphic-uming```<br/>
也可以安装其他中文字体后就可以正确显示中文

## 中文输入

 1. 首先需要在server中安装fcitx<br/>
 运行```sudo apt-get install fcitx fcitx-pinyin```
 
 2. 执行im-config先择fcitx输入框架
 3. 执行```export XMODIFIERS=@im=fctix```并执行fctix，fctix运行时若出现
```/bin/dbus-launch terminated abnormally without any error message```
则需要安装D-Bus，执行```sudo apt-get install dbus-x11```
 4. 执行fctix-config-gtk3新增Pingyin输入法到输入方法中并修改ctrl+blank快捷键为shift+blank避免与window冲突
 5. 运行pycharm.sh，在IDE中按shift+blank就可以切换到拼音输入法
 
 注：每次重启后都需要```export XMODIFIERS=@im=fctix```和执行fctix，可以将这2个命令写到shell脚本中避免每次运行。
 
 ![这里写图片描述](http://img.blog.csdn.net/20160121005250781)
 