# CARE
## Case Management System

CARE needs a mysql database to be created.  Currently the dev version is looking for a database with the following details:
```
  default: {
    adapter: 'sails-mysql',
    url: 'mysql://careuser:mysqlpassword@localhost:3306/care_dev'
  },
```
To change these settings you need to modify the API/config/env/development.js file

To run CARE you need to start the API:
```
  cd API
  sails lift
```
This starts the API listening on port 3333

The run the application server:
```
  cd APP
  sails lift
```
This starts the Application listening on port 4444. 

After loading both the API and the APP you will be able to browse to the CARE application by pointing your browser to:
```
  http://localhost:4444/
```


To create an admin account you need to POST a username, password and fullName to the /user endpoint:
```
curl --request POST \
  --url http://localhost:3333/user \
  --header 'cache-control: no-cache' \
  --header 'content-type: text/json' \
  --header 'postman-token: 47522508-1f9c-31f0-c00e-8f4317f95a1a' \
  --data '{\n	"username": "admin",\n	"password": "password",\n	"fullName": "System Admin"\n}'
```

You should now be able to login with your admin user and ... do nothing as the system is just a login at the moment ... more to follow :)


