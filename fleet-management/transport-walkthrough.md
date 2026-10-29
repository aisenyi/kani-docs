# Walkthrough: Transit Transport, Start to Finish

This guide follows one transport job through Kani LMS, from adding a new truck to a **Completed** round trip. A truck carries mining spares from Dar es Salaam to Lusaka, Zambia, then returns empty.

Each step links to the page that covers that screen in more detail.

::: tip The sample job used in this guide
| Record | Sample value |
|---|---|
| Trailer | T418EKP: CIMC 2025, 3 axles (12 wheels) |
| Driver | Baraka Mwakyusa (DRV-014) |
| Vehicle | T512EKR: Sinotruk Howo A7, axle layout 6x4, 0.45 L/km with cargo, 0.32 L/km empty |
| Logistics File | LF0013: Service **Transport - Transit**, Kilemba Mining |
| Transport Request | TR0008: Dar es Salaam → Lusaka, 1,970 km, 28,000 kg loose cargo |
| Trip | TRP0005: main leg (loaded) + empty return |
| Fuel | 886.5 L outbound (from a supplier) + 630.4 L return (cash) |

All names and numbers are sample data.
:::

## The flow at a glance

1. [Add the trailer](#_1-add-the-trailer)
2. [Add the driver](#_2-add-the-driver)
3. [Add the vehicle](#_3-add-the-vehicle): axle layout and fuel consumption matter here
4. [Create the transport logistics file](#_4-create-the-transport-logistics-file)
5. [Complete the transport request](#_5-complete-the-transport-request): distance and cargo
6. [Assign the vehicle](#_6-assign-the-vehicle)
7. [Start the trip](#_7-start-the-trip)
8. [Request fuel](#_8-request-fuel)
9. [Review and approve the fuel](#_9-review-and-approve-the-fuel)
10. [Dispense the fuel](#_10-dispense-the-fuel)
11. [Offload and end the main leg](#_11-offload-and-end-the-main-leg)
12. [Add the return leg](#_12-add-the-return-leg)
13. [Fuel the return and complete the trip](#_13-fuel-the-return-and-complete-the-trip)

::: warning Two settings to get right on every vehicle
- **Axle Layout** decides which tyre positions the vehicle has on the **Tyre Board**. Pick the wrong one and you can't record tyres against the right wheels.
- **Fuel Consumption (With Cargo / Empty)** is what Kani LMS uses to suggest how much fuel a trip needs. Leave it blank and you lose the fuel estimate on requests and approvals.
:::

---

## 1. Add the trailer

Add the trailer first, so you can link it to the truck as its default.

1. Go to **Administration → Fleet → Trailers** and select **New Trailer**.
2. Enter the **Plate Number** and **Chassis Number** (both required), plus the **Make** and **Year**.
3. Choose the **Axle Layout** (required): *2 axles (8 wheels)*, *3 axles (12 wheels)* or *3 axles super-single (6 wheels)*.
4. Set the **Status** and select **Save**. Documents (registration, inspection) can be attached once the trailer is saved.

![New Trailer form](/images/transport-walkthrough/trailer-new.jpg)

Details: [Vehicles & Trailers → Adding a Trailer](/fleet-management/vehicles-and-trailers#adding-a-trailer)

## 2. Add the driver

Drivers are employees.

1. Go to **Administration → Employees** and select **New Employee**.
2. Enter the name, **Employee Number**, department (**Fleet**) and position (**Driver**).
3. Add the phone number, **Driving Licence** and **Passport** number. Transit trips cross borders, so the passport is shown on the trip.
4. Select **Save**.

![New Employee form for a driver](/images/transport-walkthrough/employee-new.jpg)

## 3. Add the vehicle

Go to **Administration → Fleet → Vehicles** and select **New Vehicle**.

1. **Vehicle Information**: **Plate Number** (required), chassis, make, model, year, **Capacity** and **Initial Odometer**.
2. **Axle Layout** (required). See below.
3. **Default Trailer** and **Default Driver**: pick the trailer and driver from steps 1 and 2. They fill in automatically whenever this vehicle is assigned.
4. **Insurance**: company, policy number, start and end dates.
5. **Fuel**: **Fuel Type** (required) and the three **Fuel Consumption** rates. See below.
6. Select **Save**. Vehicle documents can be attached once the vehicle is saved.

![New Vehicle: vehicle information and axle layout](/images/transport-walkthrough/vehicle-new-info.jpg)

![Default trailer and driver](/images/transport-walkthrough/vehicle-new-trailer-driver.jpg)

### Why the axle layout matters

The axle layout tells Kani LMS how many wheels the vehicle has and where they are. The **Tyre Board** (**Workshop → Tyre Board**) uses it to draw a position for every wheel, and tyres are fitted, rotated and removed against those positions.

Our truck is a **6x4** (10 wheels, 2 drive axles), so the Tyre Board shows the steer pair (1L, 1R), two drive axles with twin wheels (2LO, 2LI, 2RI, 2RO and 3LO, 3LI, 3RI, 3RO), plus spares SP1 and SP2. That's 12 positions.

![Tyre Board for a 6x4 truck](/images/transport-walkthrough/tyre-board-vehicle.jpg)

The 3-axle trailer gets its own 12 wheel positions plus two spares.

![Tyre Board for a 3-axle trailer](/images/transport-walkthrough/tyre-board-trailer.jpg)

| Vehicle axle layout | Wheels |
|---|---|
| Light vehicle | 4 |
| 4x2 | 6 |
| 6x2 (1 drive axle) | 10 |
| 6x4 (2 drive axles) | 10 |
| 8x4 (twin steer) | 12 |

### Why fuel consumption matters

Enter how many litres per kilometre the truck uses:

- **With Cargo**: loaded. Our truck: **0.45 L/km**.
- **Empty**: running back with no load. Our truck: **0.32 L/km**.
- **Flatbed**: running as a flatbed. Our truck: **0.36 L/km**.

Kani LMS multiplies the trip distance by the right rate to estimate the fuel a leg needs. That estimate is shown when fuel is requested and when it is approved, so approvers can spot a request that is too high. For this trip:

| Leg | Distance | Rate | Estimated fuel |
|---|---|---|---|
| Main (loaded) | 1,970 km | 0.45 L/km | **886.5 L** |
| Empty return | 1,970 km | 0.32 L/km | **630.4 L** |
| Round trip | 3,940 km | | **1,516.9 L** |

![Fuel type and consumption rates](/images/transport-walkthrough/vehicle-new-fuel.jpg)

Details: [Vehicles & Trailers](/fleet-management/vehicles-and-trailers)

## 4. Create the transport logistics file

1. Go to **Logistics Files → New Logistics File**.
2. Choose the **Service**: **Transport - Transit** for cargo going to another country (**Transport - Local** for moves inside the country).
3. Select the **Customer**, optionally a **Quotation**, and the **Documents Received Date**.
4. Enter the **Pickup Location City** and **Country** (Dar es Salaam, Tanzania) and the **Delivery Location City** and **Country** (Lusaka, Zambia).
5. Select **Create Logistics File**.

![New transport logistics file](/images/transport-walkthrough/transport-lf-new.jpg)

There's no import or export for a transport-only job, so Kani LMS creates a **transport request** straight away and opens it. It's labelled **standalone** because it isn't linked to an import.

![Transport request created from the logistics file](/images/transport-walkthrough/transport-tr-created.jpg)

## 5. Complete the transport request

1. Check the **Transport Type** (Transit) and the pickup and delivery locations copied from the file.
2. Enter the **Distance (km)**: **1970**. This is required, and it drives the fuel estimate. Use **Notes** for the route (for example *via Morogoro, Iringa, Mbeya, Tunduma/Nakonde border*).
3. Under **Cargo**, choose the **Cargo Category** (here **Loose/Break Bulk**) and describe the cargo.
4. Under **Cargo Quantity**, enter the total **Weight (kgs)** and **CBM**.
5. Select **Save**.

![Distance and notes](/images/transport-walkthrough/transport-tr-distance.jpg)

::: info Save before assigning
If you've changed the cargo, Kani LMS asks you to save the transport request before you can assign vehicles.
:::

## 6. Assign the vehicle

For loose cargo, you add one row per truck under **Truck Assignments** and say how much each truck carries.

1. Select **Add Truck**, then enter the **Weight** and **CBM** for that truck. The **Total**, **Assigned** and **Unassigned** rows show how much cargo is still without a truck.
2. Select **Assign Vehicle** on the row.
3. Choose **Internal vehicle** and pick **T512EKR**. The default trailer and driver from step 3 fill in, with the driver's licence, passport and phone.
4. Select **Assign**.

![Truck Assignments row](/images/transport-walkthrough/transport-tr-truck-row.jpg)

![Assign Vehicle dialog](/images/transport-walkthrough/transport-assign-vehicle.jpg)

The request is now **Fully Assigned**. While any vehicle is assigned, the cargo category is locked.

![Fully assigned transport request](/images/transport-walkthrough/transport-tr-assigned.jpg)

Details: [Transport Requests](/fleet-management/transport-requests)

## 7. Start the trip

Go to **Fleet Management → Assigned Vehicles** and select **Start Trip** on the assignment.

![Assigned Vehicles](/images/transport-walkthrough/transport-assigned-vehicles.jpg)

The trip (**TRP0005**) opens **In Progress** on its **Main leg**, with the vehicle, trailer, driver and route.

![Trip started](/images/transport-walkthrough/transport-trip-started.jpg)

## 8. Request fuel

1. On the trip, open the **Fuel Requests** tab and select **Add Fuel Request**.
2. Check the **Fuel type** and set the **Required on date**.
3. Enter the **Liters**. Under the box, Kani LMS shows the estimate for this leg: **Approx: 886.50 L** (1,970 km × 0.45 L/km).
4. Enter the **Unit price** and **Currency**. The **Total** is calculated (TZS 2,792,475.00).
5. Add a **Description**, choose the **Reviewer**, and select **Add**.

![Add Fuel Request](/images/transport-walkthrough/fuel-request-filled.jpg)

The request shows **Pending Review** on the trip.

## 9. Review and approve the fuel

Go to **Fleet Management → Fuel Approvals**. The trip is shown as **TRP0005M**, where *M* means the main leg (*R* is the return).

![Fuel Approvals list](/images/transport-walkthrough/fuel-approvals-list.jpg)

1. Open the request. Compare **Liters** against **Approx. Fuel Required**, which uses the trip distance and the vehicle's consumption rates.
2. The reviewer selects **Review**, picks the **Approver**, adds any comments and confirms. The status changes to **Pending Approval**.
3. The approver opens it, selects **Approve**, adds any comments and confirms.

![Fuel request details](/images/transport-walkthrough/fuel-details-review.jpg)

![Review dialog](/images/transport-walkthrough/fuel-review-dialog.jpg)

![Approve dialog](/images/transport-walkthrough/fuel-approve-dialog.jpg)

Details: [Fuel Approvals & Dispensions](/fleet-management/fuel)

## 10. Dispense the fuel

Approved fuel isn't the same as fuel in the tank. Record what was actually issued.

1. Go to **Fleet Management → Fuel Dispensions**. The approved request is listed as **Not dispensed**.
2. Select **Dispense**.
3. Choose the **Dispension type**:
   - **From supplier**: pick the **Supplier** (the fuel station) and the **Litres dispensed**.
   - **Cash**: pick the **Payment method**, the **Amount per litre** and the **Litres dispensed**.
4. Add any **Notes** and select **Save**.

For the main leg we filled up at a supplier, Chin's Gas and Oil, with 880 L. Litres dispensed can't be more than the approved amount.

![Dispense from a supplier](/images/transport-walkthrough/fuel-dispense-supplier.jpg)

The fuel request on the trip now shows **Dispensed**.

## 11. Offload and end the main leg

When the cargo is delivered in Lusaka:

1. On the trip's **Details** tab, fill in the seven **Loading & Offloading** dates.
2. Add the **Offloaded weight**, **Client ref no.** and any **Notes**.
3. Under **Delivery Information**, upload the signed delivery note (proof of delivery).
4. Select **Save**, then **End Leg** and confirm.

![Offloading details](/images/transport-walkthrough/trip-main-offloading.jpg)

## 12. Add the return leg

As soon as the main leg ends, Kani LMS asks: **Is the truck returning empty?**

![Empty return prompt](/images/transport-walkthrough/trip-return-prompt.jpg)

- **Yes, add return leg** adds an empty return leg straight away.
- **No** leaves the trip **Completed** on its main leg. You can still add a return from the trip.

From a completed main leg you have two choices:

- **Add empty return**: the truck comes back with no cargo. Enter **From**, **To** and **Distance**. Fuel is estimated with the vehicle's **Empty** rate, and the return's costs go to the main leg's logistics file.
- **Add return leg**: the truck comes back carrying cargo. The return cargo needs its own transport request (for example from a new **Transport - Transit** logistics file, Lusaka → Dar es Salaam). **Add return leg** takes you to the transport request assignments to link it.

![Add Empty Return dialog](/images/transport-walkthrough/trip-add-empty-return.jpg)

Our truck comes back empty, Lusaka → Dar es Salaam, 1,970 km. The return leg shows **Approx. fuel: 630.4 L (empty consumption)**.

![Empty return leg](/images/transport-walkthrough/trip-empty-return.jpg)

## 13. Fuel the return and complete the trip

1. On the return leg, add a fuel request for **630.4 L**. Review and approval work as in step 9. This time, the approval shows the **Trip Distance** for main plus return (3,940 km), the combined **Approx. Fuel Required** (1,516.90 L), and the **Previous Fuel Approved** for the main leg (886.50 L).
2. Dispense it. This time we paid **Cash**.
3. When the truck is back, set the return leg's **Departure date** and **Arrival date** (both required), select **Save**, then **End Leg** and confirm.

![Return fuel approval with previous fuel approved](/images/transport-walkthrough/fuel-details-return.jpg)

![Cash dispension for the return](/images/transport-walkthrough/fuel-dispense-cash-return.jpg)

![Return leg dates](/images/transport-walkthrough/trip-empty-return-dates.jpg)

Both legs now show **Completed**, and the **Fuel Requests** tab shows both requests **Dispensed**.

![Completed trip](/images/transport-walkthrough/trip-fully-completed.jpg)

![Both fuel requests dispensed](/images/transport-walkthrough/trip-fuel-requests-dispensed.jpg)

## Related Pages

- [Vehicles & Trailers](/fleet-management/vehicles-and-trailers)
- [Transport Requests](/fleet-management/transport-requests)
- [Trips](/fleet-management/trips)
- [Fuel Approvals & Dispensions](/fleet-management/fuel)
- [Logistics Files](/clearing-and-forwarding/logistics-files)
