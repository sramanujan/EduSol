EduSol
======

EduSol Repository (Open Source for now)

All html files are inside the html-src folder. These are the main files.

The deployments (Desktop, Android etc.) will only simulate a WebView to display these html files - tightly coupled with JS.

Desktop deployment must consist of Linux, Win32, OS X. The source will be cross platform, driven by qt-creator (C++ with QT).
=> Please import the .pro file in qt-creator, but do not use existing .pro.user file! The .pro.user files are not common across platforms.
=> The html-src folder inside src folder is a symlink so that source is not duplicated, however on deploy (make install), the html-src is COPIED to the appropriate bin-* folder.

Android deployment is a separate Java project created using Eclipse.
=> html-src in assets folder is a symlink so that source is not duplicated, however on deploy, the same is tightly packaged into the .apk.

IOS - No plans for this one yet.

Web - This will simple be a static server serving the html pages with ads / contact / forums. Will be in use once webserver is up and running with a dns.
