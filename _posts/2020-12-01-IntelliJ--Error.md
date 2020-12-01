---
layout: post
title:  "IntelliJ IDEA Start Error"
date:   2020-12-01 15:30:00 -0000
categories: [IDEA]
excerpt: pycharm或其他JetBrains IDEA启动时错误
---

### Section 1
- Error
找不到libawt_xawt.so、libXrender.so、libXtst.so的问题

- Resolve
```
apt-get install libxrender-dev
apt-get install libxtst-dev
```

### Section 2
- Error

```
Caused by: java.lang.NullPointerException
        at java.desktop/sun.awt.FontConfiguration.getVersion(FontConfiguration.java:1262)
        at java.desktop/sun.awt.FontConfiguration.readFontConfigFile(FontConfiguration.java:225)
        at java.desktop/sun.awt.FontConfiguration.init(FontConfiguration.java:107)
        at java.desktop/sun.awt.X11FontManager.createFontConfiguration(X11FontManager.java:719)
        at java.desktop/sun.font.SunFontManager$2.run(SunFontManager.java:484)
        at java.base/java.security.AccessController.doPrivileged(Native Method)
        at java.desktop/sun.font.SunFontManager.<init>(SunFontManager.java:430)
        at java.desktop/sun.awt.FcFontManager.<init>(FcFontManager.java:35)
        at java.desktop/sun.awt.X11FontManager.<init>(X11FontManager.java:56)
```

- Resolve

```
apt-get install fontconfig
```
