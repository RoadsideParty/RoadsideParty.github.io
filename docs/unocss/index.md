# unocss

## unocss 配置

```js
import { defineConfig, transformerVariantGroup } from "unocss"

const dir = {
	t: "top",
	b: "bottom",
	l: "left",
	r: "right",
}

const margin = {
	p: "padding",
	padding: "padding",
	m: "margin",
	margin: "margin",
}

function getValue(str: string | undefined) {
	if (str === undefined) return ""
	return str.startsWith("[") ? str.slice(1, -1) : str
}

export default defineConfig({
	transformers: [transformerVariantGroup()],
	rules: [
		// f-c-c f-fe-fs...
		[
			/^(?:flex|f)-(n|c|fe|fs)-(n|c|fe|fs|sa|sb|se)$/,
			(match) => {
				const flexMap = {
					n: "normal",
					c: "center",
					fe: "flex-end",
					fs: "flex-start",
					sa: "space-around",
					sb: "space-between",
					se: "space-evenly",
				}
				const value1 = getValue(match[1])
				const value2 = getValue(match[2])
				return {
					display: "flex",
					"align-items": flexMap[value1],
					"justify-content": flexMap[value2],
				}
			},
		],
		// b-1px-solid-black b-b-1px-solid-black...
		[
			/^(?:border|b)(?:-(t|b|l|r))?-(.+)-([a-z]+)-(.+)$/,
			(match) => {
				const value1 = match[1]
				const value2 = match[2]
				const value3 = match[3]
				const value4 = match[4]
				if (value1) {
					return {
						[`border-${dir[value1]}`]: `${value2} ${value3} ${value4}`,
					}
				}
				return { border: `${value2} ${value3} ${value4}` }
			},
		],
		// p-10px-20px m-10px-20px...
		[
			/^(padding|p|margin|m)(-.+){1,4}$/,
			(match) => {
				const value1 = match[1]
				const value2 = match[2]
				return { [margin[value1]]: `${value2.slice(1).replace(/-/g, " ")}` }
			},
		],
	],
})
```

## 动画写法

```js
theme: {
	animation: {
		keyframes: {
			test: `{
				0% {transform:scale(1);opacity:1}
				100% {transform:scale(2);opacity:0}
			}`,
		},
	},
},
```
