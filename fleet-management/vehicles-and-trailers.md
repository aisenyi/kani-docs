# Vehicles & Trailers

Your fleet register: the trucks and trailers that transport requests and trips are assigned to. Each vehicle's **axle layout** sets its tyre positions, and its **fuel consumption** rates drive the fuel estimates on trips.

## Overview

Vehicles and trailers are under **Administration → Fleet**:

- **Vehicles**: every truck, with its plate, make and model, axle layout, default trailer and driver, and status
- **Trailers**: every trailer, with its plate, make, axle layout and status
- **IT Drivers**

Drivers themselves are employees, set up under **Administration → Employees**.

![Administration](/images/transport-walkthrough/administration.jpg)

![Vehicles list](/images/transport-walkthrough/vehicles-list.jpg)

## Adding a Trailer

Add trailers before vehicles, so you can link a trailer to a truck as its default.

1. Go to **Administration → Fleet → Trailers** and select **New Trailer**.
2. Enter the **Plate Number** and **Chassis Number** (required), **Make** and **Year**.
3. Choose the **Axle Layout** (required):
   - 2 axles (8 wheels)
   - 3 axles (12 wheels)
   - 3 axles super-single (6 wheels)
4. Set the **Status**, add any **Notes**, and select **Save**.
5. To attach documents (registration, inspection), open the trailer again after saving.

![New Trailer](/images/transport-walkthrough/trailer-new.jpg)

## Adding a Driver

1. Go to **Administration → Employees** and select **New Employee**.
2. Enter the name and **Employee Number**, set the department to **Fleet** and the position to **Driver**.
3. Add the phone number, **Driving Licence** number and **Passport** number. The passport is needed for transit trips.
4. Select **Save**.

![New Employee](/images/transport-walkthrough/employee-new.jpg)

## Adding a Vehicle

1. Go to **Administration → Fleet → Vehicles** and select **New Vehicle**.
2. Under **Vehicle Information**, enter the **Plate Number** (required), **Chassis Number**, **Make**, **Model**, **Year**, **Capacity** and **Initial Odometer**.
3. Choose the **Axle Layout** (required). See [Axle layout and tyres](#axle-layout-and-tyres).
4. Set the **Status**.
5. Choose the **Default Trailer** and **Default Driver**. They fill in automatically when the vehicle is assigned to a transport request, and can be changed there.
6. Under **Insurance**, enter the company, policy number and start and end dates.
7. Under **Fuel**, choose the **Fuel Type** (required) and enter the **Fuel Consumption** rates. See [Fuel consumption](#fuel-consumption).
8. Add any **Notes** and select **Save**.
9. To attach vehicle documents, open the vehicle again after saving.

![New Vehicle: information and axle layout](/images/transport-walkthrough/vehicle-new-info.jpg)

![Default trailer, driver and insurance](/images/transport-walkthrough/vehicle-new-trailer-driver.jpg)

![Saved vehicle](/images/transport-walkthrough/vehicle-edit.jpg)

## Axle Layout and Tyres

The axle layout sets the wheel positions shown on the **Tyre Board** (**Workshop → Tyre Board**). Every tyre is recorded against one of those positions, so choose the layout that matches the real vehicle.

| Vehicle axle layout | Wheels |
|---|---|
| Light vehicle | 4 |
| 4x2 | 6 |
| 6x2 (1 drive axle) | 10 |
| 6x4 (2 drive axles) | 10 |
| 8x4 (twin steer) | 12 |

For example, a **6x4** truck shows the steer wheels **1L** and **1R**, two twin-wheel drive axles (**2LO, 2LI, 2RI, 2RO** and **3LO, 3LI, 3RI, 3RO**), and two spares (**SP1, SP2**). *O* is the outer wheel and *I* the inner wheel of a pair.

![Tyre Board for a 6x4 truck](/images/transport-walkthrough/tyre-board-vehicle.jpg)

Trailers work the same way. A 3-axle (12-wheel) trailer shows positions **1LO** to **3RO** plus two spares.

![Tyre Board for a 3-axle trailer](/images/transport-walkthrough/tyre-board-trailer.jpg)

## Fuel Consumption

Enter three rates in litres per kilometre:

| Rate | When it's used |
|---|---|
| **With Cargo** | the truck is loaded |
| **Empty** | the truck runs with no cargo, for example an empty return leg |
| **Flatbed** | the truck runs as a flatbed |

Kani LMS multiplies a leg's distance by the matching rate to estimate the fuel it needs. The estimate appears when fuel is requested on a trip and when it's approved. For example, at 0.45 L/km loaded and 0.32 L/km empty, a 1,970 km leg needs about **886.5 L** loaded and **630.4 L** empty.

![Fuel type and consumption rates](/images/transport-walkthrough/vehicle-new-fuel.jpg)

::: tip Keep the rates realistic
Approvers compare each fuel request against the estimate. If the rates are blank or out of date, the estimate is no help. Update them when you have real consumption figures.
:::

## Related Pages

- [Walkthrough: Transit Transport](/fleet-management/transport-walkthrough)
- [Transport Requests](/fleet-management/transport-requests)
- [Fuel Approvals & Dispensions](/fleet-management/fuel)
