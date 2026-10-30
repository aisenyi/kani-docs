# Logistics Files

A **Logistics File** is the umbrella record for a job. You choose the service when you create it, and Kani LMS automatically creates the linked import, export, transport request or freight forwarding job. The logistics file then brings together everything about the job: the quotation, expenses, trips and sales invoices, plus a running profit/loss.

## Overview

Go to **Logistics Files**. The list shows every file across all services, with its customer, service, BL or booking number, quotation, documents date and linked document. Search by ID, BL number or booking number.

![Logistics Files list](/images/import-walkthrough/logistics-files-list.jpg)

## Services

- **Import - Local** / **Import - Transit**: creates a linked import
- **Export - Local** / **Export - Transit**: creates a linked export
- **Transport - Local** / **Transport - Transit**: creates a linked [transport request](/fleet-management/transport-requests#standalone-transport-requests) and opens it
- **Freight Forwarding - Local** / **Freight Forwarding - Transit**: creates a linked [freight forwarding job](/clearing-and-forwarding/freight-forwarding)

*Local* is for cargo that stays in the country. *Transit* is for cargo passing through to a neighbouring country.

## Creating a Logistics File

You can start from an approved quotation (**Create Logistics File**) or from **Logistics Files → New Logistics File**.

1. Choose the **Service**.
2. Select the **Customer**, if it isn't already filled in.
3. Optionally link a **Quotation**. Only the selected customer's quotations are listed.
4. Set the **Documents Received Date**.
5. For imports, enter the **BL Number** (required). For transport, enter the **Pickup Location City** and **Country** and the **Delivery Location City** and **Country** (required).
6. Select **Create Logistics File**.

![New Logistics File](/images/import-walkthrough/logistics-file-new.jpg)

## The logistics file page

After saving, the file opens with:

- **Total Expenses**, **Invoiced Amount** and **Profit / Loss** at the top
- the file's key fields (customer, quotation, documents received date), which you can edit and save with **Save Changes**
- **Linked Document**: the import or export, plus any linked trips
- **Expenses**: every approved expense on the job
- **Sales Invoices**: with **New Invoice** and **New Debit Note**

![Logistics file summary](/images/import-walkthrough/logistics-file-final-top.jpg)

![Linked documents, expenses and sales invoices](/images/import-walkthrough/logistics-file-final-bottom.jpg)

::: info Changing the customer
Changing the customer on a logistics file updates it on every document in the file. This isn't allowed once a sales invoice exists.
:::

## Related Pages

- [Walkthrough: Containerised Import](/clearing-and-forwarding/import-walkthrough)
- [Imports](/clearing-and-forwarding/imports)
- [Exports](/clearing-and-forwarding/exports)
- [Freight Forwarding](/clearing-and-forwarding/freight-forwarding)
