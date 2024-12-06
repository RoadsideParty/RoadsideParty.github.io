# RegExp

## 非捕获组

语法:(?:...)

- 例如:^animate-step-(\d+)(?:-(end|start))?$

- 其中(?:-(end|start))是非捕获组,只匹配不捕获

实例 1:animate-step-74-end

- 第一组 (\d+) 捕获 74

- 第二组 (end|start) 捕获 end

- 非捕获组 (?:-(end|start)) 匹配 -end，但是不会被捕获。

实例 2:animate-step-123

- 第一组 (\d+) 捕获 123
- 没有匹配到 -end 或 -start，因此第二组和非捕获组都没有匹配。
