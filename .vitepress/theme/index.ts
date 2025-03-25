import { h } from "vue"
import type { Theme } from "vitepress"
import DefaultTheme from "vitepress/theme"
import { NotFound, Image } from "./components"
import "virtual:uno.css"

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
