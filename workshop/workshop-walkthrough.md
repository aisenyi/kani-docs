# Walkthrough: Service and Tyres, Start to Finish

This guide follows one truck through the Kani LMS workshop. A service reminder falls due, a service job is raised from it, the mechanic records the work, parts and two new tyres, and completing the job moves the reminder forward.

Each step links to the page that covers that screen in more detail.

::: tip The sample job used in this guide
| Record | Sample value |
|---|---|
| Vehicle | T512EKR: Sinotruk Howo A7, axle layout 6x4 (from the [transport walkthrough](/fleet-management/transport-walkthrough)) |
| Service reminder | Oil & Filter Change, every 10,000 km or 3 months |
| Odometer | 48,250 km at setup, 52,190 km after the Lusaka round trip |
| Service job | SJ0003: Scheduled service, in-house, mechanic Juma Msekela |
| Parts | 2 × Engine Oil 15W-40 (20 L pail) + 1 × Oil Filter |
| Tyres | 2 × Bridgestone R249 315/80R22.5, fitted at 1L and 1R |

All names and numbers are sample data.
:::

## The flow at a glance

1. [Check the workshop lists](#_1-check-the-workshop-lists)
2. [Add a service reminder](#_2-add-a-service-reminder)
3. [Record the odometer](#_3-record-the-odometer): the reminder becomes overdue
4. [Create the service job from the reminder](#_4-create-the-service-job-from-the-reminder)
5. [Record the work and parts](#_5-record-the-work-and-parts)
6. [Add tyres to the register](#_6-add-tyres-to-the-register)
7. [Fit the tyres on the job](#_7-fit-the-tyres-on-the-job)
8. [Complete the job](#_8-complete-the-job)
9. [Check the reminder, Tyre Board and tyre logbook](#_9-check-the-reminder-tyre-board-and-tyre-logbook)

::: warning Get the axle layout right first
The tyre positions you can fit to come from the vehicle's **Axle Layout**. A 6x4 truck has 1L and 1R (steer), 2LO to 2RO and 3LO to 3RO (drive), and spares SP1 and SP2. If the layout on the vehicle is wrong, fix it in [Vehicles & Trailers](/fleet-management/vehicles-and-trailers#axle-layout-and-tyres) before recording tyres.
:::

---

## 1. Check the workshop lists

Two lists under **Administration → Workshop** feed the workshop screens:

- **Service Tasks**: the jobs a mechanic can do, grouped by category (Engine, Brakes, Tyres and so on). Each has a **Default Interval**, for example *Every 10,000 km or 6 months*, which fills in when you pick the task on a reminder.
- **Spare Parts**: the parts you commonly buy. It keeps part names consistent. It is not a stock count.

You don't have to set these up first. Both can be added straight from a service job.

![Service Tasks](/images/workshop-walkthrough/admin-service-tasks.jpg)

## 2. Add a service reminder

1. Go to **Workshop → Service Reminders** and select **Add Reminder**.
2. Choose **Vehicle** (or **Trailer**) and pick **T512EKR**.
3. Choose the **Service task**: **Oil & Filter Change**. Its default interval fills in.
4. Under **How often**, set **Every (km)** and **Every (months)**. We used 10,000 km and 3 months.
5. Under **Last done**, enter the odometer reading and date of the last service: 40,000 km on 15/08/2026. Leave these blank to count from today and the current reading.
6. Add any **Notes** and select **Save**.

![Add Reminder](/images/workshop-walkthrough/reminder-add.jpg)

The reminder shows **OK** with the next due point (50,000 km or 15/11/2026, whichever comes first) and what's left: *1,750 km · 17 days*.

![Reminder OK](/images/workshop-walkthrough/reminder-ok.jpg)

Details: [Service Reminders](/workshop/service-reminders)

## 3. Record the odometer

Reminders count kilometres from the vehicle's latest odometer reading. Readings from fuel requests and service jobs are picked up automatically. For anything else, such as a yard check, record it by hand.

1. Select **Record Odometer**.
2. Pick the vehicle, enter the **Reading (km)** (52,190 after the Lusaka round trip) and the **Date**.
3. Select **Save Reading**.

![Record Odometer Reading](/images/workshop-walkthrough/odometer-record.jpg)

::: warning The highest reading wins
Kani LMS treats the highest reading ever entered as the current one. A typo like 521,900 can't be undone by entering a lower number, so check before saving.
:::

The reminder is now **Overdue**: *2,190 km over*. A **Create job** button appears on the row.

![Overdue reminder](/images/workshop-walkthrough/reminder-overdue.jpg)

## 4. Create the service job from the reminder

1. Select **Create job** on the overdue reminder. A new service job opens with the vehicle and **Scheduled service** already filled in.
2. Under **Odometer (km)**, select **Use it** to copy the last known reading.
3. Under **When the work happened**, select **Now** next to **Work started**. This moves the job to **In progress**.
4. Under **Who's doing the work**, choose **In-house** and pick the **Mechanic** (an employee). For an **External garage**, pick the garage instead.
5. Describe the **Problem reported**, then select **Create Job**.

![New Service Job](/images/workshop-walkthrough/job-new-top.jpg)

![Mechanic and problem reported](/images/workshop-walkthrough/job-new-bottom.jpg)

Kani LMS creates **SJ0003** and opens it, **In progress**, with tabs for **Tasks & Parts**, **Tyres**, **Attachments** and **Expenses**.

![Service job created](/images/workshop-walkthrough/job-created.jpg)

Details: [Service Jobs](/workshop/service-jobs)

## 5. Record the work and parts

On the **Tasks & Parts** tab:

1. Under **Work done**, select **Add task**, search for **Oil & Filter Change**, describe what was done and enter the **Labour cost** (TZS 60,000).
2. Under **Parts used**, select **Add part** and search the Spare Parts list. If the part isn't there, choose **Add New Spare Part**, enter its **Name** and **Part number**, and select **Create Spare Part**.
3. Enter the **Qty**, **Unit** and **Unit cost**. We used 2 pails of engine oil at TZS 145,000 and 1 oil filter at TZS 35,000.
4. Select **Save Changes**.

![Adding a new spare part](/images/workshop-walkthrough/job-spare-part-dialog.jpg)

![Tasks and parts](/images/workshop-walkthrough/job-tasks-parts.jpg)

The totals at the bottom show **Parts**, **Labour** and **Total** (TZS 385,000 here). Tyres aren't counted here: they're tracked on the Tyres tab with their own cost.

## 6. Add tyres to the register

Every tyre is tracked by its serial number, from purchase to scrap. Register tyres when they're bought.

1. Go to **Workshop → Tyres** and select **New Tyre**.
2. Enter the **Serial Number** (moulded on the sidewall, must be unique) and **Brand**, plus the **Pattern / Model**, **Size** and **Tread Depth When New (mm)**.
3. Under **Purchase**, enter the **Purchase Date**, **Cost**, **Currency** and **Supplier**. The cost is what cost per km is worked out from.
4. Select **Save & Add Another** to keep the details for the next tyre (only the serial clears), or **Save Tyre**.

![New Tyre](/images/workshop-walkthrough/tyre-new.jpg)

New tyres start in stock, under the **Ready to fit** filter on the Tyres list.

## 7. Fit the tyres on the job

Back on SJ0003, open the **Tyres** tab and select **Fit a Tyre**.

1. Pick the **Tyre** from the in-stock list.
2. Choose the **Wheel position**. The list matches the vehicle's axle layout.
3. Check the **Odometer (km)** and **Date**. Kilometres on the tyre start counting from this reading.
4. Enter the **Tread depth (mm)** and any **Notes**, then select **Fit Tyre**.

![Fit Tyre](/images/workshop-walkthrough/job-fit-tyre.jpg)

We fitted one tyre at **1L** and the other at **1R**. Each fitted tyre has **Inspect**, **Rotate** and **Remove** actions, and every change is listed under **Tyre work recorded on this job**.

![Tyres fitted on the job](/images/workshop-walkthrough/job-tyres-fitted.jpg)

Details: [Tyres & Tyre Board](/workshop/tyres)

## 8. Complete the job

1. Select **Complete**.
2. Check **Work started** and **Work finished** (it fills in with now if blank) and the **Odometer at completion (km)**.
3. Select **Complete Job**.

![Complete the job](/images/workshop-walkthrough/job-complete-dialog.jpg)

Completing the job saves any unsaved changes, marks the vehicle back on the road, and moves forward every service reminder for the tasks on the job. The job is then locked: *This job is completed and can no longer be changed*. Only **Cancel Job** remains available.

![Completed job](/images/workshop-walkthrough/job-completed.jpg)

The gap between work started and work finished is recorded as the vehicle's downtime.

## 9. Check the reminder, Tyre Board and tyre logbook

**Service Reminders**: the oil change reminder is back to **OK**. Last done is now 29/10/2026 at 52,190 km, and the next one is due at 62,190 km or 29/01/2027.

![Reminder moved forward](/images/workshop-walkthrough/reminder-moved-forward.jpg)

**Tyre Board** (**Workshop → Tyre Board**): pick the vehicle to see every wheel. Fitted positions show the serial, brand and tread, coloured green for 6 mm and over, amber for 3 to 6 mm and red for under 3 mm. Empty positions show **+ Fit**. Click a wheel to see its tyre and act on it.

![Tyre Board with two fitted tyres](/images/workshop-walkthrough/tyre-board-selected.jpg)

**Tyre logbook**: select **Open tyre** to see the tyre's own page, with **Total km**, **Total cost**, **Cost per km** and **Tread depth**, and a **Logbook** of everything that's happened to it, linked to the service job.

![Tyre logbook](/images/workshop-walkthrough/tyre-logbook.jpg)

## Related Pages

- [Service Jobs](/workshop/service-jobs)
- [Tyres & Tyre Board](/workshop/tyres)
- [Service Reminders](/workshop/service-reminders)
- [Vehicles & Trailers](/fleet-management/vehicles-and-trailers)
