# Imports

An import is a clearance job for cargo coming into the country. You don't create imports directly. Create a [Logistics File](/clearing-and-forwarding/logistics-files) with an **Import - Local** or **Import - Transit** service, and Kani LMS creates the import for you.

For a full worked example, see [Walkthrough: Containerised Import](/clearing-and-forwarding/import-walkthrough).

## Overview

Go to **Clearing & Forwarding → Imports**. The list shows each import's ID, BL number, customer, file number, documents received date and status (**Open** or **Closed**). Search by BL number. **New Logistics File** starts a new job.

![Imports list](/images/import-walkthrough/imports-list.jpg)

Open an import to see its four tabs: **Details**, **Attachments**, **Expenses** and **Daily Status**. The buttons at the top are **Create Transport Request** (or **View Transport Request** once one exists), **Print**, **Close Import** and **Update Import**.

## Key Fields

All fields are on the **Details** tab. Select **Update Import** to save. A **Not Saved** badge shows while you have unsaved changes.

| Section | Fields |
|---|---|
| **Basic Information** | Logistics File (link), **BL Number** (required), House Bill of Lading, Customer (change it on the logistics file), Point of Entry (Port / Air / Land Border), Documents Received Date |
| **Parties** | Shipper/Exporter, Consignee, Notify Party. Type a name and choose **Add New** to create one. |
| **Shipping Details** | Shipping Line, Vessel Name, Voyage No |
| **Ports & Destination** | Port of Loading, Port of Discharge, Cargo Destination Country, Cargo Destination City/Town |
| **Dates** | Expected Time of Arrival, Actual Time of Arrival, Discharge Date, Storage Start Date (calculated automatically), Carry In Date, Demurrage Start Date |
| **Discharge & ICD** | Discharge Terminal, ICD |
| **Cargo** | Cargo Category (Vehicles / Containers / Bulk / Loose/Break Bulk), Container Owner, Cargo Description |

![Import details: basic information and parties](/images/import-walkthrough/import-details-basic.jpg)

![Import details: dates, discharge terminal and ICD](/images/import-walkthrough/import-details-ports-dates.jpg)

### Containers

When **Cargo Category** is **Containers**, an **Import Containers** section appears. Select **Add Container** and enter the **Container Number** (required), **Size**, **Cargo Type**, **Number of Packages** and the gross, net and tare weights. Use the pencil and bin icons to edit or remove a container.

![Cargo section with containers](/images/import-walkthrough/import-details-cargo-containers.jpg)

## Attachments

On the **Attachments** tab, click the upload area or drag files onto it (PDF, DOC, DOCX, XLS, XLSX, JPG, JPEG, PNG or GIF, up to 32 MB each). Files upload straight away. Use the icons on each file to preview, download or delete it.

![Attachments tab](/images/import-walkthrough/import-attachments.jpg)

## Expenses

On the **Expenses** tab, select **Add Expense** to request money for the job, such as terminal handling, duties or storage. Each expense goes through review and approval before it can be paid. See [Expense Approvals](/expenses-and-payments/expense-approvals).

![Expenses tab](/images/import-walkthrough/import-expense-pending.jpg)

## Daily Status

On the **Daily Status** tab, type a short update and select **Add**. Each entry records the date, time and who reported it, so anyone can see the job's progress at a glance.

![Daily Status tab](/images/import-walkthrough/import-daily-status.jpg)

## Transport and closing

When the cargo needs to be delivered, select **Create Transport Request**. The import must first have a **Shipper/Exporter**, **Consignee**, **Notify Party**, **Cargo Destination Country**, **Cargo Destination City/Town** and **Discharge Date**. If any are missing, a **Missing details** box lists them. See [Transport Requests](/fleet-management/transport-requests).

To finish the job, select **Close Import** and confirm in the **Close import** box. Kani LMS only closes the import when:

- a transport request has been created for it, and
- every cargo item is confirmed delivered through a completed [trip](/fleet-management/trips).

Otherwise a message tells you what is missing. Closing can't be undone from the import screen.

![Closed import](/images/import-walkthrough/import-closed.jpg)

## Related Pages

- [Walkthrough: Containerised Import](/clearing-and-forwarding/import-walkthrough)
- [Logistics Files](/clearing-and-forwarding/logistics-files)
- [Bond Management](/clearing-and-forwarding/bonds)
- [Containers Management](/clearing-and-forwarding/containers)
