# Sales Invoices

Invoice customers for their jobs, link each invoice to its logistics file and trips, and record the payments that come in against it.

## Overview

Go to **Sales → Sales Invoices**. The list shows each invoice's ID, customer, logistics file (**LF**), invoice date, due date, total and status. Due dates that have passed are shown in red. Sort by invoice date, due date, created date or last modified, and use **Add Filter** to narrow the list.

![Sales Invoices list](/images/invoicing-walkthrough/invoices-list.jpg)

| Status | Meaning |
|---|---|
| **Draft** | Saved and still editable |
| **Approved** | Final and locked. Payments can be recorded. |
| **Unpaid** / **Partially Paid** / **Paid** | How much of an approved invoice has been paid |
| **Debit Note** | Shown on debit notes, alongside their status |

## Creating a Sales Invoice

There are three ways to start an invoice:

| Start from | What's filled in |
|---|---|
| An approved quotation: **Create Invoice** | Customer, currency, line items and taxes from the quotation. The logistics file is left empty, because one quotation can be used for several logistics files. |
| A logistics file: **New Invoice** | Customer and logistics file. No lines. |
| **Sales Invoices → New Invoice** | Nothing |

Then:

1. Check the **Customer**, **Currency**, **Invoice Date** and **Due Date** (30 days after the invoice date by default).
2. Select the **Logistics File** the invoice belongs to. This puts it on the file's **Sales Invoices** list and in its **Invoiced Amount**. Once a customer is chosen, only that customer's files are listed. If you pick a file before choosing a customer, the customer fills in from the file.
3. Under **Line Items**, add or edit each charge: item, description, **Qty**, **Unit** and **Unit Price**.
4. To tie a charge to the work it's for, select **Link to trip / job** under the line and pick from the customer's work on the selected file (for example a trip).
5. Under **Taxes**, add **VAT** or another tax as a percentage or an **Exact Amount**.
6. Check the **Notes** and **Terms & Conditions**, then select **Create Invoice**.

![New invoice from a quotation, with a line linked to a trip](/images/invoicing-walkthrough/invoice-new-from-quotation.jpg)

The invoice is saved as a **Draft**. It shows links to its quotation and logistics file at the top.

## Approving, Rejecting or Deleting

Open a draft invoice and use **Actions**:

- **Approve** asks you to confirm (*Approve invoice INV0046? It can't be edited once approved.*), then makes the invoice final and locks it.
- **Reject** or **Delete** stops it.

![Draft invoice actions](/images/invoicing-walkthrough/invoice-draft-actions.jpg)

An approved invoice keeps **Actions → Cancel**. Use **Print** to download or print it for the customer.

## Recording Payments

On an approved invoice, the **Payments** section shows every payment received, with the **Invoice Total**, **Total Paid** and **Balance Due**.

1. Select **Record Payment**.
2. Set the **Payment Date** and **Amount**. The amount starts at the balance due. **Pay Full** puts it back to the full balance.
3. Choose the **Payment Method**, and check **Received From**.
4. Enter a **Reference** and any **Notes**, then select **Record Payment**.

![Record Payment](/images/invoicing-walkthrough/invoice-record-payment.jpg)

Each payment gets a number (for example **PAY0007**). After a part-payment the invoice shows **Partially Paid**. Once the balance reaches zero it shows **Paid**, and **Record Payment** is no longer offered.

![Paid invoice with two payments](/images/invoicing-walkthrough/invoice-paid.jpg)

::: info Customer payments vs. supplier payments
Payments recorded here are money received from customers. Paying suppliers and staff for approved expenses is done on [Payments](/expenses-and-payments/payments).
:::

## Debit Notes

To bill a customer for extra charges after an invoice, select **New Debit Note** on the logistics file, or tick **Is debit note** on a new invoice. Debit notes appear in the list with a **Debit Note** label.

## QuickBooks Sync

Sales invoices can sync to QuickBooks Online automatically. See [QuickBooks Online](/integrations/quickbooks).

## Related Pages

- [Walkthrough: Quotation to Paid Invoice](/sales/invoicing-walkthrough)
- [Quotations](/sales/quotations)
- [Logistics Files](/clearing-and-forwarding/logistics-files)
- [Payments](/expenses-and-payments/payments)
