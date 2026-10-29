# Walkthrough: Containerised Import, Start to Finish

This guide follows one real job through Kani LMS, from the first customer record to a **Closed** import. It uses a single 40ft container of ceramic tiles shipped from Shanghai to Dar es Salaam for a local customer.

Each step links to the page that covers that screen in more detail.

::: tip The sample job used in this guide
| Record | Sample value |
|---|---|
| Customer | Mwambao Trading Co. Ltd, Dar es Salaam |
| Quotation | QT0003 - Agency fee + Transport fee + VAT = TZS 1,180,000 |
| Logistics File | LF0012 - Service: **Import - Local** |
| Import | IMP0005 - BL MEDUDS123456, container MSCU4821736 (40 FT GP) |
| Expense | Handling, TZS 450,000 (DP World terminal charges) |
| Transport Request / Trip | TR0007 / TRP0004 |

All names and numbers are sample data.
:::

## The flow at a glance

1. [Create the customer](#_1-create-the-customer)
2. [Create and approve a quotation](#_2-create-and-approve-a-quotation)
3. [Create the logistics file](#_3-create-the-logistics-file) - this creates the import automatically
4. [Fill in the import details](#_4-fill-in-the-import-details), including containers
5. [Upload attachments](#_5-upload-attachments)
6. [Request an expense](#_6-request-an-expense)
7. [Review and approve the expense](#_7-review-and-approve-the-expense)
8. [Record the payment](#_8-record-the-payment)
9. [Log daily status](#_9-log-daily-status)
10. [Create a transport request and assign a vehicle](#_10-create-a-transport-request-and-assign-a-vehicle)
11. [Run the trip and confirm delivery](#_11-run-the-trip-and-confirm-delivery)
12. [Close the import](#_12-close-the-import)

::: warning Before you can close an import
Kani LMS will only let you close an import when **every container has been delivered through a completed trip**. In practice that means steps 10 and 11 are required, even if you only did the clearing. Plan for them from the start.
:::

---

## 1. Create the customer

Go to **Sales → Customers** and select **New Customer**.

![Customers list](/images/import-walkthrough/customers-list.jpg)

1. Choose the **Customer Type**: **Individual** or **Business**. For a company, pick **Business**. The name field changes to **Company Name**.
2. Enter the **Company Name** (required), **TIN Number** and **VRN Number**.
3. Under **Contact Information**, add the email and phone.
4. Under **Address**, fill in the street, **City**, **State/Province** and **Country**. Start typing the country and pick it from the list.
5. Leave **Status** as **Active** and select **Create Customer**.

![New Customer form](/images/import-walkthrough/customer-new-top.jpg)

More detail: [Customers](/sales/customers).

## 2. Create and approve a quotation

Go to **Sales → Quotations** and select **New Quotation**.

1. Search for and select the **Customer**.
2. Check the **Currency**, **Quotation Date** and **Expiry Date**. The expiry date defaults to 30 days later.
3. Under **Line Items**, select **Add Item** for each charge. Pick the item (for example *Agency fee*, *Transport fee*), then set **Qty**, **Unit** (for example *Container*) and **Unit Price**. You can edit the description of each line.
4. Under **Taxes**, select **Add Tax** and choose **VAT**. The description and 18% fill in automatically.
5. Check the **Subtotal** and **Total**, review the **Terms & Conditions**, then select **Create Quotation**.

![New Quotation with line items and VAT](/images/import-walkthrough/quotation-new.jpg)

The quotation is saved as **Draft**. When the customer accepts, open **Actions → Approve**.

![Quotation Actions menu](/images/import-walkthrough/quotation-actions.jpg)

Once approved, the quotation is locked and two buttons appear: **Create Logistics File** and **Create Invoice**.

![Approved quotation](/images/import-walkthrough/quotation-approved.jpg)

More detail: [Quotations](/sales/quotations).

## 3. Create the logistics file

From the approved quotation, select **Create Logistics File**. The **Customer** and **Quotation** are filled in for you. You can also start from **Logistics Files → New Logistics File**.

1. Choose the **Service**. For this job: **Import - Local**.
2. Set the **Documents Received Date**.
3. Enter the **BL Number** (required for imports).
4. Select **Create Logistics File**.

![New Logistics File](/images/import-walkthrough/logistics-file-new.jpg)

Kani LMS creates the logistics file (**LF0012**) **and** a linked import (**IMP0005**) in one step. The top of the file shows **Total Expenses**, **Invoiced Amount** and **Profit / Loss** for the job.

![Logistics file created with linked import](/images/import-walkthrough/logistics-file-linked.jpg)

Select the import number under **Linked Document** to open it.

More detail: [Logistics Files](/clearing-and-forwarding/logistics-files).

## 4. Fill in the import details

The import has four tabs: **Details**, **Attachments**, **Expenses** and **Daily Status**. Start on **Details** and work down the page, then select **Update Import** to save. An orange **Not Saved** badge shows next to the import number until you save.

**Basic Information and Parties.** Add the **House Bill of Lading** and **Point of Entry** (Port, Air or Land Border). Then pick the **Shipper/Exporter**, **Consignee** and **Notify Party**. If a party doesn't exist yet, type the name and choose **Add New**.

![Import details: basic information and parties](/images/import-walkthrough/import-details-basic.jpg)

**Shipping Details, Ports & Destination.** Pick the **Shipping Line**, then enter the **Vessel Name**, **Voyage No**, **Port of Loading**, **Port of Discharge** and the cargo destination.

![Import details: shipping, ports and destination](/images/import-walkthrough/import-details-parties-shipping.jpg)

**Dates, Discharge & ICD.** Enter **Expected Time of Arrival**, **Actual Time of Arrival**, **Discharge Date** and **Carry In Date**. **Storage Start Date** is calculated for you. Pick the **Discharge Terminal** and **ICD**.

![Import details: dates, discharge terminal and ICD](/images/import-walkthrough/import-details-ports-dates.jpg)

**Cargo and containers.** Set **Cargo Category** to **Containers**. An **Import Containers** section appears. Choose the **Container Owner** and write a **Cargo Description**. Then select **Add Container** for each box.

![Add Container dialog](/images/import-walkthrough/import-add-container.jpg)

Enter the **Container Number**, **Size**, **Cargo Type**, **Number of Packages** and the gross, net and tare weights. Select **Add Container**. When everything is in, select **Update Import**.

![Cargo section with one container](/images/import-walkthrough/import-details-cargo-containers.jpg)

::: tip Fields needed before transport
You can save an import with gaps, but you can't create a transport request until these are filled in: **Shipper/Exporter**, **Consignee**, **Notify Party**, **Cargo Destination Country**, **Cargo Destination City/Town** and **Discharge Date**.
:::

More detail: [Imports](/clearing-and-forwarding/imports) and [Containers Management](/clearing-and-forwarding/containers).

## 5. Upload attachments

Open the **Attachments** tab. Click the upload area or drag files onto it. PDF, Word, Excel and image files up to 32 MB are accepted. Files upload straight away, and each one can be previewed, downloaded or deleted.

![Attachments tab with BL, invoice and packing list](/images/import-walkthrough/import-attachments.jpg)

## 6. Request an expense

Open the **Expenses** tab and select **Add Expense**.

1. Pick the **Expense Type** (for example *Handling*, *Customs & Duties*, *Storage*, *Transport*, *Documentation*).
2. Enter the **Amount** and **Currency**, plus a **Description**.
3. Optionally set a **Required by Date** and a **Reference Number** (the supplier's invoice or receipt number).
4. Under **Expense For**, choose **Supplier** or **Employee**, then pick the person or company being paid.
5. Choose the **Reviewer**, add **Comments** for them, and attach supporting files if you have them.
6. Select **Add**.

![Add Expense Request form](/images/import-walkthrough/expense-request-form.jpg)

The expense appears on the tab with status **Pending Review**.

![Expense pending review](/images/import-walkthrough/import-expense-pending.jpg)

## 7. Review and approve the expense

Expenses go through two checks: **Review**, then **Approval**. Both happen on **Expenses & Payments → Expense Approvals**.

![Expense Approvals list](/images/import-walkthrough/expense-approvals-list.jpg)

**Review.** The reviewer opens the expense with the eye icon, checks the details and selects **Review**. They must choose the **Approver** and can add a comment. Then they select **Confirm Review**.

![Review Expense Request dialog](/images/import-walkthrough/expense-review-dialog.jpg)

The status changes to **Pending Approval**. The **Approval History** shows who requested and reviewed it, and when.

![Expense details pending approval, with approval history](/images/import-walkthrough/expense-details-pending-approval.jpg)

**Approve.** The approver opens the expense and selects **Approve**. They can add final comments, then select **Approve** again. Either person can select **Reject** instead.

![Approve Expense Request dialog](/images/import-walkthrough/expense-approve-dialog.jpg)

More detail: [Expense Approvals](/expenses-and-payments/expense-approvals).

## 8. Record the payment

Approved expenses move to **Expenses & Payments → Payments**, under **Awaiting Payment**.

![Payments awaiting payment](/images/import-walkthrough/payments-awaiting.jpg)

Select the **+** icon on the row to record a payment. Check the **Payment Date** and **Amount** (**Pay Full** fills in the remaining balance). Choose the **Payment Method**, add a **Reference** and **Notes**, then select **Record Payment**. You can also record part-payments; the row then shows **Partial** until it is fully paid.

![Record Payment dialog](/images/import-walkthrough/payment-record-dialog.jpg)

Back on the import, the expense now shows **Paid**.

![Expense shown as Paid on the import](/images/import-walkthrough/import-expense-paid.jpg)

More detail: [Payments](/expenses-and-payments/payments).

## 9. Log daily status

Use the **Daily Status** tab to keep a running log of progress, such as "documents lodged", "released" or "delivered". Type the update and select **Add**. Each entry is stamped with the date, time and who reported it.

![Daily Status tab](/images/import-walkthrough/import-daily-status.jpg)

## 10. Create a transport request and assign a vehicle

On the import, select **Create Transport Request**. If any required details are missing, a **Missing details** box lists them, one per line. Fill them in, select **Update Import**, and try again.

![Missing details before creating a transport request](/images/import-walkthrough/transport-request-missing-details.jpg)

Kani LMS creates a transport request (**TR0007**) linked to the logistics file and import. It copies over the customer, cargo and containers.

1. Check the **Transport Type**, pickup and delivery locations, then enter the **Distance (km)** (required) and any **Notes**.
2. Select **Save**.

![Transport request created from the import](/images/import-walkthrough/transport-request-form.jpg)

3. In the **Containers** section, select **Assign Vehicle** on each container.
4. Choose **Internal vehicle** (your own fleet) or **Sub-contracted** (another company's truck).
   - For an internal vehicle, pick the **Vehicle**. The **Trailer** and **Driver** fill in from the vehicle's defaults, and you can change them.
   - For a sub-contracted vehicle, pick the **Supplier** and type in the plate numbers and driver details.
5. Select **Assign**. When every container has a vehicle, the request shows **Fully Assigned**.

![Assign Vehicle dialog](/images/import-walkthrough/transport-assign-vehicle.jpg)

More detail: [Transport Requests](/fleet-management/transport-requests).

## 11. Run the trip and confirm delivery

Go to **Fleet Management → Assigned Vehicles**. This is the dispatch board for every truck currently assigned. Select **Start Trip** on the row.

![Assigned Vehicles dispatch board](/images/import-walkthrough/assigned-vehicles.jpg)

::: info One open trip per vehicle
A vehicle can only have one open trip at a time. If you see *"Vehicle … has an open trip - end it before starting a new one"*, either end that trip first or assign a different vehicle.
:::

The trip (**TRP0004**) opens **In Progress**. It links back to the customer, transport request, logistics file and import.

![Trip in progress](/images/import-walkthrough/trip-in-progress.jpg)

When the cargo has been delivered, scroll to **Loading & Offloading**:

1. Fill in all seven dates: loading point arrival, loading, loading point departure, offloading point arrival, offloading, offloading point departure, and **Delivery date**.
2. Optionally add the **Offloaded weight**, **Client ref no.** and **Notes**, then select **Save**.
3. Under **Delivery Information**, select **Upload signed delivery note** and attach the signed proof of delivery.

![Loading & Offloading dates and proof of delivery](/images/import-walkthrough/trip-delivery-details.jpg)

Then select **End Leg** and confirm. The trip changes to **Completed**. If the trip needs a return journey, use **Add return leg**.

![Completed trip](/images/import-walkthrough/trip-completed.jpg)

More detail: [Trips](/fleet-management/trips).

## 12. Close the import

Go back to the import and select **Close Import**. A **Close import** box asks you to confirm. Select **Close import**, or **Cancel** to stop.

![Close import confirmation](/images/import-walkthrough/import-close-confirm.jpg)

Kani LMS then checks that:

- at least one transport request exists for the import, and
- every container is confirmed delivered through a completed trip.

If something is missing, a message explains what, for example *"Cannot close: No transport requests have been created for this document yet"* or *"Only 0 of 1 cargo item(s) are confirmed delivered"*.

![Close blocked until a transport request exists](/images/import-walkthrough/import-close-blocked.jpg)

When the checks pass, the import is marked **Closed**. Closing can't be undone from this screen.

![Closed import](/images/import-walkthrough/import-closed.jpg)

The import list now shows the job as **Closed**.

![Imports list with the closed import](/images/import-walkthrough/imports-list.jpg)

## Checking the job's numbers

Open the logistics file at any time to see the job's financial summary. Approved expenses appear in **Expenses**, linked trips under **Linked Document**, and **Total Expenses**, **Invoiced Amount** and **Profit / Loss** update automatically.

![Logistics file summary](/images/import-walkthrough/logistics-file-final-top.jpg)

![Logistics file expenses and sales invoices](/images/import-walkthrough/logistics-file-final-bottom.jpg)

**Next step:** invoice the customer with **New Invoice** under **Sales Invoices** on the logistics file, or **Create Invoice** on the approved quotation. Until you do, **Profit / Loss** shows the expenses as a loss. See [Sales Invoices](/sales/sales-invoices).
