[TOC]

# Git

## 初始化Git仓储/(仓库)
- 这个仓库会存放，git对我们项目代码进行备份的文件
- 在项目目录右键打开 git bash
- 命令: `git init`


## 自报家门
- 就是在git中设置当前使用的用户是谁
- 每一次备份都会把当前备份者的信息存储起来
- 命令: 
    + 配置用户名:`git config --global user.name "xiaoming"`
    + 配置邮箱:  `git config --global user.email "xm@sina.com"`


## 把代码存储到.git仓储中
- 1.把代码放到仓储的门口
    + `git add ./readme.md` 所指定的文件放到大门口
    + `git add ./` 把所有的修改的文件添加到大门口
- 2.把仓储门口的代码放到里面的房间中去
    + `git commit -m "这是对这次添加的东西的说明" `

## 可以一次性把我们修改的代码放到房间里(版本库)
- `git commit --all -m "一些说明"`
    + --all 表示是把所有修改的文件提交到版本库

## 查看当前的状态
- 可以用来查看当前代码有没有被放到仓储中去
- 命令: `git status`

## git中的忽略文件
- 命令:touch.gitignore 创建忽略文件
- .gitignore,在这个文件中可以设置要被忽略的文件或者目录。
- 被忽略的文件不会被提交仓储里去.
- 在.gitignore中可以书写要被忽略的文件的路径，以/开头，
    一行写一个路径，这些路径所对应的文件都会被忽略，
    不会被提交到仓储中
    + 写法
        * ` /.idea  ` 会忽略.idea文件
        * ` /js`      会忽略js目录里的所有文件
        * ` /js/*.js` 会忽略js目录下所有js文件

## 查看日志
- `git log` 查看历史提交的日志
- `git log --oneline` 可以看到简洁版的日志

## 回退到指定的版本
- `git reset --hard Head~0`
    + 表示回退到上一次代码提交时的状态
- `git reset --hard Head~1`
    + 表示回退到上上次代码提交时的状态

- `git reset --hard [版本号]`
    + 可以通过版本号精确的回退到某一次提交时的状态

- `git reflog`
  + 可以看到每一次切换版本的记录:可以看到所有提交的版本号

## 分支
- 默认是有一个主分支master

## 创建分支
- `git branch dev`
    + 创建了一个dev分支
    + 在刚创建时dev分支里的东西和master分支里的东西是一样的

## 切换分支
- `git checkout dev`
    + 切换到指定的分支,这里的切换到名为dev的分支
    `git branch` 可以查看当前有哪些分支


## 合并分支
- `git merge dev`
    + 合并分支内容,把当前分支与指定的分支(dev),进行合并
    + 当前分支指的是`git branch`命令输出的前面有*号的分支
- 合并时如果有冲突，需要手动去处理，处理后还需要再提交一次.

## GitHub 
- https://github.com
- 不是git,只是一个网站
- 只不过这个网站提供了允许别通过git上传代码的功能

## 提交代码到github(当作git服务器来用)
- `git push [地址] master`
 > 示例: `git push https://github.com/huoqishi/test112.git master  master`<br>
  会把当前分支的内容上传到远程的master分支上

- `git pull [地址] master`
 + 示例: `git pull https://github.com/huoqishi/test112.git master`
 > 会把远程分支的数据得到:(*注意本地-要初始一个仓储!*)

- `git clone [地址]`
>会得到远程仓储相同的数据,如果多次执行会覆盖本地内容。

## git和svn的区别

- git：分布式版本控制系统；
- svn: 集中式版本控制系统；

## ssh方式上传代码
- 公钥 私钥,两者之间是有关联的。
- 生成公钥,和私钥
    + `ssh-keygen -t rsa -C "xiaoming@sina.com"`

## 在push和pull操作进
- 先pull , 再push

- 当我们在push时，加上-u参数，那么在下一次push时
  我们只需要写上`git push`就能上传我们的代码。(加上-u之后，git会把
  当前分支与远程的指定的分支进行关联。git push origin master)

# 2.0 npm

## npm
- node package manager
- 管理项目的依赖包
- 可以用来下载我们需要使用的东西
- 安装后可以通过`npm -v` 查看版本

## npm 使用
- 1.初始化操作
    + `npm init` 会生成一个package.json文件
- 2.下载所需要的包
    + `npm install jquery`  下载jquery
    + 会去 registry.npmjs.org 这个地址下载jquery
    + 会生成一个node_modules目录，下载的内容就放在这个目录

- 3.下载包时，可以加上 `--save` 参数
    + `npm install jquery --save`, 下载之后会在package.json中添加
    当前下载的包的版本信息。

## npm 常用命令
- less转换： 

    - //下面命令是安装less，注意一定要有-g，否则还得做些其他工作<br>
         **npm install less -g**
    - //下面命令用于安装css压缩插件<br>
**npm install less-plugin-clean-css**
安装完成后就可以使用lessc的命令了

    - //下面命令编译less文件生成css <br>
        lessc d:\styles.less d:\styles.css
    - //下面命令启用css压缩插件，生成压缩后的css文件 <br>
        lessc d:\styles.less d:\styles.min.css -clean-css

- md转带目录的html文件转换：
    - 第一步 npm install -g i5ting_toc //在npm命令窗口全局下载i5ting_toc</br>
    - 第二步 在md文档路径下开启npm命令窗口，输入命令 **i5ting_toc -f 文件名.md**，就可以转换了



# 3.0 gulp

## 5个核心方法
 - gulp.task('任务名',function(){}) // 创建任务。
 - gulp.src('./*.css') 指定想要处理的文件
 - gulp.dest() // 指定最终处理后的文件的存放路径
 - gulp.watch() // 自动的监视文件的变化，然后执行相应任务。
 - gulp.run('任务名')，直接执行相应的任务。


## 安装gulp
- 通过npm安装:`npm install gulp-cli -g`

## gulp使用
- 1.在当前项目中也要安装gulp: `npm install gulp --save`
- 2.还需要在当前项目中新建一个文件: gulpfile.js

```javascript
    var gulp =  require('gulp');

    // 创建任务
    // 第一个参数: 任务名
    // 第二个参数: 回调函数,当我们执行任务时就会执行这个函数
    gulp.task('test', function(){
      console.log(123)
})
```
- 3.执行任务: `gulp 任务名`
    + 示例: `gulp test`

## 对js进行压缩
- `npm install gulp-uglify --save`

## 对js进行合并操作
- `npm install gulp-concat --save`

```javascript
    gulp.task('script', function(){
  // 1.要匹配到要处理的文件
  // 指定指定的文件:参数是匹配的规则
  // 参数也可以是数组，数组中的元素就是匹配的规则
  gulp.src(['./app.js','./sign.js'])
  // concat 的参数是合并之后的文件名字
  .pipe(concat('index.js'))
  .pipe(uglify())
  // dest方法参数，指定输出文件的路径
  .pipe(gulp.dest('./dist'))
})
```

## 对css进行压缩操作
- `npm install gulp-cssnano --save`

```javascript
   // 新建一个任务，对css进行处理
gulp.task('style', function(){
  // 对项目中的2个css文件进行合并，压缩操作
  // 1.匹配到要处理的文件
  gulp.src(['./*.css'])
  // 2.合并文件
  .pipe(concat('index.css'))
  // 3.压缩操作
  .pipe(cssnano())
  // 4.输出到指定目录
  .pipe(gulp.dest('./dist'))
  })
```

## 对html进行压缩
- `npm install gulp-htmlmin --save`
- https://github.com/kangax/html-minifier

```javascript
    // 新建一个任务，对html进行压缩
gulp.task('html', function(){
 // 1.匹配到要处理的文件
 gulp.src(['./index.html'])
 // 2.压缩操作
 .pipe(htmlmin({collapseWhitespace:true}))
 // 3.指定输出目录
 .pipe(gulp.dest('./dist'))
})
```

## gulp.watch
- 监视文件的变化，然后执行相应的任务
- gulp.run, 直接执行指定的任务

```javascript
    // gulp.watch 监视文件变化，执行相应任务
  gulp.task('mywatch', function(){
  // 执行指定的任务
  gulp.run('script')
  // 1.监视js文件的变化，然后执行script任务
  // 第一个参数：要监视的文件的规则
  // 第二个参数：是要执行的任务
  gulp.watch(['./app.js','sign.js'],['script'])
})
```


# 4.0 npm


## 4.1 npm全局安装,本地安装的区别
1. 全局安装:平时用于命令行工具(位于node.js环境的node_modules的文件夹下);
2. 本地安装:开发使用
    + 在当前目录下的node_modules里面,**一般用于实际的开发工作**

## 4.2 npm常用命令
> 如果不加`--save`/`-dev` 的话 有可能不会保存到`package.json`
1. 安装包 <br>
    npm install -g 包名称<br>
    npm install 包名称
2. 安装特定版本<br>
    npm install -g 包名称@版本号<br>
3. 卸载包 <br>
    npm uninstall -g 包名称
4. 更新包<br>
    npm update -g 包名称

## 4.3 本地包的使用步骤
1. `npm init -y` <br>
    生成package.json文件

## 4.4 demo.js文件执行的两种方式
1. `node demo.js` <br>
2. npm run test
    + 此处要在`package.json`配置
    `"scripts": {"test": "node demo.js"}`

## 4.5 开发环境与生产环境
### 01-开发环境 --save -dev
> 只在开发的时候用
### 02-生产环境 --save
> 开发和项目部署上线后的服务器环境都需要的包
- `npm intall --production`  
    +  生产环境命令,只会安装`dependencies`中的包

## 解决npm安装包被墙的问题
- 方案一： --registry
    + npm config set registry=https//registry.npm.taobao.org 
- 方案二： cnpm
    + 淘宝NPM镜像,与官方NPM的同步频率目前为10分钟一次 
    + 官网: http://npm.taobao.org/ 
    + npm install -g cnpm –registry=https//registry.npm.taobao.org 
    + 使用cnpm安装包: cnpm install 包名
- 方案三： nrm
    + 作用：修改镜像源 
    + 项目地址：https://www.npmjs.com/package/nrm 
    + 安装：npm install -g nrm
  
# 五、yarn

## 5.1 安装yarn 
- npm install -g yarn

## 5.2 基本命令以及与npm使用的区别
1.初始化包
- npm init
- yarn inti
2.安装包
- `npm install xxx --save`
- `yarn add xxx`
3.移除包
- `npm uninstall xxx`
- `yarn remove xxx`
4.更新包
- `npm update xxx`
- `yarn upgrade xxx`
5.安装开发依赖的包
- `npm install xxx --save-dev`
- `yarn add xxx --dev`
6.全局安装
- `npm install -g xxx`
- `yarn global add xxx`
7.设置镜像地址 
- `npm config set registry url`
- `yarn config set registry url`
8.安装所有依赖
- `npm install`
- `yarn install`
9.执行包
- `npm run`
- `yarn run`