#-------------------------------------------------
#
# Project created by QtCreator 2013-05-26T02:45:56
#
#-------------------------------------------------

QT       += core gui

greaterThan(QT_MAJOR_VERSION, 4): QT += widgets

TARGET = EduSol
TEMPLATE = app


SOURCES += main.cpp\
        mainwindow.cpp

HEADERS  += mainwindow.h

FORMS    += mainwindow.ui

QT += webkitwidgets

htmlsrc.path = $$OUT_PWD/html-src
htmlsrc.files = html-src/*
INSTALLS += htmlsrc
