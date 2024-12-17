# unocss

记录自己的 unocss 配置

```js
import { defineConfig, transformerVariantGroup } from "unocss"

const dir = {
	t: "top",
	b: "bottom",
	l: "left",
	r: "right",
}

function getValue(str: string | undefined) {
	if (str === undefined) return ""
	return str.startsWith("[") ? str.slice(1, -1) : str
}

export default defineConfig({
	transformers: [transformerVariantGroup()],
	rules: [
		// flex-center-center f-[self-end]-[flex-end]...
		[
			/^(?:flex|f)-(?:([a-z]+|\[.+\]))?-(?:([a-z]+|\[.+\]))?$/,
			(match) => {
				const value1 = getValue(match[1])
				const value2 = getValue(match[2])
				return {
					display: "flex",
					"align-items": value1 || "normal",
					"justify-content": value2 || "normal",
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
					return { [`border-${dir[value1]}`]: `${value2} ${value3} ${value4}` }
				}
				return { border: `${value2} ${value3} ${value4}` }
			},
		],
	],
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
})
```
