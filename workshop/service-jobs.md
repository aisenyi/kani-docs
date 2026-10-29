# Service Jobs

A service job records workshop work on a vehicle or trailer, done in-house or at an outside garage: what was wrong, who worked on it, the tasks, parts and tyres, the cost, and how long the vehicle was off the road.

## Overview

Go to **Workshop → Service Jobs**. The list shows each job with its vehicle, type of work, who did it, the reported date, total cost and status. Filter by status (**Not finished**, **Open**, **In progress**, **Completed**, **Cancelled**) or type of work, and sort by reported, started, completed, created or modified date.

![Service Jobs list](/images/workshop-walkthrough/service-jobs-list-after.jpg)

| Status | Meaning |
|---|---|
| **Open** | Reported, work not started yet |
| **In progress** | **Work started** is filled in |
| **Completed** | Finished and locked |
| **Cancelled** | Stopped |

## Creating a Service Job

Select **New Service Job**, or **Create job** on an overdue [service reminder](/workshop/service-reminders), which fills in the vehicle and type of work for you.

1. Choose **Vehicle** or **Trailer** and pick it.
2. Choose the **Type of work**: **Scheduled service**, **Repair**, **Inspection** or **Accident damage**.
3. Enter the **Odometer (km)**. **Use it** copies the last known reading.
4. Set the **Reported on** date.
5. Under **When the work happened**, set **Work started** (**Now** fills in the current time). This moves the job to **In progress**. Leave it blank if the job is only reported.
6. Under **Who's doing the work**:
   - **In-house**: pick the **Mechanic** from your employees.
   - **External garage**: pick the **Garage**. Pay the garage from the job's **Expenses** tab, which goes through the normal [expense approval](/expenses-and-payments/expense-approvals).

   The mechanic or garage can be left blank while the job is only reported, but is needed once a work start date is set.
7. Add the **Problem reported** and any **Notes**, then select **Create Job**.

![New Service Job](/images/workshop-walkthrough/job-new-top.jpg)

![Who's doing the work and problem reported](/images/workshop-walkthrough/job-new-bottom.jpg)

## Tasks & Parts

**Work done**: select **Add task**, search the [service task list](#workshop-lists) (or leave the task blank and just type what was done), add a description and the **Labour cost**. Completing a job that includes a task moves forward any reminder for that task on this vehicle.

**Parts used**: select **Add part** and pick from the Spare Parts list. If a part is missing, choose **Add New Spare Part** in the dropdown, then enter its **Name** and **Part number**. Enter the **Qty**, **Unit** and **Unit cost**.

![Add New Spare Part option](/images/workshop-walkthrough/job-part-add-new.jpg)

Choose the **Currency** at the bottom. The **Parts**, **Labour** and **Total** update as you go. Select **Save Changes** to keep them.

![Tasks and parts](/images/workshop-walkthrough/job-tasks-parts.jpg)

## Tyres

The **Tyres** tab shows every tyre on the vehicle and the current odometer. From here you can **Fit a Tyre**, and **Inspect**, **Rotate** or **Remove** a fitted one. Each action is linked to the job and listed under **Tyre work recorded on this job**. See [Tyres & Tyre Board](/workshop/tyres).

![Tyres tab on a service job](/images/workshop-walkthrough/job-tyres-fitted.jpg)

## Attachments and Expenses

- **Attachments**: invoices, photos or inspection reports.
- **Expenses**: select **Add Expense** to raise an expense request for the job (for example an outside garage's bill). It goes through review, approval and payment like any other expense. See [Expense Approvals](/expenses-and-payments/expense-approvals).

## Completing a Job

1. Select **Complete**.
2. Check **Work started**, **Work finished** (filled in with now if blank) and the **Odometer at completion (km)**.
3. Select **Complete Job**.

![Complete job](/images/workshop-walkthrough/job-complete-dialog.jpg)

Kani LMS then:

- saves any unsaved changes
- moves forward the service reminders for the tasks on the job, from the finish date and this reading
- marks the vehicle back on the road, recording the time between work started and work finished as downtime
- locks the job (*This job is completed and can no longer be changed*), leaving only **Cancel Job**

![Completed service job](/images/workshop-walkthrough/job-completed.jpg)

## Workshop Lists

Two lists under **Administration → Workshop** feed service jobs and reminders:

- **Service Tasks**: the jobs a mechanic can do, each with a category and a **Default Interval** used when you add a reminder. Select **Add Task** to add one, or switch off tasks you don't use.
- **Spare Parts**: the parts you commonly buy, with part number, name, category, unit, typical cost and usual supplier. It keeps names consistent. It is not a stock count.

![Spare Parts](/images/workshop-walkthrough/admin-spare-parts.jpg)

## Related Pages

- [Walkthrough: Service and Tyres](/workshop/workshop-walkthrough)
- [Tyres & Tyre Board](/workshop/tyres)
- [Service Reminders](/workshop/service-reminders)
