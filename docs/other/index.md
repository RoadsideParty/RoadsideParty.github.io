# other

## package.json

### 版本控制符

- ^：兼容当前主版本，允许安装最新的次版本和补丁版本。
- ~：兼容当前次版本，允许安装最新的补丁版本。
- 没有符号：锁定特定版本。
- \*：安装任何版本。
- 范围符号（>=, <=, <, >）：指定版本的范围。
- latest：安装最新版本。
- next：安装下一个预发布版本。

## git

### 设置代理

如果代理端口是:7879

```bash
// 开启代理
git config [--global] http.proxy 127.0.0.1:7879
git config [--global] https.proxy 127.0.0.1:7879
// 关闭代理
git config [--global] --unset http.proxy 127.0.0.1:7879
git config [--global] --unset https.proxy 127.0.0.1:7879
```
