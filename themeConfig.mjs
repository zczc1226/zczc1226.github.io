// 主题配置
export const themeConfig = {
  // 站点信息
  siteMeta: {
    // 站点标题
    title: "zczc's blog",
    // 站点描述
    description: "基于 vitepress-theme-curve 搭建的 github pages 站点",
    // 站点logo
    logo: "/images/logo/logo.webp",
    // 站点地址
    site: "https://zczc1226.github.io",
    // 语言
    lang: "zh-CN",
    // 作者
    author: {
      name: "雨天狂奔",
      cover: "/images/logo/logo.webp",
      email: "admin@24811213.xyz",
      link: "https://daoyi.hidns.vip/#/",
    },
  },
  // 备案信息
  icp: "鄂ICP备202411-001号",
  // 建站日期
  since: "2025-7-26",
  // 每页文章数据
  postSize: 8,
  // inject
  inject: {
    // 头部
    // https://vitepress.dev/zh/reference/site-config#head
    header: [
      // favicon
      ["link", { rel: "icon", href: "/favicon.ico" }],
      // RSS
      [
        "link",
        {
          rel: "alternate",
          type: "application/rss+xml",
          title: "RSS",
          href: "https://blog2.811520.xyz/rss.xml",
        },
      ],
      // 预载 CDN
      [
        "link",
        {
          crossorigin: "",
          rel: "preconnect",
          href: "https://s1.hdslb.com",
        },
      ],
      [
        "link",
        {
          crossorigin: "",
          rel: "preconnect",
          href: "https://mirrors.sustech.edu.cn",
        },
      ],
      // HarmonyOS font
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://s1.hdslb.com/bfs/static/jinkela/long/font/regular.css",
        },
      ],
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/lxgw-wenkai-screen-webfont/1.7.0/style.css",
        },
      ],
      // iconfont
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://cdn2.codesign.qq.com/icons/g5ZpEgx3z4VO6j2/latest/iconfont.css",
        },
      ],
      // Embed code
      ["link", { rel: "preconnect", href: "https://use.sevencdn.com" }],
      ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
      [
        "link",
        {
          crossorigin: "anonymous",
          href: "https://use.sevencdn.com/css2?family=Fira+Code:wght@300..700&display=swap",
          rel: "stylesheet",
        },
      ],
      // 预载 DocSearch
      [
        "link",
        {
          href: "https://X5EBEZB53I-dsn.algolia.net",
          rel: "preconnect",
          crossorigin: "",
        },
      ],
    ],
  },
  // 导航栏菜单
  nav: [
    {
      text: "文库",
      items: [
        { text: "文章列表", link: "/pages/archives", icon: "article" },
        { text: "全部分类", link: "/pages/categories", icon: "folder" },
        { text: "全部标签", link: "/pages/tags", icon: "hashtag" },
      ],
    },
    {
      text: "专栏",
      items: [
        { text: "学习备忘", link: "/pages/categories/学习备忘", icon: "technical" },
      ],
    },
    {
      text: "友圈",
      items: [
        { text: "友情链接", link: "/pages/link", icon: "people" },
        { text: "畅所欲言", link: "/pages/message", icon: "chat" },
      ],
    },
    {
      text: "关于",
      items: [
        { text: "关于本站", link: "/pages/about", icon: "contacts" },
        { text: "隐私政策", link: "/pages/privacy", icon: "chat" },
        { text: "版权协议", link: "/pages/cc", icon: "people" },
        { text: "致谢名单", link: "/pages/thanks", icon: "reward" },
      ],
    },
  ],
  // 导航栏菜单 - 左侧
  navMore: [
    {
      name: "博客",
      list: [
        {
          icon: "https://cdn.luogu.com.cn/upload/image_hosting/hd9rbs10.png",
          name: "博客主站",
          url: "/",
        },
        {
          icon: "https://cdn.luogu.com.cn/upload/image_hosting/hd9rbs10.png",
          name: "博客演示站",
          url: "/",
        },
        {
          icon: "https://cdn.luogu.com.cn/upload/image_hosting/hd9rbs10.png",
          name: "个人主页",
          url: "/",
        },
        {
          icon: "https://cdn.luogu.com.cn/upload/image_hosting/hd9rbs10.png",
          name: "私有工具",
          url: "/",
        },
      ],
    },

  ],
  // 封面配置
  cover: {
    // 是否开启双栏布局
    twoColumns: false,
    // 是否开启封面显示
    showCover: {
      // 是否开启封面显示 文章不设置cover封面会显示异常，可以设置下方默认封面
      enable: true,
      // 封面布局方式: left | right | both
      coverLayout: 'left',
      // 默认封面(随机展示)
      defaultCover: [
        'https://pan.811520.xyz/2024-10/1728279557702.webp',
        'https://pan.811520.xyz/2024-10/1728387512098.webp'
      ]
    }
  },
  // 页脚信息
  footer: {
    // 社交链接（请确保为偶数个）
    social: [
      {
        icon: "luogu",
        link: "https://www.luogu.com.cn/user/1442389",
      },
      {
        icon: "github",
        link: "https://github.com/zczc1226/",
      },
      },
    ],
    // sitemap
    sitemap: [
      {
        text: "我的博客",
        items: [
          { text: "近期文章", link: "/" },
          { text: "全部分类", link: "/pages/categories" },
        ],
      },
      {
        text: "我的专栏",
        items: [
          { text: "我的项目", link: "/pages/project" },
          { text: "学习备忘", link: "/pages/categories/学习备忘" },
        ],
      },
      {
        text: "项目推荐",
        items: [
        ],
      }, 
      {        
        text: "页面导航",
        items: [
          { text: "关于本站", link: "/pages/about" },
          { text: "隐私政策", link: "/pages/privacy" },
          { text: "版权协议", link: "/pages/cc" },
          { text: "致谢名单", link: "/pages/thanks" },
        ],
      },
    ],
  },
  // 评论
  comment: {
    enable: true,
    // 评论系统选择
    // artalk / twikoo
    type: "twikoo",
    // artalk
    // https://artalk.js.org/
    artalk: {
      site: "",
      server: "",
    },
    // twikoo
    // https://twikoo.js.org/
    twikoo: {
      // 必填，若不想使用 CDN，可以使用 pnpm add twikoo 安装并引入
      js: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/twikoo/1.6.39/twikoo.all.min.js",
      envId: "https://twikoo.24811213.xyz/",
      // 环境地域，默认为 ap-shanghai，腾讯云环境填 ap-shanghai 或 ap-guangzhou；Vercel 环境不填
      region: "",
      lang: "zh-CN",
    },
  },
  // 侧边栏
  aside: {
    // 站点简介
    hello: {
      enable: true,
      text: "这里有我的各种<strong>折腾笔记</strong>，也有一些<strong>生活随笔</strong>。",
    },
    // 目录
    toc: {
      enable: true,
    },
    // 标签
    tags: {
      enable: true,
    },
    // 倒计时
    countDown: {
      enable: true,
      // 倒计时日期
      data: {
        name: "元旦",
        date: "2025-01-01",
      },
      data: {
        name: "暑假开始:)",
        date: "2025-07-01",
      },
      data: {
        name: "暑假结束:(",
        date: "2025-08-31",
      },
    },
    // 站点数据
    siteData: {
      enable: true,
    },
  },
  // 友链
  friends: {
    // 友链朋友圈
    circleOfFriends: "https://blog2.811520.xyz/blogrss/",
    // 动态友链
    dynamicLink: {
      server: "",
      app_token: "",
      table_id: "",
    },
  },
  // 站点统计
  tongji: {
    "51la": "3LlkSubt2HvotYRj",
  },
};
