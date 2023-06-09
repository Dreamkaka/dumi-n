import {
  GithubOutlined,
  HistoryOutlined,
  IssuesCloseOutlined,
  MediumOutlined,
  QqCircleFilled,
  TwitterOutlined,
  WeiboCircleFilled,
  ZhihuOutlined,
} from '@ant-design/icons';
import { Link } from 'dumi';
import { FooterColumn, FooterColumnItem } from 'rc-footer/es/column';

interface GetColumnParams {
  github?: string;
}
export const getColumns = ({ github }: GetColumnParams) => {
  const resources: FooterColumn = {
    title: '其他网站',
    items: [
      {
        title: '主站',
        url: 'https://dreamkaka.github.io',
        openExternal: true,
      },
      {
        title: 'chatgpt对话站点',
        url: 'https://chatgpt-xiaohan.vercel.app/',
        description: '自备apikey',
        openExternal: true,
      },
      {
        title: '论坛',
        url: 'https://aitagerflarum.flarum.cloud/',
        openExternal: true,
      },
      {
        title: '网盘',
        description: '存模板的网盘',
        url: 'https://umijs.org',
        openExternal: true,
      },
      {
        title: 'akas-lab',
        description: 'akas文档教程站',
        url: 'https://hmxhkaka.githb.io',
        openExternal: true,
      },

    ],
  };
  const community: FooterColumn = {
    title: '联系我',
    items: [
      {
        icon: <WeiboCircleFilled />,
        title: '微博',
        url: 'https://weibo.com/u/7819559836',
        openExternal: true,
      },
      {
        icon: <TwitterOutlined style={{ color: '#1DA1F2' }} />,
        title: 'Twitter',
        url: 'http://twitter.com/Dreamkaka3',
        openExternal: true,
      },
      {
        icon: <ZhihuOutlined style={{ color: '#056de8' }} />,
        title: '知乎',
        url: 'https://www.zhihu.com/people/Dreamkaka',
        openExternal: true,
      },
      {
        icon: <QqCircleFilled style={{ color: '#056de8' }} />,
        title: 'QQ群',
        url: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=yhcnRGyGfDuEvjMnUOQ7qrJc8tp10OH9&authKey=egy8fsJpwZgnGqfl39D%2F1gGmUzJ5PzvHZvULQYDN7sHazg0NNKweljEkiwo3eGJ0&noverify=0&group_code=719362953',
        openExternal: true,
      },
    ],
  };

  const more: FooterColumn = {
    title: '友链',
    items: [
      {
        title: 'CHATGPT交流群',
        url: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=-9agVLDaxBoRiVZJEKmABqirGWPwokR_&authKey=fxy211m3%2F%2BXSN7%2FWNsJ9YtCAU5051W8NBiI13SGYDC%2BQTT1va%2FtK5yqLHPFCIPwx&noverify=0&group_code=732320200',
        description: '加入交流群',
        openExternal: true,
      },

    ],
  };

  const help: FooterColumn = {
    title: '网站',
    items: [
      github
        ? {
            icon: <GithubOutlined />,
            title: 'GitHub',
            description: '主题GitHub仓库',
            url: 'https://github.com/arvinxx/dumi-theme-antd-style',
            openExternal: true,
          }
        : undefined,
      {
        icon: <HistoryOutlined />,
        title: '更新日志',
        url: '/changelog',
        LinkComponent: Link,
        openExternal: true,
      },
      {
        title: '网站状态',
        url: 'https://akas-status.zeabur.app/'
      }
    ].filter(Boolean) as FooterColumnItem[],
  };
  return [resources, community, help, more];
};
