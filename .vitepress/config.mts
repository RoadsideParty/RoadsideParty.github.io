import { Theme } from "vitepress"
import { defineConfig } from "vitepress"

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
	lang: "zh-cn",
	title: "个人博客",
	description: "记录自己的学习&生活",
	head: [["link", { rel: "icon", href: "/assets/icons/icon.svg" }]],
	themeConfig: {
		logo: "/assets/icons/icon.svg",
		docFooter: {
			prev: "上一篇",
			next: "下一篇",
		},
		darkModeSwitchLabel: "外观",
		returnToTopLabel: "返回顶部",
		sidebarMenuLabel: "菜单",
		outline: {
			label: "导航",
		},
		sidebar: [
			{ text: "首页", link: "/" },
			{ text: "three.js", link: "/docs/three.js" },
		],
		socialLinks: [{ icon: "github", link: "https://github.com/RoadsideParty" }],
	},
	outDir: "./dist",
})
