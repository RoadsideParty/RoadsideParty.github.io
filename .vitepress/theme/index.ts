import { h } from "vue"
import type { Theme } from "vitepress"
import DefaultTheme from "vitepress/theme"
import Image from "./components/Image.vue"
import NotFound from "./components/NotFound.vue"

export default {
	extends: DefaultTheme,
	Layout() {
		return h(DefaultTheme.Layout, null, {
			"not-found": () => h(NotFound),
		})
	},
	enhanceApp({ app }) {
		app.component("Image", Image)
	},
} satisfies Theme
