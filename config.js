const CONF = {
    port: process.env.PORT || 0,
    rootPathname: '',

    // 微信小程序 App ID
    appId: process.env.WxAppId,

    // 微信小程序 App Secret
    appSecret: process.env.WxAppSecret,

    // 是否使用腾讯云代理登录小程序
    useQcloudLogin: false,

    serverHost: '',
    tunnelServerUrl: '',
    tunnelSignatureKey: '',
    qcloudAppId: '',
    qcloudSecretId: '',
    qcloudSecretKey: '',
    mysql: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        db: 'cAuth',
        pass: '',
        char: 'utf8mb4'
    },
    cos: {
        /**
         * 地区简称
         */
        region: 'ap-guangzhou',
        // Bucket 名称
        fileBucket: 'qcloudtest',
        // 文件夹
        uploadFolder: ''
    },

    // 微信登录态有效期
    wxLoginExpires: 7200,
    wxMessageToken: 'abcdefgh'
}

module.exports = CONF
