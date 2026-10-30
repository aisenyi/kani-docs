# Exports

An export is a clearance job for cargo leaving the country. You don't create exports directly. Create a [Logistics File](/clearing-and-forwarding/logistics-files) with an **Export - Local** or **Export - Transit** service, and Kani LMS creates the export for you.

## Overview

Go to **Clearing & Forwarding → Exports**. The list shows each export's ID, booking number, customer, file number, documents received date, created date and status (**Open** or **Closed**). Search by export ID, sort by any of the export's dates, and use **Add Filter** to narrow the list. **New Logistics File** starts a new job.

![Exports list](/images/exports/exports-list.jpg)

Open an export to see its four tabs: **Details**, **Attachments**, **Expenses** and **Daily Status**. The buttons at the top are **Create Transport Request** (or **View Transport Request** once one exists), **Print**, **Close Export** and **Update Export**.

## Creating an Export

1. Go to **Logistics Files → New Logistics File**, or select **Create Logistics File** on an approved quotation.
2. Choose the **Service**: **Export - Local** or **Export - Transit**.
3. Select the **Customer** and, optionally, the **Quotation**.
4. Set the **Documents Received Date** and enter the **Booking Number**.
5. Select **Create Logistics File**.

![New logistics file for an export](/images/exports/export-new-logistics-file.jpg)

Kani LMS creates the export (for example **EXP0002**) and links it to the logistics file. Open it from the file's **Linked Document** section or from the **Exports** list to fill in the details.

## Key Fields

All fields are on the **Details** tab. Select **Update Export** to save. A **Not Saved** badge shows while you have unsaved changes.

| Section | Fields |
|---|---|
| **Basic Information** | Logistics File (link), Booking Number, **Export Type** (Local, Transit, Re-export, Temporary Export), Customer (change it on the logistics file), Documents Received Date |
| **Shipping Details** | Vessel Name, Voyage No, Shipping Line |
| **Important Dates** | Engagement Date, ETA, Payment Cut Off Date, Stuffing Date, Delivery to Terminal Date, Sailing Date / Vessel Departure Date, Delivery of Full Containers to Terminal Date, OBL Collected Date, Actual Time of Arrival (ATA), Berthing Date |
| **Clearing & Scanner Milestones** | TRA Release Obtained, Lodge Port Charges, Port Charges Paid, Permit Obtained Date, Assigned Delivery Date, Permit Submitted to Client, File Submitted to Scanner, Scanner Report Collected, Scanner Report Sent to Client |
| **Ports & Terminal** | Port of Loading, Loading Terminal, Port of Discharge |
| **Cargo** | Cargo Category (Vehicles / Containers / Bulk / Loose/Break Bulk), Cargo Description |

Fill in the dates and milestones as they happen, so the whole team can see where the job is. You can also sort and filter the **Exports** list by any of them.

![Export details](/images/exports/export-details.jpg)

### Containers

When **Cargo Category** is **Containers**, an **Export Containers** section appears. Select **Add Container** and enter the **Container No** (required), **Seal No**, **Number of Bundles**, **Net Weight (kg)**, **Gross Weight (kg)** and **Empty Container Received Date**, then select **Add**.

![Add Container](/images/exports/export-add-container.jpg)

## Attachments

On the **Attachments** tab, click the upload area or drag files onto it (PDF, DOC, DOCX, XLS, XLSX, JPG, JPEG, PNG or GIF, up to 32 MB each). Files upload straight away. Use the icons on each file to preview, download or delete it.

## Expenses and Daily Status

These work the same way as on an import:

- **Expenses**: select **Add Expense** to request money for the job. Each expense goes through review and approval before it can be paid. See [Expense Approvals](/expenses-and-payments/expense-approvals).
- **Daily Status**: type a short update and select **Add**. Each entry records the date, time and who reported it.

## Transport and closing

When the cargo needs to be moved, select **Create Transport Request**. Kani LMS creates a transport request linked to the export and its logistics file, and opens it. The cargo details are copied from the export, so only the vehicle and driver assignment is edited there. See [Transport Requests](/fleet-management/transport-requests).

To finish the job, select **Close Export** and confirm in the **Close export** box. Kani LMS checks that all cargo has been delivered through completed [trips](/fleet-management/trips). If it hasn't, a message tells you what is missing (for example *Cannot close: No cargo items found to verify delivery.*).

A closed export can't be edited until it's reopened.

## Related Pages

- [Logistics Files](/clearing-and-forwarding/logistics-files)
- [Imports](/clearing-and-forwarding/imports)
- [Transport Requests](/fleet-management/transport-requests)
- [Containers Management](/clearing-and-forwarding/containers)
