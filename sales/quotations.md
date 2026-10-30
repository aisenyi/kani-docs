# Quotations

Create price quotations for customers before a job is confirmed. Once a customer accepts, approve the quotation and turn it into a logistics file or a sales invoice in one click.

## Overview

Go to **Sales → Quotations**. The list shows each quotation's ID, customer, date, expiry, total and status. Expiry dates in the past are shown in red.

![Quotations list](/images/import-walkthrough/quotations-list.jpg)

## Creating a Quotation

1. Select **New Quotation**.
2. Search for and select the **Customer**.
3. Choose the **Currency** (USD, TZS, EUR, GBP, KES or ZAR) and check the **Quotation Date** and **Expiry Date**. The expiry defaults to 30 days after the quotation date.
4. Under **Line Items**, select **Add Item** for each charge:
   - pick the item (for example *Agency fee* or *Transport fee*) and edit its description if needed
   - set **Qty**, **Unit** (for example *Container*, *Day*, *Each*, *Kg*) and **Unit Price**
5. Under **Taxes**, select **Add Tax** and choose a tax type such as **VAT**. The description and percentage fill in automatically. You can enter an **Exact Amount** instead of a percentage.
6. Add internal **Notes** if needed and check the **Terms & Conditions**, which come with your company's default text and bank details.
7. Select **Create Quotation**.

![New Quotation with line items and VAT](/images/import-walkthrough/quotation-new.jpg)

## Statuses

| Status | Meaning |
|---|---|
| **Draft** | Saved and still editable. |
| **Approved** | Accepted by the customer. Locked for editing. |
| **Rejected** | Declined. |

To change the status, open a draft quotation and use **Actions → Approve**, **Reject** or **Delete**. Approving asks you to confirm first, because an approved quotation can't be edited.

![Quotation Actions menu](/images/import-walkthrough/quotation-actions.jpg)

## After approval

An approved quotation shows two buttons:

- **Create Logistics File** opens a new logistics file with the customer and quotation already filled in. See [Logistics Files](/clearing-and-forwarding/logistics-files).
- **Create Invoice** creates a sales invoice from the quotation's lines and taxes. One quotation can be used for several logistics files, so choose the invoice's logistics file yourself. See [Sales Invoices](/sales/sales-invoices).

To link an approved quotation to a job that already exists, open the logistics file, pick the quotation in **Quotation** and select **Save Changes**.

Use **Print** to download or print the quotation for the customer.

![Approved quotation](/images/import-walkthrough/quotation-approved.jpg)

## Related Pages

- [Customers](/sales/customers)
- [Sales Invoices](/sales/sales-invoices)
- [Walkthrough: Quotation to Paid Invoice](/sales/invoicing-walkthrough)
- [Walkthrough: Containerised Import](/clearing-and-forwarding/import-walkthrough)
