import { defineConfig } from 'vitepress'

export default defineConfig({
	title: 'Kani LMS User Guides',
	description: 'Step-by-step user guides for Kani LMS (Kani Logistics Management Solution): clearing and forwarding, fleet, workshop, expenses and sales.',
	lang: 'en-US',
	cleanUrls: true,
	lastUpdated: true,
	srcExclude: ['README.md'],
	sitemap: { hostname: 'https://docs.kani.co.tz' },

	head: [
		['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg?v=3' }],
		['link', { rel: 'alternate icon', href: '/favicon.ico?v=3' }],
		['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-S47C4E2P59' }],
		['script', {}, "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-S47C4E2P59');"]
	],

	transformPageData(pageData) {
		const path = pageData.relativePath.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')
		const url = `https://docs.kani.co.tz/${path}`
		const title = pageData.relativePath === 'index.md' ? 'Kani LMS User Guides' : `${pageData.title} | Kani LMS User Guides`
		const description = pageData.frontmatter.description || pageData.description

		pageData.frontmatter.head ??= []
		pageData.frontmatter.head.push(
			['link', { rel: 'canonical', href: url }],
			['meta', { property: 'og:type', content: 'website' }],
			['meta', { property: 'og:site_name', content: 'Kani LMS User Guides' }],
			['meta', { property: 'og:url', content: url }],
			['meta', { property: 'og:title', content: title }],
			['meta', { property: 'og:description', content: description }],
			['meta', { property: 'og:image', content: 'https://kani.co.tz/og-image-20260927.png' }],
			['meta', { property: 'og:image:width', content: '1200' }],
			['meta', { property: 'og:image:height', content: '630' }],
			['meta', { property: 'og:image:alt', content: 'kani LMS, logistics management solution' }],
			['meta', { name: 'twitter:card', content: 'summary_large_image' }]
		)
	},

	themeConfig: {
		logo: '/logo.svg',

		nav: [
			{ text: 'Getting Started', link: '/getting-started/' },
			{
				text: 'Walkthroughs',
				items: [
					{ text: 'Containerised Import', link: '/clearing-and-forwarding/import-walkthrough' },
					{ text: 'Transit Transport', link: '/fleet-management/transport-walkthrough' },
					{ text: 'Service and Tyres', link: '/workshop/workshop-walkthrough' },
					{ text: 'Quotation to Paid Invoice', link: '/sales/invoicing-walkthrough' }
				]
			},
			{ text: 'Open App', link: 'https://app.kani.co.tz' }
		],

		sidebar: [
			{
				text: 'Getting Started',
				items: [
					{ text: 'Introduction', link: '/getting-started/' },
					{ text: 'Logging In', link: '/getting-started/logging-in' },
					{ text: 'Dashboard Overview', link: '/getting-started/dashboard' }
				]
			},
			{
				text: 'Clearing & Forwarding',
				items: [
					{ text: 'Walkthrough: Containerised Import', link: '/clearing-and-forwarding/import-walkthrough' },
					{ text: 'Logistics Files', link: '/clearing-and-forwarding/logistics-files' },
					{ text: 'Imports', link: '/clearing-and-forwarding/imports' },
					{ text: 'Exports', link: '/clearing-and-forwarding/exports' },
					{ text: 'Freight Forwarding', link: '/clearing-and-forwarding/freight-forwarding' },
					{ text: 'Bond Management', link: '/clearing-and-forwarding/bonds' },
					{ text: 'Containers Management', link: '/clearing-and-forwarding/containers' }
				]
			},
			{
				text: 'Fleet Management',
				items: [
					{ text: 'Walkthrough: Transit Transport', link: '/fleet-management/transport-walkthrough' },
					{ text: 'Transport Requests', link: '/fleet-management/transport-requests' },
					{ text: 'Trips', link: '/fleet-management/trips' },
					{ text: 'Vehicles & Trailers', link: '/fleet-management/vehicles-and-trailers' },
					{ text: 'Fuel Approvals & Dispensions', link: '/fleet-management/fuel' }
				]
			},
			{
				text: 'Workshop',
				items: [
					{ text: 'Walkthrough: Service and Tyres', link: '/workshop/workshop-walkthrough' },
					{ text: 'Service Jobs', link: '/workshop/service-jobs' },
					{ text: 'Tyres & Tyre Board', link: '/workshop/tyres' },
					{ text: 'Service Reminders', link: '/workshop/service-reminders' }
				]
			},
			{
				text: 'Expenses & Payments',
				items: [
					{ text: 'Expense Approvals', link: '/expenses-and-payments/expense-approvals' },
					{ text: 'Payments', link: '/expenses-and-payments/payments' }
				]
			},
			{
				text: 'Sales',
				items: [
					{ text: 'Walkthrough: Quotation to Paid Invoice', link: '/sales/invoicing-walkthrough' },
					{ text: 'Quotations', link: '/sales/quotations' },
					{ text: 'Sales Invoices', link: '/sales/sales-invoices' },
					{ text: 'Customers', link: '/sales/customers' }
				]
			},
			{
				text: 'Reports',
				items: [{ text: 'Reports Overview', link: '/reports/' }]
			},
			{
				text: 'Administration',
				items: [
					{ text: 'Users', link: '/administration/users' },
					{ text: 'Roles & Permissions', link: '/administration/roles-and-permissions' },
					{ text: 'Company Settings', link: '/administration/company-settings' }
				]
			},
			{
				text: 'Integrations',
				items: [{ text: 'QuickBooks Online', link: '/integrations/quickbooks' }]
			}
		],

		search: {
			provider: 'local'
		},

		footer: {
			message: 'Need help? Contact support from within the app. | <a href="https://www.kani.co.tz">www.kani.co.tz</a>',
			copyright: `Copyright © ${new Date().getFullYear()} Kani Afritech LTD`
		}
	}
})
