# BPS Minimal Database

<meta-info>
<meta-title>BPS Minimal Database</meta-title>
<meta-desc>This is for creating an empty database with only data needed for the application start up. There will be only one 
users in the system, the other ones should be created manually or using some automation tool.
</meta-desc>
<meta-author>Stefano Pisano</meta-author>
<meta-date>2023-01-19</meta-date>
</meta-info>

## Purpose

This is for creating an empty database with only data needed for the application start up. There will be only one
users in the system, the other ones should be created manually or using some automation tool.

## Database Creation

Database should be created using collation **SQL_Latin1_General_CP1_CI_AS**

### Steps

1. Create basic database structure using files inside _DDL_ Please check step below.
2. Launch generic_combo.sql
3. Launch drop_office_info_constraint.sql
4. Launch resource_ico_offices.sql
5. Launch add_constraint_ico_offices.sql
6. Launch office_info.sql
7. Launch resource_mng.sql
8. Launch resource_offices.sql
9. Launch resource_contacts.sql
10. Launch languages.sql
11. Launch extChannelsANDinvoice_parameters.sql
12. Launch invoice_office_properties.sql
13. Launch exchange_rates.sql
14. Launch multiple_relation.sql
15. Launch audio_subdivisions.sql
16. Launch plservices.sql
17. Launch plservices_mapping.sql
18. Launch plservice_supplies_subdivisions.sql
19. Launch bina.sql
20. Launch everything inside folder Master Pricelists
21. Launch parameters.sql
22. Launch calendar.sql
23. Launch currencies.sql
24. Launch game_titles.sql
25. Launch project_buckets&buyouts.sql
26. Launch state_detail.sql
27. Launch bank_information.sql
28. Launch resource_addresses.sql
29. Launch vendor_file_category.sql
30. Launch everything inside folder ico_offices
31. Launch resource_fix.sql

Step one should be executed in the following way because there are some links between stored procedures and views:

1. Launch DDL/tables.sql
2. Launch DDL/views.sql
3. Launch DDL/SP&Functions.sql
4. Launch DDL/views.sql
5. Launch DDL/SP&Functions.sql
6. Launch DDL/users.sql
7. Launch DDL/sequences.sql
8. Launch DDL/triggers.sql

## Data hiding

The following information have been removed/altered to hide personal information inside the database:

1. Emails (We set random emails. Those emails does not exists.)
2. Addresses
3. Websites
4. Notes
5. Phone Numbers
6. Price details (check file fix_pricelists.sql)

The database won't contain any real vendor, those resources will be created manually or with some automation tool,
this means that information from live productions won't be present in this new database.

## Pricelists

The above scripts will import the master pricelists. In order to create new pricelists from the master ones you
should execute scripts inside _Additional Pricelists / Template Pricelists_
If you need a Client Pricelist you could also use scripts inside _Client Pricelists_

## Users & Passwords

In order to hide passwords used in real environments we set the same password to all resources, the credentials for
the admin users are the following:
`Username: mng_test`
`Password: adminPwd4test!`
