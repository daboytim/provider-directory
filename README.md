#provider-directory
The provider directory helps healthcare providers find and connect with other healthcare providers.  It acts as a personal address book of provider email addresses.  Specialty is very important when searching as providers often look for available providers within in a particular specialty.

##Usage
Run a local server to host the webapp:

    $ npm start
    
the server will start on port 8080.
    
Execute the unit tests:

    $ npm test
    
Execute the end-to-end tests:

    $ npm run protractor
    

##Features
- Add providers by providing, at a minimum, a Last Name, First Name, and Email Address.

- Filter the list of providers by searching
for a keyword.

- Sort the list of providers by any of the fields in either ascending or descending order.

- Remove providers by checking the box next to the provider and clicking the 'Remove' button.