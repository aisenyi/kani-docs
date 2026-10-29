# Expense Approvals

Every expense raised against a job (an import, export, freight forwarding job or trip) goes through two checks before it can be paid: a **review** and then an **approval**.

## Overview

Go to **Expenses & Payments → Expense Approvals**. The cards at the top show how many expenses are **Pending Review** and **Pending Approval**, and the **Total Pending Amount** in TZS. Amounts in other currencies show their approximate TZS value. Use the filter at the top right to switch between **All Pending**, **Pending Review** and **Pending Approval**.

![Expense Approvals list](/images/import-walkthrough/expense-approvals-list.jpg)

Each row shows the document the expense belongs to, the type, description, amount, who requested it, the date and the status. The icons on the right are **view** (eye), **review/approve** (tick) and **reject** (cross).

## How an expense moves

| Status | What happens next |
|---|---|
| **Pending Review** | The assigned reviewer checks it and picks an approver. |
| **Pending Approval** | The assigned approver gives the final yes or no. |
| **Approved** | It moves to [Payments](/expenses-and-payments/payments) to be paid. |
| **Paid** / **Partial** | Fully or partly paid. |
| **Rejected** | Stopped. It won't be paid. |

Expenses are raised from the **Expenses** tab of the job. The requester chooses the expense type, amount, who it is for (a **Supplier** or an **Employee**) and the **Reviewer**. See [Imports → Expenses](/clearing-and-forwarding/imports#expenses).

![Add Expense Request form](/images/import-walkthrough/expense-request-form.jpg)

## Reviewing an Expense

1. Select the eye icon to open **Expense Request Details**. You'll see the linked document, amount, vendor, description, reference number, the requester's note, attachments and the **Approval History**. A **Previous Requests** tab is also available.
2. Select **Review**.
3. Choose the **Approver** (required) and optionally add comments.
4. Select **Confirm Review**. The status changes to **Pending Approval**.

![Expense details pending review](/images/import-walkthrough/expense-details-pending-review.jpg)

![Review Expense Request dialog](/images/import-walkthrough/expense-review-dialog.jpg)

## Approving or Rejecting

1. Open the expense. It now shows the **Assigned Approver** and the reviewer's comment in the **Approval History**.
2. Select **Approve**, add any final comments, and select **Approve** again.
3. To stop the expense instead, select **Reject**.

![Expense pending approval with history](/images/import-walkthrough/expense-details-pending-approval.jpg)

![Approve Expense Request dialog](/images/import-walkthrough/expense-approve-dialog.jpg)

Approved expenses drop off this list and appear on [Payments](/expenses-and-payments/payments) under **Awaiting Payment**.

## Related Pages

- [Payments](/expenses-and-payments/payments)
- [Trips](/fleet-management/trips)
- [Walkthrough: Containerised Import](/clearing-and-forwarding/import-walkthrough)
