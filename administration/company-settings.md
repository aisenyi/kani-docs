# Company Settings

Everything the app runs on is set up under **Administration**. The page groups the settings and lists like this:

| Group | What's there |
|---|---|
| **Clearing and Forwarding** | Ports, Discharge Terminals, ICDs, Shipping Lines |
| **Parties** | Shippers / Exporters, Consignees, Notify Parties |
| **Sales** | Items, Tax Types, Units of Measure, Suppliers |
| **Fleet** | Vehicles, Trailers, IT Drivers (In-Transit Drivers). See [Vehicles & Trailers](/fleet-management/vehicles-and-trailers). |
| **Workshop** | Service Tasks, Spare Parts. See [Service Jobs](/workshop/service-jobs#workshop-lists). |
| **Expenses and Payments** | Expense Types, Payment Methods, Exchange Rates, Expense Approval Defaults |
| **System** | Users, Roles, Employees |
| **Settings** | Company Details, Print Formats, Report Emails, Notifications |

## Company Details

Go to **Administration → Company Details**. These details are used across print formats, invoices and document headers. Change what you need, then select **Save Changes**.

![Company Details](/images/administration/company-details.jpg)

| Section | What to set |
|---|---|
| **Identification** | **Company Name**, **Phone** and **Email** (all required), TIN Number, VRN Number, Website |
| **Address** | Address Line 1 and 2, City, State / Region, Postal Code, Country |
| **Logo** | Upload a PNG, JPG or SVG (recommended height 80-120px). Use **Replace logo** or **Remove** to change it. The logo appears on printed documents. |
| **Default Terms & Conditions** | Separate terms for **Quotations** and **Sales Invoices**, such as validity, advance payment and your bank details. They're filled into every new quotation or invoice. Staff can still edit them on a document, and saving changed terms offers to update the default here. |
| **Quotations & Invoices** | **Decimal Places** for quantities, prices and amounts (0 to 6, default 2). This applies to new documents and to drafts when they're next saved. Approved documents keep the precision they were saved with. |
| **Document Numbering** | **Next Sales Invoice Number**, to carry on numbering from your previous system. It can only be set above your latest invoice. If you're importing old invoices, import them first, then set the next number. |

## Exchange Rates

Exchange rates convert amounts in other currencies to TZS. Go to **Administration → Exchange Rates** to see each rate's currency, **Rate (to TZS)**, **Effective Date**, notes and who created it. Filter the list by **Currency** or by **From Date** and **To Date**.

To add a rate:

1. Select **Add Rate**.
2. Choose the **Currency** (for example **USD - US Dollar**).
3. Enter the **Rate to TZS**. A line below shows what it means, for example *1 USD = 2580 TZS*.
4. Set the **Effective Date**, add any **Notes**, and select **Create**.

![Add Exchange Rate](/images/administration/exchange-rate-add.jpg)

When the rate changes, add a new rate with the date it takes effect. Use the pencil or bin icon on a rate to edit or delete it.

## Print Formats

Print formats are the templates used when you **Print** or download a document as a PDF. Go to **Administration → Print Formats** to see them grouped by document type: **Sales Invoices**, **Quotations**, **Imports**, **Exports** and **Trips** (trips have a **Delivery Note** and a **Road Manifest**).

![Print Formats](/images/administration/print-formats.jpg)

Each format shows whether it's the **Default** for its document type (a star), whether it's **Active**, and when it was last updated. The formats that come with Kani LMS are marked **System default** and can't be deleted.

- **Edit** (pencil) opens the format.
- **Duplicate** makes a copy you can change, leaving the original as it is.
- **Set as default** makes a format the one used for its document type.
- **New Print Format** starts a format from scratch.

When editing, you can set the **Name**, **Doctype**, **Page Size** (A4, A5, Letter, Legal), **Orientation** (Portrait or Landscape) and **Description**, and tick **Set as default for this doctype** and **Active**. The **Template** is written in HTML and CSS. **Show available variables** lists the document fields you can use in it.

To check your changes, enter a document number next to **Sample** (for example an invoice number such as *INV0046*) and select **Refresh Preview**. The PDF appears on the right. Select **Save** when you're happy with it.

![Editing a print format with a preview](/images/administration/print-format-edit.jpg)

::: tip
Editing a template needs some HTML knowledge. To be safe, **Duplicate** the system format and edit the copy, then **Set as default** once it looks right.
:::

## Related Pages

- [Users](/administration/users)
- [Roles & Permissions](/administration/roles-and-permissions)
