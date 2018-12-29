const CONF = {
    port: 0,
    rootPathname: '',

    // 微信小程序 App ID
    appId: process.env.wxAppId,

    // 微信小程序 App Secret
    appSecret: process.env.wxAppSecret,

    // 是否使用腾讯云代理登录小程序
    useQcloudLogin: false,

    serverHost: '',
    tunnelServerUrl: '',
    tunnelSignatureKey: '',
    qcloudAppId: '',
    qcloudSecretId: '',
    qcloudSecretKey: '',
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
