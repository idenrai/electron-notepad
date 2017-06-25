/**
 * main.js
 **/
'use strict';
const {app, BrowserWindow} = require('electron');
let mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 550, height: 410});
  mainWindow.loadURL('file://' + __dirname + '/app/view/index.html');
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
