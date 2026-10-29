# Containers Management

Once an import's containers are delivered, the empties have to go back to the shipping line before demurrage starts. **Containers Management** lists every import container waiting to be returned, and records the return date and the shipping line's signed interchange receipt.

## Overview

Go to **Clearing & Forwarding → Containers Management**. Each container shows its number and size, the import and BL number, customer, shipping line, **Demurrage Start**, trip, **Status**, **Return Date** and **Interchange Doc**.

Use the buttons at the top to switch between **All**, **Pending Return** and **Returned**. Search by container number or BL number, and sort by **Demurrage Start** to see the containers that need returning soonest.

![Containers waiting to be returned](/images/containers-bonds/containers-list.jpg)

| Status | Meaning |
|---|---|
| **Pending Return** | The container hasn't gone back to the shipping line yet |
| **Returned** | The return date and interchange document have been recorded |

## Adding a Container to an Import

Containers come from the import, so they appear here as soon as they are added to one:

1. Open the import and go to the **Details** tab.
2. Under **Cargo**, set **Cargo Category** to **Containers** and choose the **Container Owner** (SOC, Shipping Line Container, Company Owned Container, Rental or RORO).
3. In the **Import Containers** section that appears, select **Add Container**.
4. Enter the **Container Number** (required), **Size** (for example 20 FT GP, 40 FT GP, 40RF), **Cargo Type**, **Number of Packages**, and the **Gross**, **Net** and **Tare Weight (kgs)**.
5. Select **Add Container**, then **Update Import** to save.

![Add Container dialog](/images/import-walkthrough/import-add-container.jpg)

The containers also carry through to any [transport request](/fleet-management/transport-requests) raised from the import, where each one is assigned a vehicle.

## Setting the Demurrage Start Date

The **Demurrage Start** column comes from the import. On the import's **Details** tab, under **Dates**, enter the **Demurrage Start Date**: the first day the shipping line will charge for the container, usually the discharge date plus the free days on the BL. Select **Update Import** to save.

![Demurrage Start Date on the import](/images/containers-bonds/import-demurrage-date.jpg)

## Recording a Container Return

When the empty container is handed back to the shipping line's depot:

1. Find the container under **Pending Return** and select **Mark as Returned**.
2. Set the **Return date**.
3. Select **Upload interchange document** and attach the shipping line's signed interchange receipt (EIR). It's required.
4. Select **Save**.

![Record return dialog](/images/containers-bonds/container-return-dialog.jpg)

The container moves to **Returned**, showing the return date and a link to open the interchange document.

![Returned containers](/images/containers-bonds/containers-returned.jpg)

## Correcting a Return

If the return date or document is wrong, select **Edit Return** on the container's row. Change the **Return date**, or remove the interchange document with the bin icon and upload the right one, then select **Save**.

If the container was marked as returned by mistake, select **Undo Return** and confirm. The container goes back to **Pending Return**. Its interchange document is unlinked from the container but kept on file.

![Undo container return](/images/containers-bonds/container-undo-dialog.jpg)

::: info Closed imports
**Edit Return** and **Undo Return** aren't available while the container's import is closed. [Reopen the import](/clearing-and-forwarding/imports#transport-and-closing) first.
:::

## Related Pages

- [Imports](/clearing-and-forwarding/imports)
- [Exports](/clearing-and-forwarding/exports)
- [Walkthrough: Containerised Import](/clearing-and-forwarding/import-walkthrough)
