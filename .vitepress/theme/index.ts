import type { Theme } from "vitepress"
import DefaultTheme from "vitepress/theme"
import Image from "./components/Image.vue"

export default {
	extends: DefaultTheme,
	enhanceApp({ app }) {
		app.component("Image", Image)
	},
} satisfies Theme
