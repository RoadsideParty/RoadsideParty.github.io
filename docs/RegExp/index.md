# RegExp

## 非捕获组

语法:(?:pattern)

- 例如:^animate-step-(\d+)(?:-(end|start))?$

- 其中(?:-(end|start))是非捕获组,只匹配不捕获

实例 1:animate-step-74-end

- 第一组 (\d+) 捕获 74

- 第二组 (end|start) 捕获 end

- 非捕获组 (?:-(end|start)) 匹配 -end，但是不会被捕获。

实例 2:animate-step-123

- 第一组 (\d+) 捕获 123
- 没有匹配到 -end 或 -start，因此第二组和非捕获组都没有匹配。

## 肯定前瞻

语法:(?=pattern)

- 肯定前瞻用于检查某个位置后面是否跟着一个特定的模式，但它不会把这个模式包括在匹配结果中

## 否定前瞻

语法:(?!pattern)

- 否定前瞻用于检查某个位置后面是否不跟着特定的模式

## 肯定后向断言

语法:(?<=pattern)

- 肯定后向断言用于检查某个位置前面是否紧跟着特定的模式，但不会把这个模式包括在匹配结果中

## 否定后向断言

语法:(?<!pattern)

- 否定后向断言用于检查某个位置前面是否不跟着特定的模式