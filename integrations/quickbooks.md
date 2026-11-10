---
title: "QuickBooks Online Integration and Sync"
description: "Connect Kani LMS to QuickBooks Online to sync suppliers, bills, payments, fuel, quotations and invoices, link tax types, and fix common sync errors."
---

# QuickBooks Online

Connect Kani LMS to QuickBooks Online so your suppliers, bills, payments, quotations and invoices reach your books without typing them in twice.

## What Syncs

| In Kani LMS | In QuickBooks | When |
|---|---|---|
| Supplier | Vendor | When you add or edit a supplier |
| Employee | Vendor | On the first sync, so expenses for staff can be billed to them |
| QuickBooks vendors | Suppliers in Kani LMS | On the first sync and with **Pull from QuickBooks** |
| QuickBooks bank and card accounts | Payment methods in Kani LMS | On the first sync and with **Pull from QuickBooks** |
| QuickBooks products and services | Items in Kani LMS | On the first sync |
| Expense type | Expense account | The first time an expense of that type is approved |
| Approved expense | Bill to the supplier or employee | When the expense is approved |
| Payment for an expense | Bill payment | When you record the payment |
| Fuel dispensed from a supplier | Bill to the fuel supplier | When you record the fuel dispensing |
| Payment for a supplier fuel bill | Bill payment | When you record the payment |
| Approved quotation | Estimate | When the quotation is approved |
| Approved sales invoice | Invoice | When the invoice is approved |
| Customer payment on an invoice | Payment | When you record the payment |

Customers are created in QuickBooks automatically the first time a quotation or invoice for them is sent.

## Connecting QuickBooks

1. Go to **Integrations → QuickBooks**. The **Accounting Integration** page shows QuickBooks Online as **Not connected**.
2. Select **Connect QuickBooks**.
3. Sign in to QuickBooks if asked, choose your company, and select **Connect** to let Kani LMS share data with it.

![Connecting Kani LMS to a QuickBooks company](/images/quickbooks/qb-consent.jpg)

You're returned to Kani LMS with the message *QuickBooks connected successfully. The first sync is running in the background*. The first sync shows its progress step by step:

- Copy QuickBooks vendors to Kani suppliers
- Send Kani suppliers to QuickBooks
- Update employees linked to QuickBooks vendors
- Send Kani employees to QuickBooks
- Copy QuickBooks bank accounts to payment methods
- Copy QuickBooks items
- Link the Fuel expense account

When it shows **First sync finished**, you're ready to go. **Run again** repeats the first sync. Records already linked are updated, not duplicated.

![QuickBooks connected and first sync finished](/images/quickbooks/qb-connected.jpg)

The QuickBooks card also shows:

- **Connected** and your QuickBooks **Company ID**
- the currency your books are kept in, and whether multicurrency is on
- **Assign classes**: how classes are set on transactions, taken from your QuickBooks settings
- **Pull from QuickBooks**, **View Sync Logs** and **Disconnect**

## Before You Approve Invoices: Link Your Tax Types

Quotations and sales invoices can only be approved once every tax on them is linked to a QuickBooks tax code. Otherwise approval is blocked with a message such as *QuickBooks rejected the invoice - Tax row 1 "VAT" is not pushed to QuickBooks yet*.

To link a tax type to an existing QuickBooks tax code (recommended):

1. Go to **Administration → Tax Types** and select the pencil icon next to the tax type.
2. Under **QuickBooks tax code**, choose the matching code.
3. Select **Save**.

![Linking VAT to a QuickBooks tax code](/images/quickbooks/kani-tax-type-link.jpg)

If the tax code doesn't exist in QuickBooks yet, select **Push all to QuickBooks** on the **Tax Types** page and confirm with **Create tax codes**. This creates a QuickBooks tax code for every tax type that isn't linked to one.

![Tax Types with Push all to QuickBooks](/images/quickbooks/kani-tax-types.jpg)

## Suppliers and Employees

When you add a supplier in **Administration → Suppliers**, it's created as a vendor in QuickBooks with its name, email, phone and address. Changes you make later are sent too.

![A Kani LMS supplier as a QuickBooks vendor](/images/quickbooks/qb-vendor.jpg)

Employees are sent to QuickBooks as vendors on the first sync, so expenses raised for an employee (such as a daily allowance) can be billed to them.

## Expenses and Payments

When an expense is approved in [Expense Approvals](/expenses-and-payments/expense-approvals), Kani LMS creates a bill in QuickBooks:

- **Vendor**: the supplier or employee the expense is for
- **Bill no.**: the expense number, for example **EXP-19**
- **Category**: an expense account named after the expense type, for example **Handling**
- **Memo**: the document and description, for example *Import IMP0004 - Terminal handling charges for container offloading*

![Approved expense as a QuickBooks bill](/images/quickbooks/qb-bill-expense.jpg)

The expense account for each expense type is created in QuickBooks the first time an expense of that type is approved. **Administration → Expense Types** shows **Synced** for types that already have one.

![Expense Types with their QuickBooks status](/images/quickbooks/kani-expense-types.jpg)

When you record a payment on [Payments](/expenses-and-payments/payments), it's sent as a bill payment against that bill, from the QuickBooks account chosen as the **Payment Method**. The payment methods are your QuickBooks bank and card accounts, and the form shows the account's current QuickBooks balance. Part-payments are applied to the same bill. When the bill is fully paid, it shows **PAID** in QuickBooks.

![Recording a payment, with the QuickBooks balance](/images/quickbooks/kani-record-payment-balance.jpg)

![The payment as a QuickBooks bill payment](/images/quickbooks/qb-bill-payment.jpg)

## Fuel

When fuel is dispensed **From supplier** on **Fuel Dispensions** (see [Fuel Approvals & Dispensions](/fleet-management/fuel#fuel-dispensions)), the form tells you how much will be billed, for example *TZS 4,086,000.00 (1000 L × TZS 4,086.0000) will be billed to the supplier in QuickBooks.* Saving it creates a bill to the fuel supplier:

- **Bill no.**: for example **FUEL-5**
- **Category**: the Fuel expense account linked during the first sync
- **Memo**: the trip, litres and fuel type

![Dispensing fuel from a supplier](/images/quickbooks/kani-fuel-dispense.jpg)

![Supplier fuel as a QuickBooks bill](/images/quickbooks/qb-bill-fuel.jpg)

Pay supplier fuel bills from the **Supplier Fuel** tab on **Payments**. The payment is sent to QuickBooks as a bill payment, like any other expense payment.

## Quotations, Invoices and Customer Payments

When a [quotation](/sales/quotations) is approved, it's sent to QuickBooks as an estimate with the same number. When a [sales invoice](/sales/sales-invoices) is approved, it's sent as an invoice with the same number. If the customer isn't in QuickBooks yet, they're created.

Once sent, the document shows a ticked **Synced with QuickBooks** box.

![An approved invoice synced with QuickBooks](/images/quickbooks/kani-invoice-synced.jpg)

![Kani LMS quotations as QuickBooks estimates](/images/quickbooks/qb-estimates.jpg)

Payments you record on an invoice with **Record Payment** are sent to QuickBooks and applied to that invoice. A part-payment shows as **Partially paid** in QuickBooks.

![The invoice in QuickBooks after a part-payment](/images/quickbooks/qb-invoices.jpg)

## Pull from QuickBooks

Select **Pull from QuickBooks** on the QuickBooks card to bring in vendors and bank accounts added in QuickBooks since the last sync, and to update the ones you already have. When it finishes, a summary lists the suppliers, employees and payment methods it updated.

![Pull from QuickBooks summary](/images/quickbooks/kani-pull-completed.jpg)

## Sync Logs

Go to **Integrations → Sync Logs** (or select **View Sync Logs**) for a record of everything sent to or copied from QuickBooks. Each row shows the record, its QuickBooks ID (**External ID**), the **Status** (**Synced**, **Failed**, **Pending** or **Skipped**), when it last synced and any error.

- Filter by type, status or provider.
- Select **Re-sync** on a failed row to try that record again, or **Retry failed** to retry them all.

![Sync Logs](/images/quickbooks/qb-sync-logs.jpg)

## Troubleshooting

| Message | What to do |
|---|---|
| *Approval blocked: QuickBooks rejected the invoice - Tax row 1 "VAT" is not pushed to QuickBooks yet* | Link the tax type to a QuickBooks tax code. See [Link Your Tax Types](#before-you-approve-invoices-link-your-tax-types). |
| *QuickBooks payment failed: Could not send the expense to QuickBooks before its payment* | The expense couldn't be sent to QuickBooks, so the payment wasn't recorded. The rest of the message says why. |
| *Duplicate Name Exists Error* in Sync Logs | QuickBooks already has a record with that name. Rename one of them, then select **Re-sync**. |

## Disconnecting

Select **Disconnect** on the QuickBooks card to stop syncing with your QuickBooks company. To start again, select **Connect QuickBooks**.

## Related Pages

- [Sales Invoices](/sales/sales-invoices)
- [Quotations](/sales/quotations)
- [Expense Approvals](/expenses-and-payments/expense-approvals)
- [Payments](/expenses-and-payments/payments)
