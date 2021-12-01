# VMAClubSystem (开发阶段)

# 1 快速开始

## 1.1 准备工作

1. 安装node.js, 并确在系统环境变量中

2. 一个编译器, 或者如果你是勇士, 也可以挑战txt写代码

3. 运行【./Develop/server/@InitializeServer.bat】以初始化运行环境,  或在【./Develop/server】路径下者手动在【Git Bash】或【CMD】下输入这几行命令

   ```dos
   // 必须已经安装好node
   // 以下几行请顺序执行
   
   npm i -g nodemon
   npm init -y
   npm i -g cnpm -registry=https://registry.npm.taobao.org
   cnpm i express mysql --save dev
   ```

4. 运行【./Develop/server/@RunServer.bat】以运行服务器, 或在【./Develop/server】路径下手动在【Git Bash】或【CMD】下输入条命令

   ```dos
   nodemon app.js
   ```

## 1.2 访问

完成1.1.4后，将可以在[http://127.0.0.1:8080](http://127.0.0.1:8080)访问此项目

/*1111111111*/


May
Allan Wei
