# Roles & Permissions

Kani LMS uses a permission-based access model. What you see in the sidebar and what actions you can take (view, create, edit, delete) on each page depend on the permissions attached to your account.

## How Access Works

A role is a reusable set of permissions. Users assigned a role get exactly that role's permissions, and stay in sync: if an administrator changes a role's permissions, everyone with that role is updated immediately. Administrators can create their own roles, for example *Dispatcher* or *Accountant*.

Instead of a role, a user can be given a custom set of permissions (**Custom permissions** on the user's form). This is useful for one-off cases where someone needs access that doesn't fit an existing role.

Permissions are granted per page and per action, for example `imports.view`, `imports.create`, `imports.edit`, `imports.delete`. Imports, exports, freight forwarding, transport requests and trips also have finer-grained permissions for attachments and for viewing, creating, reviewing and approving expenses. Trips have the same four for fuel requests.

If a menu item, button, or page you expect to see is missing, it's most likely a permission that hasn't been granted to your account. Ask your administrator.

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
