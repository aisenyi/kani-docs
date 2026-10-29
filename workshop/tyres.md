# Tyres & Tyre Board

Kani LMS tracks every tyre by its serial number, from purchase to scrap. You can see where each tyre is, how far it has run, its tread, and what it costs per kilometre.

## Overview

Go to **Workshop → Tyres**. The list shows each tyre's serial, brand and size, status, where it is (vehicle and position), tread, km run, total cost and cost per km. Use the filters at the top for **All**, **Fitted**, **Ready to fit** and **Scrapped**, and filter by brand.

![Tyres list](/images/workshop-walkthrough/tyres-list.jpg)

## Adding a Tyre

Add a tyre to the register when it's bought.

1. Select **New Tyre**.
2. Enter the **Serial Number** (moulded on the sidewall, must be unique) and **Brand** (both required), plus the **Pattern / Model**, **Size** and **Tread Depth When New (mm)**.
3. Under **Purchase**, enter the **Purchase Date**, **Cost**, **Currency** and **Supplier**. Cost per km is worked out from the purchase cost.
4. Add any **Notes**.
5. Select **Save Tyre**, or **Save & Add Another** to add the next tyre from the same batch. Everything except the serial number is kept.

![New Tyre](/images/workshop-walkthrough/tyre-new.jpg)

The tyre starts in stock, ready to fit.

## Wheel Positions

The positions a tyre can be fitted to come from the vehicle's or trailer's **Axle Layout**. See [Vehicles & Trailers → Axle Layout and Tyres](/fleet-management/vehicles-and-trailers#axle-layout-and-tyres).

Positions are named by axle and side: **1L** and **1R** are the front axle's left and right wheels. On twin-wheel axles, **O** is the outer wheel and **I** the inner (for example **2LO**, **2LI**). **SP1** and **SP2** are spares.

## Fitting, Inspecting, Rotating and Removing

You can do these from a [service job's](/workshop/service-jobs#tyres) **Tyres** tab, which links the work to the job, from the **Tyre Board**, or from the tyre's own page.

| Action | What it does | What you enter |
|---|---|---|
| **Fit** | Puts an in-stock tyre on a wheel position. Kilometres start counting from this odometer reading. | Tyre, wheel position, odometer, date, tread depth, notes |
| **Inspect** | Records a tread depth check without moving the tyre. | Odometer, date, tread depth, notes |
| **Rotate** | Moves the tyre to another position on the same vehicle. No kilometres are lost. If the new position has a tyre, the two swap places. | New position, odometer, date, notes |
| **Remove** | Takes the tyre off. The kilometres since it was fitted are added to its total. | Reason (**Worn out**, **Damaged**, **Sent for retread**, **Other**), odometer, date, tread depth, notes |

![Fit Tyre](/images/workshop-walkthrough/job-fit-tyre.jpg)

![Inspect Tyre](/images/workshop-walkthrough/tyre-inspect-dialog.jpg)

![Rotate Tyre](/images/workshop-walkthrough/tyre-rotate-dialog.jpg)

To move a tyre to a different vehicle, remove it and fit it there.

::: info Scrapping a tyre
A fitted tyre can't be scrapped. Remove it first, then scrap it from its own page.
:::

## The Tyre Board

Go to **Workshop → Tyre Board**, choose **Vehicle** or **Trailer**, and pick one. The board draws every wheel position for that axle layout, from front to rear, with the current odometer.

- Fitted positions show the tyre's serial, brand and tread depth. The tread is coloured **green** for 6 mm and over, **amber** for 3 to 6 mm, and **red** for under 3 mm.
- Empty positions show **+ Fit**.
- The side panel counts **Tyres fitted** and **Empty positions**.

Click a wheel to see its serial, tyre, tread, fitting date and reading, km on this position and total km, with **Inspect**, **Rotate** and **Remove** buttons. **Open tyre** goes to the tyre's own page.

![Tyre Board](/images/workshop-walkthrough/tyre-board-selected.jpg)

## A Tyre's Page

Open a tyre from the list or the board to see:

- **Total km** (plus the current stretch if it's fitted), **Total cost**, **Cost per km** (shown once kilometres are recorded) and **Tread depth** against its depth when new
- **Logbook**: every event (purchased, fitted, inspected, rotated, removed) with the vehicle and position, odometer, km run, tread, cost and the linked service job
- **Details** and **Attachments**

![Tyre logbook](/images/workshop-walkthrough/tyre-logbook.jpg)

## Related Pages

- [Walkthrough: Service and Tyres](/workshop/workshop-walkthrough)
- [Service Jobs](/workshop/service-jobs)
- [Vehicles & Trailers](/fleet-management/vehicles-and-trailers)
