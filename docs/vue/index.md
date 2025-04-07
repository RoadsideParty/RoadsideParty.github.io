# vue

## transition

| 类名                     | 阶段   | 描述                                  |
| ------------------------ | ------ | ------------------------------------- |
| `v-enter-from`（常用）   | 进入前 | 元素插入前的初始状态（如 opacity: 0） |
| `v-enter-active`（常用） | 进入中 | 控制进入动画的持续时间、缓动函数等    |
| v-enter-to               | 进入后 | 元素完全显示时的状态（如 opacity: 1） |
| v-leave-from             | 离开前 | 元素离开前的初始状态（如 opacity: 1） |
| `v-leave-active`（常用） | 离开中 | 控制离开动画的持续时间、缓动函数等    |
| `v-leave-to`（常用）     | 离开后 | 元素完全隐藏时的状态（如 opacity: 0） |

使用

```html
<!-- 可选 使用name会改变v前缀 -->
<transition name="fade">
	<div v-if="isShow">test</div>
</transition>
```

```css
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
```

当没有显式定义 v-enter-to 或 v-leave-from 时，Vue 会默认使用元素的原始样式作为过渡的结束状态

**为什么这样设计？​​**

- 简化代码 ​​：大多数情况下，开发者只需定义起始或结束状态中的一个，另一个状态由元素原始样式决定
- 灵活性 ​​：允许通过修改元素本身的 CSS 来控制过渡效果，而无需重复定义过渡类名

[更多配置详见](https://cn.vuejs.org/guide/built-ins/transition)
