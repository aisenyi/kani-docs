# Roles & Permissions

Kani uses a permission-based access model. What you see in the sidebar and what actions you can take (view, create, edit, delete) on each page depend on the permissions attached to your account.

## Roles

An administrator can create **Roles** (for example, Admin, Manager, Dispatcher, Accountant) and attach a set of permissions to each one. Assigning a role to a user grants them that role's permissions, and stay in sync automatically — if an administrator updates a role's permissions, everyone with that role is updated immediately.

Kani ships with three default roles:

- **Admin** — full access
- **Manager** — broad operational access, typically including approvals
- **User** — standard day-to-day access

## Individual permissions

Instead of a role, a user can be given an individual, custom set of permissions. This is useful for one-off cases where someone needs access that doesn't fit an existing role.

## What permissions control

Permissions are granted per page and per action, for example `imports.view`, `imports.create`, `imports.edit`, `imports.delete`. Some areas (imports, exports, transport requests, trips, freight forwarding) also have finer-grained permissions for sub-actions like attachments and expense review/approval.

If a menu item, button, or page you expect to see is missing, it's most likely a permission that hasn't been granted to your account — ask your administrator.

## Managing roles and users

Administrators manage roles and user access under **Administration → Users** and **Administration → Roles**. See [Users](/administration/users) and [Roles & Permissions](/administration/roles-and-permissions) under Administration.
