# css

## 选择器

### :nth-child

选择父元素下满足条件的第 n 个子元素，无论子元素类型，若不满足条件则不匹配

### :nth-of-type

选择父元素下满足条件的第 n 个子元素，不同子元素类型（如：div，span，p...）**分别计数**，若不满足条件则不匹配

## position

若取值为 sticky，需满足两个条件，父节点具有滚动机制且父节点高度必须大于 sticky 节点高度+top+bottom，否则效果等同于 relative
