#include "mainwindow.h"
#include "ui_mainwindow.h"
#include <QWebView>
#include <QDir>
#include <QDebug>
#include <QtCore/QVariant>
#include <QtWidgets/QAction>
#include <QtWidgets/QApplication>
#include <QtWidgets/QButtonGroup>
#include <QtWidgets/QHeaderView>
#include <QtWidgets/QMainWindow>
#include <QtWidgets/QWidget>

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    if (this->objectName().isEmpty())
        this->setObjectName(QStringLiteral("MainWindow"));
    this->resize(800, 600);

    this->setWindowTitle(QApplication::translate("MainWindow", "MainWindow", 0));

    QMetaObject::connectSlotsByName(this);

    QWebView *view = new QWebView(this);
    view->load(QUrl("file:///" + QDir::currentPath() + "/html-src/EduSol.html"));
    view->adjustSize();
    view->show();
}

MainWindow::~MainWindow()
{
    delete ui;
}
