# Roles & Permissions

Kani LMS uses a permission-based access model. What you see in the sidebar and what actions you can take (view, create, edit, delete) on each page depend on the permissions attached to your account.

## Roles

A role is a reusable set of permissions. Users assigned a role get exactly that role's permissions, and stay in sync: if an administrator changes a role's permissions, everyone with that role is updated immediately. Administrators can create their own roles, for example *Dispatcher* or *Accountant*.

Kani LMS comes with three system roles:

| Role | Access |
|---|---|
| **System Admin** | Full access to all features |
| **Logistics Manager** | Can manage operations and approve expenses, but can't delete records or manage users |
| **Logistics User** | Standard access: view and create records |

## Individual permissions

Instead of a role, a user can be given a custom set of permissions (**Custom permissions** on the user's form). This is useful for one-off cases where someone needs access that doesn't fit an existing role.

## What permissions control

Permissions are granted per page and per action, for example `imports.view`, `imports.create`, `imports.edit`, `imports.delete`. Imports, exports, freight forwarding, transport requests and trips also have finer-grained permissions for attachments and for viewing, creating, reviewing and approving expenses. Trips have the same four for fuel requests.

If a menu item, button, or page you expect to see is missing, it's most likely a permission that hasn't been granted to your account. Ask your administrator.

## Managing roles and users

Administrators manage roles and user access under **Administration → Users** and **Administration → Roles**. See [Users](/administration/users) and [Roles & Permissions](/administration/roles-and-permissions) under Administration.
