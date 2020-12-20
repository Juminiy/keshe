# 演示地址 ： http://keshe.hualingnan.xyz
# 数据结构课设
## githubpage部署  
## 1. 数据结构 ：了解算法的内涵实质，如何建立，如何销毁，这种数据结构在内存中是什么样的？
## 2. 算法 ：算法也就是处理数据的逻辑部分的代码，这部分javascript和C++和Java等类C语言基本没有的区别（包括指针：在js中为对象引用；还有AVL树的旋转和大根堆的筛选等算法）；js虽然使用了伪类，依然是面向对象的思想
## 3. 可视化 ：能让自己的算法运行出来，并能解决一些题目；而且可以呈现出来，成为一个可视化的东西，易于理解。 
# 项目包涵 
## 1. 浏览器客户端 ： 前端静态HTML+动态javascript全局渲染 jQuery.Ajax发送http请求;
## 2. 服务端 : backend接收http请求 ，数据存储至 中间件-redis 并且内存持久化 ；httpRequest 返回结果前端查询结果
## 3. 前端代码完全开源，分为html静态部分和cdn加速的jsdelivr部分，后端代码没有开源；请求接受和发送信息用json传输，序列化到负载{payload}中，后端解释语言php和java都可，[后端地址](https://authorize.hulingnan.site:8124)
## 4. CDN加速了.js/.css文件,[cdn加速地址](https://cdn.jsdelivr.net/gh/Juminiy/jscdn@master) ; 阿里云oss对象存储,加速图片:[aliyun.oss](https://juminiyrepo.oss-cn-beijing.aliyuncs.com )
## 5. 项目clone到本地不能正常渲染 , 因为我在html/css文件中加了防盗链 ,js完全渲染不能生效 ，js组件的部分逻辑代码在[另一个仓库](https://github.com/Juminiy/jscdn) 。如果需要部署并扩充源码, 请联系我 :
### QQ : 2285151098 , TEL : +86 15214590701 , WeChat : Hln15214590701
