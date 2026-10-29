# Transport Requests

A transport request asks for cargo to be moved by road, either by your own fleet or by a sub-contractor. Each container (or cargo item) on the request is assigned a vehicle and driver, and the move itself is then run as a [trip](/fleet-management/trips).

## Raising a Transport Request

There are two ways a transport request is created:

- **From a transport logistics file**: creating a logistics file with the service **Transport - Local** or **Transport - Transit** creates a transport request straight away and opens it. It's labelled **standalone** because it isn't linked to an import. See [Standalone transport requests](#standalone-transport-requests).
- **From an import**, as below.

### From an import

From an import, select **Create Transport Request**. The import must already have a **Shipper/Exporter**, **Consignee**, **Notify Party**, **Cargo Destination Country**, **Cargo Destination City/Town** and **Discharge Date**. If any are missing, a **Missing details** box lists them, one per line.

![Missing details before creating a transport request](/images/import-walkthrough/transport-request-missing-details.jpg)

Kani LMS creates the request (for example **TR0007**) and links it to the logistics file and import. It copies over the customer, cargo category, cargo description and containers.

1. Check the **Request/Order Received** date, **Transport Type** (Local or Transit), and the pickup and delivery city and country.
2. Enter the **Distance (km)**, which is required, and any **Notes** for the dispatcher.
3. Select **Save**.

![Transport request created from an import](/images/import-walkthrough/transport-request-form.jpg)

The **Containers** section lists the cargo copied from the import. Only the vehicle and driver can be changed here.

![Containers on a transport request](/images/import-walkthrough/transport-request-containers.jpg)

### Standalone transport requests

A standalone request copies the customer and the pickup and delivery locations from the logistics file. You fill in the rest:

1. Check the **Transport Type** and locations, and enter the **Distance (km)** (required). The distance is used to estimate trip fuel, so make it accurate. Use **Notes** for the route.
2. Choose the **Cargo Category** and enter the **Cargo Description**.
3. Under **Cargo Quantity**, enter the total **Weight (kgs)** and **CBM**.
4. Select **Save**.

![Distance and notes on a standalone transport request](/images/transport-walkthrough/transport-tr-distance.jpg)

::: info Save before assigning
If the cargo has unsaved changes, Kani LMS asks you to save the transport request before you can assign vehicles.
:::

### Truck assignments for loose cargo

For cargo that isn't in containers (for example **Loose/Break Bulk**), a **Truck Assignments** section lets you split the load across trucks:

1. Select **Add Truck** to add a row.
2. Enter the **Weight** and **CBM** that truck will carry.
3. Repeat for each truck. The **Total**, **Assigned** and **Unassigned** rows show what's still without a truck.
4. Select **Assign Vehicle** on each row.

![Truck Assignments](/images/transport-walkthrough/transport-tr-truck-row.jpg)

## Assigning a Vehicle

1. Select **Assign Vehicle** on a container or truck row.
2. Choose the **Type**:
   - **Internal vehicle**: pick the **Vehicle**. Its default **Trailer** and **Driver (Employee)** fill in, along with the plate numbers, licence, passport and phone. Change them if needed. Vehicles in the workshop are flagged in the list.
   - **Sub-contracted**: pick the **Supplier**, then type the vehicle and trailer plate numbers and the driver's details.
   - **Self drive**: for a vehicle that is itself the cargo and is driven to its destination.
3. Select **Assign**.

![Assign Vehicle dialog](/images/import-walkthrough/transport-assign-vehicle.jpg)

On a truck row, the dialog also shows that truck's **Weight** and **CBM**:

![Assign Vehicle for a truck row](/images/transport-walkthrough/transport-assign-vehicle.jpg)

The request's status changes from **Unassigned** to **Fully Assigned** once every container has a vehicle. The assignment then appears on **Fleet Management → Assigned Vehicles**, where the trip is started.

![Transport request fully assigned](/images/import-walkthrough/transport-request-assigned.jpg)

::: info Cargo category is locked once assigned
While any vehicle is assigned, you can't change the **Cargo Category**. Remove all vehicle assignments first.
:::

## Assigned Vehicles

**Assigned Vehicles** is the dispatch board: every truck and driver currently assigned to a transport request. Search by TR number, plate, driver or container, or filter by assignment type, status and cargo type. Select **Start Trip** to dispatch.

![Assigned Vehicles](/images/import-walkthrough/assigned-vehicles.jpg)

## Related Pages

- [Trips](/fleet-management/trips)
- [Vehicles & Trailers](/fleet-management/vehicles-and-trailers)
- [Imports](/clearing-and-forwarding/imports)
- [Walkthrough: Transit Transport](/fleet-management/transport-walkthrough)
