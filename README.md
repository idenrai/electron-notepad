# Electron-Memo

Qiitaで作成してた投稿の実習部分をGithubにも載せてみた。

-   [初めてのElectron](http://qiita.com/YoungjaeKwon/items/9a51dcc45533b2c52955)

### 稼働方法

##### 準備

-   electron-prebuilt Global DL
    `npm i -g electron-prebuilt`

-   electron-packager Global DL
    `npm i -g electron-packager`

-   grunt-cli Global Dl
    `npm i -g grunt-cli`

##### 稼働

-   他のnode modules DL
    `npm install`

-   GruntをDefaultで実行
    `grunt`

-   動作確認
    `electron <project_folder_name>`

    -   ex) `electron memo/`

-   Packaging
    `electron-packager ./<project_folder_name> <package_name> --platform=all --arch=all`
    -   ex) `electron-packager ./memo memoMK2 --platform=win32 --arch=x64`
