/**
 * 基础路由
 * @type { *[] }
 */

export const constantRouterMap = [

  {
    path: '',
    redirect: '/BrandActivity',
    meta: {
      title: '品牌保护法',
      keepAlive: false
    }
  },

  {
    path: '/BrandActivity',
    name: 'BrandActivity',
    component: () => import('@/views/BrandActivity'),
    meta: {
      title: '电商品牌',
      keepAlive: false
    }
  },
  {
    path: '/LoginActivity',
    component: () => import('@/views/LoginActivity'),
    meta: {
      title: '品牌商登录',
      keepAlive: false
    }
  },

  {
    path: '/PaymentSucceedActivity',
    name: 'PaymentSucceedActivity',
    component: () => import('@/views/PaymentSucceedActivity'),
    meta: {
      title: '支付成功',
      keepAlive: false
    }
  },

  {
    path: '/PaymentOrderActivity',
    name: 'PaymentOrderActivity',
    component: () => import('@/views/PaymentOrderActivity'),
    meta: {
      title: '支付订单',
      keepAlive: false
    }
  },

  {
    path: '/AboutActivity',
    name: 'AboutActivity',
    component: () => import('@/views/AboutActivity'),
    meta: {
      title: '关于我们',
      keepAlive: false
    }
  },

  {
    path: '/BrandRegistrationActivity',
    name: 'BrandRegistrationActivity',
    component: () => import('@/views/BrandRegistrationActivity'),
    meta: {
      title: '品牌商登记信息',
      keepAlive: false
    }
  },

  {
    path: '/BrandRegisterActivity',
    name: 'BrandRegisterActivity',
    component: () => import('@/views/BrandRegisterActivity'),
    meta: {
      title: '品牌商注册认证',
      keepAlive: false
    }
  },








  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/home'),
    meta: {
      title: '信服到家',
      keepAlive: false
    }
  },

  {
    path: '/luckDraw',
    component: () => import('@/views/activity/luckDraw'),
    meta: {
      title: '抽奖活动',
      keepAlive: false
    }
  },
  {
    path: '/record',
    component: () => import('@/views/activity/record'),
    meta: {
      title: '中奖记录',
      keepAlive: false
    }
  },
  {
    path: '/activity',
    component: () => import('@/views/activity/activity'),
    meta: {
      title: '活动',
      keepAlive: true
    }
  },


  {
    path: '/test',
    component: () => import('@/views/test/test'),
    meta: {
      title: '测试001',
      keepAlive: false
    }
  },

  {
    path: '/my_property',
    name: 'my_property',
    component: () => import('@/views/my/my_property'),
    meta: {
      title: '我的物业',
      keepAlive: false
    }
  },
  {
    path: '/property_bill',
    name: 'property_bill',
    component: () => import('@/views/propertybill/property_bill'),
    meta: {
      title: '物业账单',
      keepAlive: false
    }
  },
  {
    path: '/add_house',
    name: 'add_house',
    component: () => import('@/views/house/add_house'),
    meta: {
      title: '添加房产',
      keepAlive: false
    }
  },
  {
    path: '/new_add_house',
    name: 'new_add_house',
    component: () => import('@/views/house/NewAddHouse'),
    meta: {
      title: '添加房产',
      keepAlive: false
    }
  },
  {
    path: '/search_location_house',
    name: 'search_location_house',
    component: () => import('@/views/house/SearchLocationHouse'),
    meta: {
      title: '搜索定位小区',
      keepAlive: false
    }
  },
  {
    path: '/add_building',
    name: 'add_building',
    component: () => import('@/views/addbuilding/add_building'),
    meta: {
      title: '添加小区',
      keepAlive: false
    }
  },
  {
    path: '/add_building_two',
    name: 'add_building_two',
    component: () => import('@/views/addbuilding/add_building_two'),
    meta: {
      title: '添加楼号',
      keepAlive: false
    }
  },
  {
    path: '/add_building_three',
    name: 'add_building_three',
    component: () => import('@/views/addbuilding/add_building_three'),
    meta: {
      title: '添加单元号',
      keepAlive: false
    }
  },
  {
    path: '/add_building_four',
    name: 'add_building_four',
    component: () => import('@/views/addbuilding/add_building_four'),
    meta: {
      title: '添加房间号',
      keepAlive: false
    }
  },
  {
    path: '/add_building_five',
    name: 'add_building_five',
    component: () => import('@/views/addbuilding/add_building_five'),
    meta: {
      title: '绑定房产',
      keepAlive: false
    }
  },
  {
    path: '/convenience_service',
    name: 'convenience_service',
    component: () => import('@/views/convenienceservice/convenience_service'),
    meta: {
      title: '便民服务',
      keepAlive: false
    }
  },
  {
    path: '/repairs_record',
    name: 'repairs_record',
    component: () => import('@/views/repairsrecord/repairs_record'),
    meta: {
      title: '报修记录',
      keepAlive: false
    }
  },
  {
    path: '/add_repairs',
    name: 'add_repairs',
    component: () => import('@/views/addrepairs/add_repairs'),
    meta: {
      title: '添加报修',
      keepAlive: false
    }
  },
  {
    path: '/notice_activity',
    name: 'notice_activity',
    component: () => import('@/views/notice/NoticeActivity'),
    meta: {
      title: '物业公告',
      keepAlive: false
    }
  },
  {
    path: '/notice_details_activity',
    name: 'notice_details_activity',
    component: () => import('@/views/notice/NoticeDetailsActivity'),
    meta: {
      title: '公告详情',
      keepAlive: false
    }
  },

  {
    path: '/property_repairs_activity',
    name: 'property_repairs_activity',
    component: () => import('@/views/repairs/PropertyRepairsActivity'),
    meta: {
      title: '在线报修',
      keepAlive: false
    }
  },
  {
    path: '/property_repairs_details_activity',
    name: 'property_repairs_details_activity',
    component: () => import('@/views/repairs/PropertyRepairsDetailsActivity'),
    meta: {
      title: '报修详情',
      keepAlive: false
    }
  },
  {
    path: '/visitor_activity',
    name: 'visitor_activity',
    component: () => import('@/views/visitor/VisitorActivity'),
    meta: {
      title: '访客信息',
      keepAlive: false
    }
  },
  {
    path: '/visitor_details_activity',
    name: 'visitor_details_activity',
    component: () => import('@/views/visitor/VisitorDetailsActivity'),
    meta: {
      title: '访客详情',
      keepAlive: false
    }
  },
  {
    path: '/vote_activity',
    name: 'vote_activity',
    component: () => import('@/views/vote/VoteActivity'),
    meta: {
      title: '在线投票',
      keepAlive: false
    }
  },
  {
    path: '/vote_details_activity',
    name: 'vote_details_activity',
    component: () => import('@/views/vote/VoteDetailsActivity'),
    meta: {
      title: '投票详情',
      keepAlive: false
    }
  },
  {
    path: '/complain_activity',
    name: 'complain_activity',
    component: () => import('@/views/complain/ComplainActivity'),
    meta: {
      title: '投诉建议',
      keepAlive: false
    }
  },
  {
    path: '/feed_back_activity',
    name: 'feed_back_activity',
    component: () => import('@/views/feedback/FeedbackActivity'),
    meta: {
      title: '帮助与反馈',
      keepAlive: false
    }
  },

  {
    path: '/message_activity',
    name: 'message_activity',
    component: () => import('@/views/message/MessageActivity'),
    meta: {
      title: '我的消息',
      keepAlive: false
    }
  },
  {
    path: '/message_details_activity',
    name: 'message_details_activity',
    component: () => import('@/views/message/MessageDetailsActivity'),
    meta: {
      title: '消息详情',
      keepAlive: false
    }
  },

  {
    path: '/house_activity',
    name: 'house_activity',
    component: () => import('@/views/house/MyHouseActivity'),
    meta: {
      title: '我的房产',
      keepAlive: false
    }
  },
  {
    path: '/house_details_activity',
    name: 'house_details_activity',
    component: () => import('@/views/house/HouseDetailsActivity'),
    meta: {
      title: '房产信息',
      keepAlive: false
    }
  }
]
