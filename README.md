# react-project
## 项目部署与启动
```shell
npm install  #安装服务端依赖
npm start #服务启动

## 如何本地开发

    使用SwitchyOmega参数配置PAC如下
    ```javascript
    function FindProxyForURL(url, host) {
        if( /mp\.toutiao\.com$/.test(host) && url.indexOf('src') != -1 || /mp\.toutiao\.com$/.test(host) && url.indexOf('assets') != -1){
            return "PROXY 127.0.0.1:8080";
        }else{
            return "DIRECT";
        }
    }

## 访问地址
    http://mp.toutiao.com/src

        
