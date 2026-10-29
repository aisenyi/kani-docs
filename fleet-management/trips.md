# Trips

A trip is the actual journey of a vehicle carrying cargo for a transport request. It runs from dispatch to delivery, and confirming delivery on the trip is what lets you close the related import.

## Overview

Go to **Fleet Management → Trips** to see every trip, with its transport request, legs, vehicle, driver, route, start time and status.

## Starting a Trip

Trips are started from **Fleet Management → Assigned Vehicles** by selecting **Start Trip** on an assignment. See [Transport Requests](/fleet-management/transport-requests#assigned-vehicles).

::: info One open trip per vehicle
A vehicle can only have one open trip at a time. If you see *"Vehicle … has an open trip - end it before starting a new one"*, end the other trip first or assign a different vehicle to the transport request.
:::

The trip opens **In Progress** and shows:

- **Vehicle & Driver**: vehicle kind (internal or sub-contracted), plates, driver, licence and phone, plus a **Vehicle position** box you can update as the truck moves
- the legs: **Main leg**, plus any return leg (see [Return Legs](#return-legs))
- links to the **Customer**, **Transport Request**, **Logistics File** and **Import**
- tabs for **Attachments**, **Fuel Requests**, **Expenses** and **Daily Status**
- **Cargo & Route**: container number, weight, description, route and distance

![Trip in progress](/images/import-walkthrough/trip-in-progress.jpg)

## Trip Fuel

Fuel is requested per leg from the trip's **Fuel Requests** tab, then reviewed, approved and dispensed. See [Fuel Approvals & Dispensions](/fleet-management/fuel).

## Trip Expenses

Expenses raised from a trip's **Expenses** tab (for example driver allowances or inspection fees) go through the same review and approval as job expenses. See [Expense Approvals](/expenses-and-payments/expense-approvals).

## Completing a Trip

To end a leg, Kani LMS needs proof that the cargo was delivered.

1. Under **Loading & Offloading**, fill in all seven dates (they are all required): loading point arrival, loading, loading point departure, offloading point arrival, offloading, offloading point departure, and **Delivery date**.
2. Optionally add the **Offloaded weight**, **Client ref no.** and **Notes**, then select **Save**.
3. Under **Delivery Information**, select **Upload signed delivery note** and attach the signed proof of delivery (PDF or image). You can do this before or after the dates; uploading or removing the file doesn't clear anything you've typed.
4. Select **End Leg** and confirm in the **End Leg** box.

![Loading & Offloading dates and proof of delivery](/images/import-walkthrough/trip-delivery-details.jpg)

If anything is missing, **End Leg** lists the fields still needed. To replace the delivery note, use the bin icon and confirm **Remove**, then upload the new one. Once ended, the leg and the trip show **Completed**, and the cargo counts as delivered for the import.

![Completed trip](/images/import-walkthrough/trip-completed.jpg)

While a leg is in progress, **Cancel Leg** cancels it instead of completing it.

## Return Legs

As soon as a main leg ends, Kani LMS asks **Is the truck returning empty?** Select **Yes, add return leg** to add an empty return straight away, or **No** to leave the trip completed on its main leg.

![Empty return prompt](/images/transport-walkthrough/trip-return-prompt.jpg)

A completed main leg also has two buttons for adding a return later:

![Completed main leg with return options](/images/transport-walkthrough/trip-main-completed.jpg)

### Empty return

1. Select **Add empty return**.
2. Check **From** and **To** (they default to the reverse of the main leg) and the **Distance (km)**.
3. Select **Add**.

![Add Empty Return](/images/transport-walkthrough/trip-add-empty-return.jpg)

The return leg opens **In Progress** with a **No cargo** label. Its fuel is estimated with the vehicle's **Empty** consumption rate (for example *Approx. fuel: 630.4 L (empty consumption)*), and its costs go to the main leg's logistics file. Request fuel for it from the **Fuel Requests** tab, the same way as for the main leg.

![Empty return leg](/images/transport-walkthrough/trip-empty-return.jpg)

To end it, set the **Departure date** and **Arrival date** (both required), select **Save**, then **End Leg** and confirm. When every leg is completed, the trip shows **Completed**.

![Trip with both legs completed](/images/transport-walkthrough/trip-fully-completed.jpg)

### Return with cargo

If the truck brings cargo back, the return cargo needs its own [transport request](/fleet-management/transport-requests). Select **Add return leg** on the trip to go to the transport request assignments and link it.

## Related Pages

- [Transport Requests](/fleet-management/transport-requests)
- [Fuel Approvals & Dispensions](/fleet-management/fuel)
- [Walkthrough: Transit Transport](/fleet-management/transport-walkthrough)
- [Walkthrough: Containerised Import](/clearing-and-forwarding/import-walkthrough)
