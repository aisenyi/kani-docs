# Roles & Permissions

Roles are reusable permission templates. Users assigned a role get exactly its permissions.

For how roles and permissions work, see [Getting Started → Roles & Permissions](/getting-started/roles-and-permissions).

## Overview

Go to **Administration → Roles**. The list shows each role's name, description, how many **Users** have it, its **Type** and how many **Permissions** it includes. The three built-in roles are **System** roles. Roles you create are **Custom**.

| Role | Description |
|---|---|
| **System Admin** | Full access to all features |
| **Logistics Manager** | Can manage operations and approve expenses, cannot delete records or manage users |
| **Logistics User** | Standard access: view and create records |

![Roles list](/images/administration/roles-list.jpg)

## Creating a Role

Create a role when the built-in ones give someone too much or too little access, for example an accounts clerk who only works on quotations, invoices and payments.

1. Go to **Administration → Roles** and select **New Role**.
2. Enter a **Name** (required), for example *Accounts Clerk*, and a short **Description** of what the role can do.
3. Under **Permissions**, tick what the role can do on each page (see [The Permission Matrix](#the-permission-matrix) below). Type in **Search pages…** to find a page quickly. The counter shows how many permissions are ticked, for example **3 of 230 permissions**.
4. Select **Create Role**.

![New Role](/images/administration/role-new.jpg)

The role appears in the list as **Custom**. Assign it to people on the [Users](/administration/users) page.

## The Permission Matrix

Permissions are grouped by area (for example **Documents**, **Commercial** and **Party Data**). Each page has **view**, **create**, **edit** and **delete**, and some have extra rows for attachments, expenses and fuel requests. The box next to a page's name ticks all of that page's permissions. **Select all** and **Clear all** work for the whole list or a single group.

## Editing an Existing Role

Select the pencil icon next to a role to change its name, description or permissions. Changes to a role apply immediately to every user assigned to it.

Custom roles can be deleted with the bin icon. System roles can be edited but not deleted.

## Related Pages

- [Users](/administration/users)
