import { defineConfig } from 'vitepress'

export default defineConfig({
	title: 'Kani LMS Docs',
	description: 'User documentation for Kani LMS (Kani Logistics Management Solution)',
	lang: 'en-US',
	cleanUrls: true,
	lastUpdated: true,

	head: [['link', { rel: 'icon', href: '/favicon.svg' }]],

	themeConfig: {
		logo: '/logo.svg',

		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Getting Started', link: '/getting-started/' },
			{ text: 'Open App', link: 'https://app.kani.co.tz' },
			{ text: 'Website', link: 'https://www.kani.co.tz' }
		],

		sidebar: [
			{
				text: 'Getting Started',
				items: [
					{ text: 'Introduction', link: '/getting-started/' },
					{ text: 'Logging In', link: '/getting-started/logging-in' },
					{ text: 'Dashboard Overview', link: '/getting-started/dashboard' },
					{ text: 'Roles & Permissions', link: '/getting-started/roles-and-permissions' }
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
