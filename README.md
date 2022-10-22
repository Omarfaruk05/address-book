# Project Name: Address Book

### _Besically this project is a storhouse of addresses.For building purpas i use nodeJs, expressJs, mongodb._

# TOKEN-SECRET = Bearer eyJhbGciOiJIUzI1NiJ9.YWJjZGU.NZd3O3A-L5iFQDyClSRJM7oq4oppm6tFE0IU8tkIF2E

## POST, PATCH, DELETE, UPDATE routes are protected. That means you have to pass TOKEN-SECRET as headers .

## API end points:

- # https://address-book-iota.vercel.app/api/v1/add-contact
  This route is created for add a single contact. Like:
  {
  "name": "Md. Rahuk Khan",
  "email": "rahulkhan149518@gmail.com",
  "contactNumber": "+8801467904262",
  "country": "Bangladesh",
  "address": "Comilla, Dhaka"
  }
- # https://address-book-iota.vercel.app/api/v1/add-bulk-contact
  This route is created for add multiple contact. Like:
  [
  {
  "name": "Md. Salman Khan",
  "email": "khansalman@gmail.com",
  "contactNumber": "+8801467900262",
  "country": "India",
  "address": "Mombai, India"
  },
  {
  "name": "Md.Raesel Hassan",
  "email": "hakerrasel@gmail.com",
  "contactNumber": "+8801967900262",
  "country": "Bangladesh",
  "address": "Gazipur, Dhaka"
  }
  ]
- # https://address-book-iota.vercel.app/api/v1/get-contact
  This route is created for getting a single contact details.
- # https://address-book-iota.vercel.app/api/v1/get-all-contact
  This route is created for getting all contacts. Here you can filter sort and pagination.

#### Demao api for pagination, filter and sort:

https://address-book-iota.vercel.app/api/v1/get-all-contact?sort=email&fields=name,email&page=2&limit=2

- # https://address-book-iota.vercel.app/api/v1/update-contact/:id
  This route is created for update a contact.[Here (:id) is the update's product id]
- # https://address-book-iota.vercel.app/api/v1/delete-contact/:id
  This route is created for delete a contact.[Here (:id) is the deleted product id]
