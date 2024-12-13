import { defineConfig } from "vitepress"

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
	lang: "zh-cn",
	title: "BLOG",
	description: "记录自己的学习&生活",
	head: [["link", { rel: "icon", href: "/icons/icon.svg" }]],
	themeConfig: {
		logo: "/icons/icon.svg",
		docFooter: {
			prev: "上一篇",
			next: "下一篇",
		},
		darkModeSwitchLabel: "夜间模式",
		returnToTopLabel: "返回顶部",
		sidebarMenuLabel: "菜单",
		outline: {
			label: "导航",
			level: "deep",
		},
		lastUpdated: {
			text: "更新时间",
		},
		socialLinks: [{ icon: "github", link: "https://github.com/RoadsideParty" }],
		search: {
			provider: "local",
			options: {
				locales: {
					root: {
						translations: {
							button: {
								buttonText: "搜索文档",
								buttonAriaLabel: "搜索文档",
							},
							modal: {
								noResultsText: "无法找到相关结果",
								resetButtonTitle: "清除查询条件",
								footer: {
									selectText: "选择",
									navigateText: "切换",
								},
							},
						},
					},
				},
			},
		},
		sidebar: [
			{ text: "diary", link: "/diary/" },
			{ text: "three.js", link: "/three.js/" },
			{ text: "RegExp", link: "/RegExp/" },
			{ text: "unocss", link: "/unocss/" },
		],
	},
	lastUpdated: true,
	srcDir: "./docs",
	outDir: "./dist",
})
