--- 
group: web
group:
  title: 网站技术栈
  order: 1
  keywords: - 网站
            - 技术
---

## 主站
基本框架是hexo，使用哈密瓜主题（基于butterfly主题魔改的）[^1]

评论系统使用twikoo，后端数据库使用mongdb，

使用的统计如下:
| 统计      | 用途 |
| ----------- | ----------- |
| 百度统计      | 统计访客数据       |
| clary   | 热力图和访问统计        |
| cloudflare | 网站基本数据监测    |

数据图部分为echarts

部署在GitHubpages, 同时使用阿里云，fastly，jsdelivr的cdn构建内容分发网络；实测国内延时在300ms以内

**js框架为vue**

**语言为nodejs**

**支持rss**

## chatgpt站点

使用vue进行构建

>使用第三方项目部署：https://github.com/202252197/ChatGPT_JCM

部署在vercel

## 论坛
**使用flarum框架进行构建**

使用cloudflare进行加速，但是国内访问不佳

使用谷歌统计（GA4）监测访问数据

## 网盘

**使用alist项目挂载其他网盘**

**部署在render**

**后期自行添加css进行美化**

**后端数据库为supabase**

**语言为php**

使用的统计如下
|统计     |用途              |
|------------|---------------|   
| 谷歌统计   | 访问统计        |
| cloudflare | 网站基本数据监测    |

## 文档站(AKAS_LAB)
**使用vuepress进行构建**

**主题为vueprees-theme-hope**

**部署在GitHubpages**

**语言为vue**

## 我的bb站
**使用nextra构建**

**语言为nodejs**

**部署在vercel和cloudflare**

使用vercel统计访问数据，使用vercel speedinsights监测网站性能

## 博客
**使用notionnext构建**

**通过notion笔记进行实时构建**

[^1]: 网站并没有开放全部功能




