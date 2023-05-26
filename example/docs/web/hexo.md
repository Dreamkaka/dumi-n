---
group: web
group:
  title: 网站技术栈
  order: 2
  keywords: - 网站
            - 技术
---
## 基本框架
基本框架hexo，不多说，主题是猕猴桃主题，提前预留好了接口后期方便爆改

## 评论区
首先是评论区系统的实现，使用twikoo系统，需要数据库作为后端存储，数据库类型为mongdb

1. 首先是mongdb数据库，访问网址https://www.mongodb.com/zh-cn/pricing 进行注册，
2. 创建免费 MongoDB 数据库，区域推荐选择 AWS / N. Virginia (us-east-1)
3. 在 Clusters 页面点击 CONNECT，按步骤设置允许所有 IP 地址的连接[^1]
4. 创建数据库用户，并记录数据库连接字符串，请将连接字符串中的 <password> 修改为数据库密码
5. 注册vercel账户，你也可以在下面一键部署的时候注册

之后打开https://twikoo.js.org/quick-start.html#vercel-%E9%83%A8%E7%BD%B2选择vercel平台进行一键部署，也可以使用zebur或者其他平台；一般来说第一次都是失败的，不用慌，跟着下面走

1. 进入 Settings - Environment Variables，添加环境变量 MONGODB_URI，值为上面的的数据库连接字符串
2. 进入 Deployments , 然后在任意一项后面点击更多（三个点） , 然后点击Redeploy , 最后点击下面的Redeploy进行重新部署
3. 进入 Overview，点击 Domains 下方的链接，如果环境配置正确，可以看到 “Twikoo 云函数运行正常” 的提示
4. Vercel Domains（包含 https:// 前缀，例如 https://xxx.vercel.app）即为您的环境 id

:::warning
这是我的部署过程，如果你需要使用其他平台请参考twikoo的文档https://twikoo.js.org/quick-start.html
:::

>具体步骤引用自：https://twikoo.js.org/quick-start.html#vercel-%E9%83%A8%E7%BD%B2

## 首页ip访问

使用腾讯地图api进行调用

懒得搬了，https://ichika.cc/Article/beautiful_IPLocation/ 自己看吧

基本就是这些了，摆烂

[^1]:因为vercel使用的是动态ip，每次连接的ip都不一样所以就需要放行全部ip，其他平台请根据平台的文档进行取舍或者也一样全部放开。

