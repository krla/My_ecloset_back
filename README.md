# My E-Closet

## Introduction

My eCloset is an app that helps you to keep all your clothes in virtuals closets, where you can choose severals pieces of cloth and combine between them to keep your looks, and put them in a calendar.

## MODELS

![](./docs/data_model.png)

### USER MODEL

KEY             | TYPE      |REFERENCE      | REQUIRED | VALIDATIONS
--------------- | ------    |-------------  | ---------|-------------
email           | String    |               | true     | regex(email)
name            | String    |               | true     |
gender          | String    |               | true     | enum: man, woman
password        | String    |               | true     | min(6)
img_url         | String    |               | true     | -
created_at      | Number    |               |          | -
category_looks  | [ObjectId]| category_look |          | -
closets         | [ObjectId]| closet        |          | -

### CLOTH MODEL

KEY       | TYPE       | REFERENCE | REQUIRED | VALIDATIONS / DEFAULT
--------  | --------   | --------- | -------- | ---------------
name      | String     | -         | true     | -
img_url   | String     | -         | true     | -

### LOOKS
#### CATEGORY_LOOK MODEL
KEY       | TYPE       | REFERENCE | REQUIRED | VALIDATIONS / DEFAULT
--------  | --------   | --------- | -------- | ---------------
name      | String     |           | true     | -
looks     | [ObjectId] | look      |          | -

#### LOOK MODEL
KEY           | TYPE      | REFERENCE | REQUIRED | VALIDATIONS / DEFAULT
--------      | --------  | --------- | -------- | ---------------
name          | String    | -         | true     | -
clothes       | [ObjectId]| cloth     | true     | -
dates         | [Date]    |           |          | -


### CLOSETS
#### CLOSET MODEL
KEY        | TYPE       | REFERENCE | REQUIRED | VALIDATIONS / DEFAULT
--------   | --------   | --------- | -------- | ---------------
name       | String     |           | true     | -
categories | [ObjectId] | category  |          | -

#### CATEGORY MODEL
KEY       | TYPE       | REFERENCE | REQUIRED | VALIDATIONS / DEFAULT
--------  | --------   | --------- | -------- | ---------------
name      | String     |           | true     | -
clothes   | [ObjectId] | cloth     |          | -



## API ROUTES
Please note that all routes in this API should be called with the `/api` prefix before the endpoint:

```
POST http://DOMAIN/api/auth/signup
```

### AUTHENTICATION ENDPOINTS
> TOKEN Required: NO

METHOD | URL            | What does it do
------ | -------------- | --------------------
POST   | `/auth/signup` | Create a new account
POST   | `/auth/login`  | Authenticates a user

### USER ENDPOINTS
> TOKEN Required: YES

METHOD | URL              | What does it do
------ | -----------------| ------------------------
GET    | `/me`            | Get Current User
PUT    | `/me`            | Update Current User
DELETE | `/me`            | Delete Current User

### CLOSET ENDPOINTS
> TOKEN Required: YES

METHOD | URL                   | What does it do
------ | --------------------- | ------------------------------------------
GET    | `/me/closets`         | Get All My Closets
POST   | `/me/closets`         | Create A closet
GET    | `/me/closets/:id`     | Get A closet by Id
DELETE | `/me/closets/:id`     | Delete closet

### CLOSET CATEGORY ENDPOINTS
> TOKEN Required: YES

METHOD | URL                                        | What does it do
------ | ------------------------------------------ | ------------------------------------------
GET    | `/me/closets/:closetId/categories/`        | Get All categories in a closet
POST   | `/me/closets/:closetId/categories/`        | Create category in a closet
DELETE | `/me/closets/:closetId/categories/:id/`    | Delete A category in a closet

### CLOSET CATEGORY CLOTHES ENDPOINTS
> TOKEN Required: YES

METHOD | URL                                                        | What does it do
------ | ---------------------------------------------------------- | ------------------------------------------
GET    | `/me/closets/:closetId/categories/:categoryId/clothes`     | Get All clothes in a category in a closet
POST   | `/me/closets/:closetId/categories/:categoryId/clothes`     | Create a cloth in a category in a closet
DELETE | `/me/closets/:closetId/categories/:categoryId/clothes/:id` | Delete a cloth in a category in a closet

### CATEGORY_LOOK ENDPOINTS
> TOKEN Required: YES

METHOD | URL                                                 | What does it do
------ | --------------------------------------------------  | -----------------------
GET    | `/me/category_looks`                                | Get All category_looks
POST   | `/me/category_looks`                                | Create category_look
DELETE | `/me/category_looks`                                | Delete category_looks

### CATEGORY_LOOK LOOKS ENDPOINTS
> TOKEN Required: YES

METHOD | URL                                                 | What does it do
------ | --------------------------------------------------  | -----------------------
GET    | `/me/category_looks/:categoryId/looks`              | Get All Looks in a category_look
POST   | `/me/category_looks/:categoryId/looks`              | Create a Look in a category_look
GET    | `/me/category_looks/:categoryId/looks/:id`          | Get a Look by Id
PUT    | `/me/category_looks/:categoryId/looks/:id`          | Update Look  by Id
DELETE | `/me/category_looks/:categoryId/looks/:id`          | Delete Look  by Id

### CATEGORY_LOOK LOOKS DATES NDPOINTS
> TOKEN Required: YES

METHOD | URL                                                 | What does it do
------ | --------------------------------------------------  | -----------------------
GET    | `/me/dates`                                         | Get all dates
POST   | `/me/category_looks/:categoryId/looks/:lookId/date` | Add date
PUT    | `/me/category_looks/:categoryId/looks/:lookId/date` | Modify date
DELETE | `/me/category_looks/:categoryId/looks/:lookId/date` | Delete date
