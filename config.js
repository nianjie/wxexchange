const CONF = {
    port: process.env.PORT || 0,
    // 微信小程序 App ID
    appId: process.env.wxAppId,

    // 微信小程序 App Secret
    appSecret: process.env.wxAppSecret,

    // 是否使用腾讯云代理登录小程序
    useQcloudLogin: false,
}

module.exports = CONF
