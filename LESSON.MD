Stan said you can just type in the normal terminal "creatdb dbname" to create a database

To look into your database you can do \c (to connect) then your database name (example: \c dbname)

Then you can do \d (to "describe) then your database name (example: \d dbname) - it "describes" aka visualizes your database in the terminal (like how pgadmin is a GUI to see your db, you can just do this instead if you didn't want to use pgadmin)

You then can just type normal SQL in the terminal as you would in pgadmin (example: select * from users where id=1)

The purpose of Express Router is to be able to organize/categorize our routes.
Otherwise our server.js file would be huge and look messy with every single route in the same file