# Bond Management

Transit cargo travels under a customs bond until it leaves the country. **Bond Management** lists every transit bond set on an import's cargo (containers, vehicles, bulk and loose truck loads), with its Sub T1 reference, value, truck and driver, so you can see what is still open and acquit bonds once they're cleared.

## Overview

Go to **Clearing & Forwarding → Bond Management**. The cards at the top show the number of **Open Bonds**, the total **Open Bond Value**, and the number of **Acquitted Bonds**.

Each row shows the import, BL number, cargo type, **Sub T1 Ref**, **Bond Value**, **Status**, vehicle and driver. Search by BL, reference, container, chassis or T1 number, and filter by status (**Open** or **Acquitted**) and type (**Container**, **Vehicle**, **Bulk**, **Loose/Break Bulk**).

![Bond Management](/images/containers-bonds/bonds-list-open.jpg)

## Bond Statuses

| Status | Meaning |
|---|---|
| **Open** | The bond is active. The cargo is still under customs control. |
| **Acquitted** | The bond has been cleared and closed. It can't be reopened. |

## Registering a Bond

Bonds are entered on the transport request of a transit import, one per truck load:

1. Open the import and select **View Transport Request**.
2. Under **Truck Assignments**, select **Add Truck** (or use an existing row) and enter the load's **Weight (kgs)** and **CBM**.
3. Enter the **Sub T1 Ref** (the T1 transit document number for that load) and the **Bond Value**.
4. Select **Save**. The row's **Bond Status** shows **Open**.
5. Select **Assign Vehicle** on the row to add the truck and driver. See [Transport Requests](/fleet-management/transport-requests#assigning-a-vehicle).

![Truck row with Sub T1 Ref and Bond Value](/images/containers-bonds/bond-truck-row.jpg)

The bond then appears on **Bond Management** with the truck and driver.

::: info Transit only
Bond columns appear on transport requests for transit imports. Local transport requests don't have them.
:::

## Acquitting a Bond

When the cargo has left the country and customs has cleared the bond:

1. On **Bond Management**, find the open bond and select **Cancel** on its row.
2. Kani LMS asks *"Cancel bond …? Status will change to Acquitted. This cannot be undone."* Select **Cancel Bond** to confirm, or **Keep Open** to back out.

![Confirm acquittal](/images/containers-bonds/bond-cancel-dialog.jpg)

The bond moves to **Acquitted**, the cards update, and the row has no more actions.

![Acquitted bond](/images/containers-bonds/bonds-list-acquitted.jpg)

The truck row on the transport request also shows **Acquitted**, and its **Sub T1 Ref** and **Bond Value** are locked.

![Acquitted bond on the transport request](/images/containers-bonds/bond-tr-acquitted.jpg)

## Related Pages

- [Imports](/clearing-and-forwarding/imports)
- [Transport Requests](/fleet-management/transport-requests)
