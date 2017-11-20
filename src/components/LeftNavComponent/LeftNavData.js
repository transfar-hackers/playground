module.exports = [
    {
        'roleType': 'common',
        'listName': '会员信息',
        'iconfont': 'icon-user',
        'subList': [
            {
                linksName: "基本信息",
                links: "/user/membermsg.html"
            }, {
                linksName: "收获地址",
                links: '/user/address.html'
            },
            {
                linksName: "发票信息",
                links: '/user/invoice.html'
            },
            {
                linksName: "浏览记录",
                links: '/user/viewHistory.html'
            },

        ]

    },
    {
        'roleType': 'common',
        'listName': '账单管理',
        'iconfont': 'icon-zhangdan',
        'subList': [
            {
                linksName: "应收账款",
                links: ""
            }, {
                linksName: "应付账款",
                links: ''
            }
        ]

    },
    {
        'roleType': 'buyers',
        'listName': '采购管理',
        'iconfont': 'icon-transaction',
        'subList': [
            {
                linksName: "我的询盘",
                links: "/user/inquiry.html"
            }, {
                linksName: "采购订单",
                links: '/user/orderList.html'
            },
            {
                linksName: "我发布的需求",
                links: '/user/release.html'
            },
        ]

    },
    {
        'roleType': 'supplier',
        'listName': '供应管理',
        'iconfont': 'icon-gongyingguanli',
        'subList': [
            {
                linksName: "询盘管理",
                links: "/seller/inquiry.html"
            }, {
                linksName: "销售订单",
                links: '/seller/orderList.html'
            },
            {

                linksName: "商品管理",
                goodsAdminList: [
                    {
                        linksName: '添加商品',
                        links: '/seller/goodsOnshelf.html'
                    },
                    {
                        linksName: '商品列表',
                        links: '/seller/goodsList.html'
                    },
                    {
                        linksName: '商品下架',
                        links: '/seller/undercarriage.html'
                    },
                    {
                        linksName: '集采商品列表',
                        links: '/seller/jicaiGoodsList.html'
                    }


                ]
            },
            {
                linksName: '供应合同管理',
                links: ''
            }

        ]

    },

    {
        'roleType': 'supplier',
        'listName': '物流管理',
        'iconfont': 'icon-wuliuguanli',
        'subList': [
            {
                linksName: "物流订单",
                links: ""
            }
        ]


    },
    {
        'roleType': 'supplier',
        'listName': '金融服务',
        'iconfont': 'icon-jinrong',
        'subList': [
            {
                linksName: "垫付宝",
                links: ""
            }
        ]


    },
    {
        'roleType': 'operators',
        'listName': '平台管理',
        'iconfont': 'icon-transaction',
        'subList': [
            {
                linksName: "需求管理",
                links: "/seller/requirement.html"
            }, {
                linksName: "服务提供商管理",
                links: ''
            },

        ]


    },

];