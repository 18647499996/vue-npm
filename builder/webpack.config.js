const development = {
    mode: 'development',
    name: '开发环境',
    baseMainUrl: 'http://130.130.1.172:8848/',
    baseBDUrl: 'https://qifu-api.baidubce.com/',
    baseIDUrl: 'https://www.haoshudi.com/',
    baseCDN:'https://shops-1307611133.cos.ap-beijing.myqcloud.com/Miniprogram/',
    level: 0,
    isDebug: true
}

const production = {
    mode: 'production',
    name: '生产环境',
    baseMainUrl: 'https://gds-api.liudonghan.top/',
    baseBDUrl: 'https://qifu-api.baidubce.com/',
    baseIDUrl: 'https://www.haoshudi.com/',
    baseCDN:'https://shops-1307611133.cos.ap-beijing.myqcloud.com/Miniprogram/',
    level: 1,
    isDebug: false
}

const test = {
    mode: 'test',
    name: '测试环境',
    baseMainUrl: 'https://gds-api.liudonghan.top/',
    baseBDUrl: 'https://qifu-api.baidubce.com/',
    baseIDUrl: 'https://www.haoshudi.com/',
    baseCDN:'https://shops-1307611133.cos.ap-beijing.myqcloud.com/Miniprogram/',
    level: 2,
    isDebug: true
}

function getConfig() {
    switch (process.env.VUE_APP_ENV) {
        case 'development':
            return development
        case 'production':
            return production
        case 'test':
            return test
    }
}

export default {
    development,
    production,
    test,
    getConfig
}
