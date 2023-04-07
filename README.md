## daily_my_shopping_asignment
## Task-
# The description of the task is as follows:

1.	There will be a form for a tour manager.
2.	The manager will create a package for a tour.
3.	The fields will be name, duration, number of people, place(city and state are enough), hotel, and restaurant.
4.	In the backend there will be one schema for the package and 3 more schemas for the place, hotel, and restaurant. In the package schema, there will be references for the 3 schemas. When the user submits the form, the reference of place, hotel, and restaurant in the package schema will be connected.
5.	If it is fetched, the data will show the references and other fields accordingly.


## Api Response:-
## Add_hotel
# Response-
{
  "name": "taj hotel",
  "address": "Delhi",
  "_id": "64303fd5ea6950d54bbf8b99",
  "createdAt": "2023-04-07T16:07:49.101Z",
  "updatedAt": "2023-04-07T16:07:49.101Z",
  "__v": 0
}


## Add_place
# Response-
{
  "city": "Delhi",
  "state": "Delhi",
  "_id": "6430408bea6950d54bbf8b9b",
  "createdAt": "2023-04-07T16:10:51.963Z",
  "updatedAt": "2023-04-07T16:10:51.963Z",
  "__v": 0
}

## Add_restaurant
# Response-
{
  "name": "taj hotel",
  "cuisine": "chines food",
  "_id": "64304133ea6950d54bbf8b9d",
  "createdAt": "2023-04-07T16:13:39.596Z",
  "updatedAt": "2023-04-07T16:13:39.596Z",
  "__v": 0
}

##  Add_package
# Response-
{
  "name": "gold",
  "duration": 2000,
  "numPeople": 5,
  "place": "6430408bea6950d54bbf8b9b",
  "hotel": "64303fd5ea6950d54bbf8b99",
  "restaurant": "64304133ea6950d54bbf8b9d",
  "_id": "6430440e9006cfbd33d4c65f",
  "createdAt": "2023-04-07T16:25:50.179Z",
  "updatedAt": "2023-04-07T16:25:50.179Z",
  "__v": 0
}
##  get_package
# Response-
{
  "_id": "6430440e9006cfbd33d4c65f",
  "name": "gold",
  "duration": 2000,
  "numPeople": 5,
  "place": {
    "_id": "6430408bea6950d54bbf8b9b",
    "city": "Delhi",
    "state": "Delhi",
    "createdAt": "2023-04-07T16:10:51.963Z",
    "updatedAt": "2023-04-07T16:10:51.963Z",
    "__v": 0
  },
  "hotel": {
    "_id": "64303fd5ea6950d54bbf8b99",
    "name": "taj hotel",
    "address": "Delhi",
    "createdAt": "2023-04-07T16:07:49.101Z",
    "updatedAt": "2023-04-07T16:07:49.101Z",
    "__v": 0
  },
  "restaurant": {
    "_id": "64304133ea6950d54bbf8b9d",
    "name": "taj hotel",
    "cuisine": "chines food",
    "createdAt": "2023-04-07T16:13:39.596Z",
    "updatedAt": "2023-04-07T16:13:39.596Z",
    "__v": 0
  },
  "createdAt": "2023-04-07T16:25:50.179Z",
  "updatedAt": "2023-04-07T16:25:50.179Z",
  "__v": 0
}