# Fuel Approvals & Dispensions

Fuel for a trip goes through four steps: **request**, **review**, **approval** and **dispension**. Kani LMS estimates how much fuel each leg needs from the trip distance and the vehicle's consumption rates, so reviewers can check every request.

## Overview

| Status | What happens next |
|---|---|
| **Pending Review** | The reviewer checks it and picks an approver. |
| **Pending Approval** | The approver gives the final yes or no. |
| **Approved** | It appears on **Fuel Dispensions**, waiting to be issued. |
| **Dispensed** | The fuel actually issued has been recorded. |
| **Rejected** | Stopped. No fuel is issued. |

## Requesting Fuel

Fuel is requested from the trip.

1. Open the trip, select the leg (**Main leg** or the return), and open the **Fuel Requests** tab.
2. Select **Add Fuel Request**.
3. Check the **Fuel type** and set the **Required on date**.
4. Enter the **Liters**. Below the box, **Approx** shows the estimate for this leg: distance × the vehicle's **With Cargo** rate for a loaded leg, or its **Empty** rate for an empty return.
5. Enter the **Unit price** and **Currency**. The **Total** is calculated.
6. Add a **Description**, choose the **Reviewer**, and select **Add**.

![Add Fuel Request](/images/transport-walkthrough/fuel-request-filled.jpg)

![Fuel request pending review on the trip](/images/transport-walkthrough/fuel-request-pending.jpg)

The consumption rates are set on the vehicle. See [Vehicles & Trailers → Fuel Consumption](/fleet-management/vehicles-and-trailers#fuel-consumption).

## Fuel Approvals

Go to **Fleet Management → Fuel Approvals**. The cards show **Pending Review**, **Pending Approval**, **Total Pending Litres** and **Total Pending** amount in TZS. Each row shows the trip with a leg letter: **M** for the main leg, **R** for the return (for example **TRP0005M**).

![Fuel Approvals list](/images/transport-walkthrough/fuel-approvals-list.jpg)

Open a request to see:

- **Trip Distance**: main plus return legs
- **Approx. Fuel Required**: for all legs, from the vehicle's consumption rates
- **Previous Fuel Approved**: fuel already approved for this trip
- the request's litres, price, total and description, the **Approval History**, and a **Previous Fuel Requests** tab

![Fuel request details](/images/transport-walkthrough/fuel-details-review.jpg)

On a return-leg request, the details show the combined figures, so you can see the whole round trip at once.

![Return-leg request with previous fuel approved](/images/transport-walkthrough/fuel-details-return.jpg)

### Reviewing

1. Open the request and select **Review**.
2. Choose the **Approver**, add any comments, and confirm.

![Review Fuel Request](/images/transport-walkthrough/fuel-review-dialog.jpg)

### Approving or Rejecting

1. The approver opens the request. It shows the reviewer's comment in the **Approval History**.
2. Select **Approve**, add any comments and confirm. To stop it instead, select **Reject**.

![Fuel request pending approval](/images/transport-walkthrough/fuel-details-approval.jpg)

![Approve Fuel Request](/images/transport-walkthrough/fuel-approve-dialog.jpg)

## Fuel Dispensions

Go to **Fleet Management → Fuel Dispensions** to record the fuel actually issued against each approved request. The cards show **Pending Dispension**, **Dispensed** and **Pending Litres**. Use the filter to show **All Approved**, **Not Yet Dispensed** or **Already Dispensed**.

![Fuel Dispensions list](/images/transport-walkthrough/fuel-dispensions-list.jpg)

1. Select **Dispense** on the request.
2. Check the summary: trip, plate, approved litres and total.
3. Choose the **Dispension type**:
   - **From supplier**: choose the **Supplier** (the fuel station) and enter the **Litres dispensed**.
   - **Cash**: choose the **Payment method**, then enter the **Amount per litre** and **Litres dispensed**.
4. Add any **Notes** and select **Save**.

![Dispense from a supplier](/images/transport-walkthrough/fuel-dispense-supplier.jpg)

![Dispense with cash](/images/transport-walkthrough/fuel-dispense-cash-return.jpg)

Litres dispensed can't be more than the approved litres. Once saved, the request shows **Dispensed** here and on the trip. Select **Cancel** on a dispensed row to undo a dispension recorded by mistake.

![Dispensed fuel](/images/transport-walkthrough/fuel-dispensed.jpg)

## Related Pages

- [Walkthrough: Transit Transport](/fleet-management/transport-walkthrough)
- [Trips](/fleet-management/trips)
- [Vehicles & Trailers](/fleet-management/vehicles-and-trailers)
