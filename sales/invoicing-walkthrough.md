# Walkthrough: Quotation to Paid Invoice

This guide follows one job from price to payment. Kilemba Mining's transit transport job (Dar es Salaam to Lusaka) is quoted, the quotation is linked to the job's logistics file, an invoice is raised from the quotation and linked to the trip, and the customer pays in two instalments.

The job itself is the one from the [transport walkthrough](/fleet-management/transport-walkthrough). Each step links to the page that covers that screen in more detail.

::: tip The sample job used in this guide
| Record | Sample value |
|---|---|
| Customer | Kilemba Mining |
| Logistics File | LF0013: Transport Transit, Dar es Salaam to Lusaka |
| Trip | TRP0005: main leg + empty return, truck T512EKR |
| Quotation | QT0004: Transport fee TZS 9,500,000 + Agency fee TZS 450,000 + VAT TZS 81,000 = TZS 10,031,000 |
| Invoice | INV0046, same lines, transport line linked to TRP0005 |
| Payments | PAY0007 (50% advance) + PAY0008 (balance), TZS 5,015,500 each |

All names and numbers are sample data.
:::

## The flow at a glance

1. [Create the quotation](#_1-create-the-quotation)
2. [Approve the quotation](#_2-approve-the-quotation)
3. [Link the quotation to the logistics file](#_3-link-the-quotation-to-the-logistics-file)
4. [Create the invoice from the quotation](#_4-create-the-invoice-from-the-quotation)
5. [Link the invoice to the file and the trip](#_5-link-the-invoice-to-the-file-and-the-trip)
6. [Approve the invoice](#_6-approve-the-invoice)
7. [Record the advance payment](#_7-record-the-advance-payment)
8. [Record the balance](#_8-record-the-balance)
9. [Check the logistics file's profit](#_9-check-the-logistics-file-s-profit)

---

## 1. Create the quotation

1. Go to **Sales → Quotations** and select **New Quotation**.
2. Select the **Customer** (Kilemba Mining) and check the **Currency**, **Quotation Date** and **Expiry Date**.
3. Under **Line Items**, select **Add Item** for each charge. Pick the item, rewrite the description for this job, and set the **Qty**, **Unit** and **Unit Price**:
   - **Transport fee**: *Road transport Dar es Salaam to Lusaka, Zambia (via Tunduma/Nakonde)*, 1 Trip, TZS 9,500,000
   - **Agency fee**: *Transit documentation and border clearance at Tunduma*, 1 Trip, TZS 450,000
4. Under **Taxes**, select **Add Tax** and choose **VAT**. VAT fills in at 18% of the whole subtotal. Here only the agency fee is taxable (transit transport is zero-rated), so we entered an **Exact Amount** of TZS 81,000 (18% of 450,000) instead. Entering an exact amount clears the percentage.
5. Add any internal **Notes**, check the **Terms & Conditions**, and select **Create Quotation**.

![New quotation with two lines and VAT on the agency fee only](/images/invoicing-walkthrough/quotation-new.jpg)

The quotation is saved as **QT0004**, status **Draft**.

Details: [Quotations](/sales/quotations)

## 2. Approve the quotation

Once the customer accepts, open the quotation and select **Actions → Approve**. Kani LMS asks you to confirm, because an approved quotation can't be edited. Select **Approve**.

![Approve quotation confirmation](/images/invoicing-walkthrough/quotation-approve-confirm.jpg)

The quotation is now locked: *This quotation is Approved and cannot be edited.*

An approved quotation has two buttons: **Create Logistics File** and **Create Invoice**.

![Approved quotation](/images/invoicing-walkthrough/quotation-approved.jpg)

::: info Starting a new job from the quotation
For a new job, select **Create Logistics File** here. The file opens with the customer and quotation filled in. In this guide the job already existed, so we link the quotation to it instead.
:::

## 3. Link the quotation to the logistics file

The logistics file LF0013 already has the trip's fuel as expenses (TSh 4,756,500) and nothing invoiced, so it shows a loss.

![Logistics file before invoicing](/images/invoicing-walkthrough/lf-before-invoice.jpg)

1. Open **Logistics Files → LF0013**.
2. In **Quotation**, search for **QT0004**. Only the customer's quotations are listed.
3. Select it, then select **Save Changes**.

![Linking the quotation to the logistics file](/images/invoicing-walkthrough/lf-link-quotation.jpg)

The file now shows **View QT0004** next to the field.

## 4. Create the invoice from the quotation

Open QT0004 and select **Create Invoice**. A **New Sales Invoice** opens with the customer, currency, line items, descriptions and VAT copied from the quotation. **Invoice Date** defaults to today and **Due Date** to 30 days later.

::: tip From the quotation or from the file?
- **Create Invoice** on an approved quotation copies its lines and taxes. It leaves the **Logistics File** empty, because one quotation can be used for several logistics files.
- **New Invoice** on a logistics file fills in the customer and the file, but starts with no lines.

Starting from the quotation saves retyping the charges. Choose the logistics file yourself (next step).
:::

## 5. Link the invoice to the file and the trip

1. In **Logistics File**, search for and select **LF0013**. This puts the invoice on the file's **Sales Invoices** list and counts it in the file's **Invoiced Amount**.
2. Under the transport line, select **Link to trip / job**. The list shows *this customer's work on the selected file*. Pick **TRP0005 · Main + Empty return**.

![Linking an invoice line to the trip](/images/invoicing-walkthrough/invoice-link-trip.jpg)

The line now carries a chip: *Trip TRP0005 · Main + Empty return · T512EKR*. Linking a line is optional. We left the agency fee unlinked.

![Invoice from the quotation, linked to the file and the trip](/images/invoicing-walkthrough/invoice-new-from-quotation.jpg)

3. Select **Create Invoice**.

The invoice is saved as **INV0046**, **Draft** and **Unpaid**, with links back to **QT0004** and **LF0013** at the top.

## 6. Approve the invoice

While it's a draft, the invoice can still be edited. When it's ready, select **Actions → Approve**. (**Reject** and **Delete** are also on this menu.)

![Draft invoice Actions menu](/images/invoicing-walkthrough/invoice-draft-actions.jpg)

Confirm with **Approve** in the *Approve invoice* box. For a debit note, the box says *debit note* instead.

![Approve invoice confirmation](/images/invoicing-walkthrough/invoice-approve-confirm.jpg)

The invoice is now **Approved** and locked. Use **Print** to send it to the customer.

![Approved invoice](/images/invoicing-walkthrough/invoice-approved.jpg)

Details: [Sales Invoices](/sales/sales-invoices)

## 7. Record the advance payment

The quotation's terms ask for 50% before work starts. When the advance arrives:

1. Scroll to **Payments** on the invoice and select **Record Payment**.
2. Check the summary: **Invoice Total**, **Already Paid** and **Balance Due**.
3. Set the **Payment Date** and **Amount**. The amount starts at the full balance. We changed it to TZS 5,015,500.
4. Choose the **Payment Method**. **Received From** shows the customer.
5. Enter the **Reference** (bank reference or receipt number) and any **Notes**.
6. Select **Record Payment**.

![Record Payment](/images/invoicing-walkthrough/invoice-record-payment.jpg)

The payment is listed as **PAY0007** and the invoice shows **Partially Paid**, with TZS 5,015,500 still due.

![Partially paid invoice](/images/invoicing-walkthrough/invoice-partially-paid.jpg)

## 8. Record the balance

When the cargo is delivered and the customer pays the rest, select **Record Payment** again and use **Pay Full** to fill in the remaining balance. Add the date, method and reference, and record it.

The invoice is now **Paid**, both payments are listed, and **Balance Due** is 0.00. **Record Payment** no longer appears.

![Paid invoice](/images/invoicing-walkthrough/invoice-paid.jpg)

## 9. Check the logistics file's profit

Back on LF0013, the cards now show **Invoiced Amount** TSh 10,031,000 and **Profit / Loss** TSh 5,274,500 (invoiced amount less the trip's fuel expenses).

![Logistics file after invoicing](/images/invoicing-walkthrough/lf-after-invoice.jpg)

The file's **Sales Invoices** list shows INV0046 as **Approved** and **Paid**, next to the trip and its expenses.

![Expenses and sales invoices on the logistics file](/images/invoicing-walkthrough/lf-after-invoice-bottom.jpg)

The invoice also shows on **Sales → Sales Invoices** as **Approved** and **Paid**, and counts towards **Revenue** on the [dashboard](/getting-started/dashboard).

## Related Pages

- [Quotations](/sales/quotations)
- [Sales Invoices](/sales/sales-invoices)
- [Logistics Files](/clearing-and-forwarding/logistics-files)
- [Walkthrough: Transit Transport](/fleet-management/transport-walkthrough)
