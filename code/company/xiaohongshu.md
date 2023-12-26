<a name="fzhfe"></a>
## 一面
<a name="FfiAg"></a>
### 动态表单的实现
<a name="SCDf1"></a>
### 权限的控制
<a name="Bsl93"></a>
### 你们项目一般是如何做缓存的

- 对于一些没有指纹信息的资源，例如index.html可以使用Cache-Control: no-cache开启协商缓存
- 对于带有指纹信息的资源，一般会使用splitChunksPlugin进行代码分割，来保证造成最小范围的缓存失效，再设置Cache-Control: max-age=3153600
- 不需要缓存的资源设置Cache-Control: no-store，即不强缓存也不进行协商缓存
<a name="FqWBP"></a>
### 项目中的环境变量是如何控制的？
有两种方式：

- Shell语句中指定--mode
- webpack.config.js中指定mode
<a name="sziEa"></a>
### 假设有两个子项目，他们需要共用同一个用户体系如何保证关掉页面之后打开另一个项目用户还是登录状态？
Cookie跨站点访问就可以解决。把用户每次登录获取到的Token存储在Cookie中，因为Cookie是可以同站传输的。<br />(反正面试官点头了，我也不知道对不对)
<a name="R8kch"></a>
### 项目如何优化
业务层面<br />打包层面
<a name="DWpwx"></a>
### 首屏加载优化
(白屏时间是指浏览器从响应用户输入网址地址，到浏览器开始显示内容的时间。首屏时间是指浏览器从响应用户输入网址地址，到首屏内容渲染完成的时间，此时整个网页不一定要全部渲染完成，但在当前视窗的内容需要。白屏时间是首屏时间的一个子集。)

- CDN分发
- HTTP缓存方案：强缓存+hash文件
- 前端做好缓存方案，例如存储在内存(即保存变量)，另一个存储在LocalStorage
- 前端的动态资源加载：路由动态加载、组件动态加载
- 利用好async和defer两个属性
- 页面使用骨架屏
- 使用SSR渲染
- 利用好HTTP压缩，比如指定Content-Encoding首部字段为gzip
<a name="aJOVA"></a>
### SSR的使用场景
由于提到了SSR，但是在项目中没有用，不过面试官还是问了我它的使用场景。<br />很多网站是出于效益(seo)的考虑才启用服务端渲染，性能倒是在其次。
<a name="Ybg2q"></a>
### EventLoop
必问...
<a name="ytorN"></a>
### requestAnimationFrame属于宏任务还是微任务
它不属于宏任务也不属于微任务，因为它是独立于主线程之外的任务，不归主线程管。
<a name="aaxVd"></a>
### 输入URL到页面的呈现
必问...
<a name="qYWzz"></a>
### script与css还有页面的渲染顺序
首先对于script标签正常情况下它会阻塞浏览器，必须得等script标签加载并执行完里面的脚本代码才能去做其他的事情，渲染线程(GUI)和js引擎线程互斥。<br />而css是由单独的下载线程异步下载的，由于DOM树的解析和构建这一步与css并没有关系，所以它并不会影响DOM的解析。不过最终的布局树是需要DOM树和DOM样式的，因此它会阻塞布局树的建立。
<a name="ZK3LK"></a>
### script标签的async是什么时候加载的
async 模式下，JS 不会阻塞浏览器做任何其它的事情。它的加载是异步的，当它加载结束，JS 脚本会立即执行。
<a name="d9huz"></a>
### 说一下==数据类型转换吧
当使用==进行比较的时候，会有以下转换规则（判断规则）：

1. 两边类型如果相同，值相等则相等，如 2 == 3肯定是为false的了
2. 比较的双方都为基本数据类型：
- 若是一方为null、undefined，则另一方必须为null或者undefined才为true，也就是null == undefined为true或者null == null为true，因为undefined派生于null
- 其中一方为String，是的话则把String转为Number再来比较
- 其中一方为Boolean，是的话则将Boolean转为Number再来比较
1. 比较的一方有引用类型：
- 将引用类型遵循类似ToNumber的转换形式来进行比较(也就是toPrimitive(obj, 'defalut')
- 两方都为引用类型，则判断它们是不是指向同一个对象

(具体可以看我的这篇文章呀：[【精】从206个console.log()完全弄懂数据类型转换的前世今生(下)(opens new window)](https://juejin.im/post/5e86e73e518825739e0704b4#heading-24))
<a name="XUEkS"></a>
### 说一下Vue的diff算法
简单来说，diff算法有以下过程

- 先同级比较再比较子节点
- 先判断一方有子节点和一方没有子节点的情况。如果新的一方有子节点，旧的一方没有，相当于新的子节点替代了原来没有的节点；同理，如果新的一方没有子节点，旧的一方有，相当于要把老的节点删除。
- 再来比较都有子节点的情况，这里是diff的核心。首先会通过判断两个节点的key、tag、isComment、data同时定义或不定义以及当标签类型为input的时候type相不相同来确定两个节点是不是相同的节点，如果不是的话就将新节点替换旧节点。
- 如果是相同节点的话才会进入到patchVNode阶段。在这个阶段核心是采用双端比较的算法，同时从新旧节点的两端进行比较，在这个过程中，会用到模版编译时的静态标记配合key来跳过对比静态节点，如果不是的话再进行其它的比较。

Vue3.x借鉴了ivi算法和inferno算法。<br />它在创建VNode的时候就确定了其类型，以及在mount/patch的过程中采用位运算来判断一个VNode的类型，在这个基础之上再配合核心的Diff算法，使得性能上较Vue2.x有了提升。
<a name="PHOWm"></a>
### diff算法的缺点
因为采用的是同级比较，所以如果发现本级的节点不同的话就会将新节点之间替换旧节点，不会再去比较其下的子节点是否有相同。
<a name="xcTtc"></a>
## 二面
<a name="x9xvd"></a>
### 说下你们项目的亮点

- 动态表单表格，它核心的价值在于解决了不同业务产生的差异化和个性化，让我们的作业效率有了很大的提升，这一点不仅仅是对于使用者，也同样提高了我们开发人员的效率。使得一份表单在不同的阶段，也就是生命周期能够呈现不同的内容。
- 另一点就是工作流，因为一个进件(也就是订单)它是如何审批，由谁审批，这些流程是如何走下去的，这点在盘石系统中都能来进行一个配置。
<a name="R7H6l"></a>
### 你们的UI组件库怎么实现按需引入的呢？
(这里的按需引入的意思是，对于一些基础的组件，暴露给父级时，如果父级没有用到它就不引入进来)<br />可以写一个方法，判断传入进来的数据中用到了哪些类型的基础组件，只对用到的基础组件进行一个引入。
<a name="mxdQ3"></a>
### Webpack打包原理
(回答参考：[「吐血整理」再来一打Webpack面试题(持续更新)(opens new window)](https://juejin.im/post/5e6f4b4e6fb9a07cd443d4a5#heading-3))<br />初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数<br />开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译<br />确定入口：根据配置中的 entry 找出所有的入口文件<br />编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理<br />完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系<br />输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会<br />输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统
<a name="WZRra"></a>
### Webpack打包有哪些优化
参考文章： https://juejin.im/post/5ea528496fb9a03c576cceac#heading-2

- 先使用webpack-bundle-analyzer分析打包后整个项目中的体积结构，既可以看到项目中用到的所有第三方包，又能看到各个模块在整个项目中的占比。
- Vue路由懒加载，使用() => import(xxx.vue)形式，打包会根据路由自动拆分打包。
- 第三方库按需加载，例如lodash库、UI组件库
- 使用purgecss-webpack-plugin和glob插件去除无用样式(glob插件可以可以同步查找目录下的任意文件夹下的任意文件)：
```
new PurgecssWebpackPlugin({
    // paths表示指定要去解析的文件名数组路径
    // Purgecss会去解析这些文件然后把无用的样式移除
    paths: glob.sync('./src/**/*', {nodir: true})
    // glob.sync同步查找src目录下的任意文件夹下的任意文件
    // 返回一个数组，如['真实路径/src/css/style.css','真实路径/src/index.js',...]
})


```

- 文件解析优化：
   - babel-loader编译慢，可以通过配置exclude来去除一些不需要编译的文件夹，还可以通过设置cacheDirectory开启缓存，转译的结果会被缓存到文件系统中
   - 文件解析优化：通过配置resolve选项中的alias。alias创建import或者require的别名，加快webpack查找速度。
- 使用webpack自带插件IgnorePlugin忽略moment目录下的locale文件夹使打包后体积减少278k
   - 问题原因：使用moment时发现会把整个locale语言包都打包进去导致打包体积过大，但是我们只需要用到中文包
   - 在webpack配置中使用webpack自带的插件IgnorePlugin忽略moment目录下的locale文件夹
   - 之后在项目中引入：
```
// index.js
// 利用IgnorePlugin把只需要的语言包导入使用就可以了，省去了一下子打包整个语言包
import moment from 'moment';
// 单独导入中文语言包
import 'moment/locale/zh-cn';

```

- 使用splitChunks进行拆包，抽离公共模块，一些常用配置项：
- chunks:表示选择哪些 chunks 进行分割，可选值有：async，initial和all
   - minSize: 表示新分离出的chunk必须大于等于minSize，默认为30000，约30kb
   - minChunks: 表示一个模块至少应被minChunks个chunk所包含才能分割，默认为1
   - name: 设置chunk的文件名
   - cacheGroups: 可以配置多个组，每个组根据test设置条件，符合test条件的模块，就分配到该组。模块可以被多个组引用，但最终会根据priority来决定打包到哪个组中。默认将所有来自 node_modules目录的模块打包至vendors组，将两个以上的chunk所共享的模块打包至default组。
- DllPlugin动态链接库，将第三方库的代码和业务代码抽离：
   - 根目录下创建一个webpack.dll.js文件用来打包出dll文件。并在package.json中配置dll指令生成dll文件夹，里面就会有manifest.json以及生成的xxx.dll.js文件
   - 将打包的dll通过add-asset-html-webpack-plugin添加到html中，再通过DllReferencePlugin把dll引用到需要编译的依赖。
<a name="F435z"></a>
### HTTP/2对比HTTP/1.1

- 使用HPACK算法进行头部压缩，HTTP/2 当中废除了起始行的概念，将起始行中的请求方法、URI、状态码转换成了头字段，不过这些字段都有一个":"前缀，用来和其它请求头区分开。
- 使用二进制分帧解决了HTTP层面的队头阻塞，即多个请求都通过一个TCP连接并发地完成，实现多路复用。
- 服务器推送。服务器不再是完全被动地接收请求，响应请求，它也能新建 stream 来给客户端发送消息
- 新的二进制格式。HTTP/2采用二进制格式传输数据，相比于HTTP/1.1的文本格式，二进制格式具有更好的解析性和拓展性。
<a name="lUzJz"></a>
### 怎样看待你做的这几个项目呢
还有挺多问题的...当时脑子有点糊，面完后都忘了...
<a name="VFvml"></a>
## 三面
<a name="d9c8I"></a>
### 项目亮点
<a name="fvz18"></a>
### 你在项目里负责什么
<a name="s98S7"></a>
### 项目难点
<a name="ZBteq"></a>
### 你的优点
<a name="RwgYg"></a>
### 还有什么想要问的吗？
项目负责人主要都是问一些项目相关的问题，还有你自身的一些问题。
<a name="lhLox"></a>
## HR面
<a name="ySAh5"></a>
### 非技术的自我介绍
<a name="PpE6G"></a>
### 住哪里？
<a name="wrumv"></a>
### 工作之余的爱好
其它的就是上家公司薪资、期望薪资、还有什么想要了解的之类的...
