# Service Reminders

Service reminders tell you when a vehicle or trailer is due for regular work, such as an oil change every 10,000 km or 3 months, whichever comes first. Completing a service job that includes the task moves the reminder forward automatically.

## Overview

Go to **Workshop → Service Reminders**. The cards at the top count reminders that are **Overdue**, **Due soon** and **OK**. Select **Show** on a card to list only those. Search by plate or task.

Each row shows the status, vehicle, task, interval (**Every**), **Last done** (date and reading), **Next due** (date and reading) and **Remaining**, for example *1,750 km · 17 days* or *2,190 km over*.

![Service Reminders](/images/workshop-walkthrough/reminder-ok.jpg)

## Adding a Reminder

1. Select **Add Reminder**.
2. Choose **Vehicle** or **Trailer** and pick it.
3. Choose the **Service task**. The task's default interval fills in.
4. Under **How often**, check or change **Every (km)** and **Every (months)**. Whichever comes first makes the reminder due.
5. Under **Last done**, enter the reading **At (km)** and the date **On** of the last time this was done. Leave both blank to count from today and the vehicle's current reading.
6. Add any **Notes** and select **Save**.

![Add Reminder](/images/workshop-walkthrough/reminder-add.jpg)

Add one reminder for each regular service a vehicle needs. Use the edit and delete icons on a row to change or remove it.

## Odometer Readings

Reminders compare the interval against the vehicle's latest odometer reading. Readings entered on fuel requests and service jobs are picked up automatically. For anything else, such as a yard check, select **Record Odometer**:

1. Choose **Vehicle** or **Trailer** and pick it. For trailers, use the hub odometer.
2. Enter the **Reading (km)** and **Date**.
3. Select **Save Reading**.

![Record Odometer Reading](/images/workshop-walkthrough/odometer-record.jpg)

::: warning The highest reading counts
The highest reading ever recorded is taken as the current one. Double-check the number before saving.
:::

## Acting on a Due Reminder

When a reminder is **Overdue**, a **Create job** button appears on its row. Select it. A new [service job](/workshop/service-jobs) opens with the vehicle and **Scheduled service** filled in.

![Overdue reminder with Create job](/images/workshop-walkthrough/reminder-overdue.jpg)

Add the reminder's task under **Tasks & Parts** on the job. When the job is completed, the reminder's **Last done** moves to the job's finish date and odometer, and **Next due** is worked out again.

![Reminder moved forward after the job](/images/workshop-walkthrough/reminder-moved-forward.jpg)

## Related Pages

- [Walkthrough: Service and Tyres](/workshop/workshop-walkthrough)
- [Service Jobs](/workshop/service-jobs)
