# serverless-api-
## What is the root URL to your API?

https://mw53d9vsii.execute-api.us-east-1.amazonaws.com/people

# get-people

https://mw53d9vsii.execute-api.us-east-1.amazonaws.com/people

https://mw53d9vsii.execute-api.us-east-1.amazonaws.com/people/%7Bid%7D

# put

https://mw53d9vsii.execute-api.us-east-1.amazonaws.com/people/%7Bid%7D

# delete

https://mw53d9vsii.execute-api.us-east-1.amazonaws.com/people/%7Bid%7D

# post-people

https://mw53d9vsii.execute-api.us-east-1.amazonaws.com/people





## What are the routes?

1. GET /people
2. GET /people/{id}
3. POST /people
4. UPDATE /people/{id}
5. DELETE /people/{id}

## What inputs do they require?

| Method | input            |
| ------ | ---------------- |
| GET    | nothing          |
| GET    | nothing          |
| POST   | JSON obj in body |
| PUT    | JSON obj in body |
| DELETE | nothing          |

## What output do they return?

- GET /people ==> all the items
- GET /people/id ==> item that match id param
- POST /people ==> returns an object representing one record, by its id (##)
- PUT /people/id ==> returns an object representing one record, by its id (##)

- DELETE /people/id ==>returns an empty object

## UML Diagram

![UML](/1.jpg)
