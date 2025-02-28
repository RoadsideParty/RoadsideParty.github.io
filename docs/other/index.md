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

如果代理端口是:7897

```bash
// 开启代理
git config [--global] http.proxy 127.0.0.1:7897
git config [--global] https.proxy 127.0.0.1:7897
// 关闭代理
git config [--global] --unset http.proxy 127.0.0.1:7897
git config [--global] --unset https.proxy 127.0.0.1:7897
```

## 关于刷机

### 常规流程

- 1.解锁 bl(具体解法根据机型而定),可以使用 onekey twrp(如果有的话)一键解锁 bl 以及刷入 rec
- 2.刷第三方 rec(具体版本根据机型而定),如果是 onekey twrp 一键解锁的,现在已经是 twrp 的 rec,可以直接获取 root 权限,如果要刷 rom 或者 magisk 之类的,可能会失败,还是依据机型而定
- 3.刷第三方 rom(具体 rom 根据机型而定)
- 4.安装 [magisk](https://github.com/topjohnwu/Magisk)
  - 4.1 其中一种方式是将 magisk.app 后缀改为.zip 即可在 rec 中卡刷安装,如果安装后重启没有出现 magisk app,需手动安装对应版本的 magisk app 即可
  - 4.2 另一种方式是通过 magisk app 安装,然后修补 boot.img 或者 init_boot.img
- 5.安装 [lsposed](https://github.com/LSPosed/LSPosed),在 magisk 中启动 zygisk 即可安装 lsposed-zygisk 的版本
- 6.安装 lsp 模块,每一个模块都是一个 app,直接安装即可,安装后在 lsp 中启用,有些模块可能需要重启后生效
