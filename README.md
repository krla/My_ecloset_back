# Project Name

## Introduction

- My eCloset is an app that helps you to keep all your clothes in virtuals closets, where you can choose severals pieces of cloth and combine between them to keep your looks, and put them in a calendar. 

## MODELS

### USER MODEL

| KEY             | TYPE      |REFERENCE      | REQUIRED | VALIDATIONS         |
| --------------- | ------    |-------------  | ---------|-------------        |
| email           | String    |               | true     | regex(email)        |
| name            | String    |               | true     |                     |
| gender          | String    |               | true     | enum: hombre, mujer |
| password        | String    |               | true     | min(6)              |
| img_url         | String    | -             | true     | -                   |
| createdAt       | Date      |               |          | -                   |
| category_looks  | [ObjectId]| category_look |          | -                   |
| closets         | [ObjectId]| Closets       |          | -                   |

### CLOTH MODEL

| KEY       | TYPE       | REFERENCE | REQUIRED | VALIDATIONS / DEFAULT
| --------  | --------   | --------- | -------- | ---------------
| name      | String     | -         | true     | -
| img_url   | String     | -         | true     | -

### LOOK MODEL
| KEY           | TYPE      | REFERENCE | REQUIRED | VALIDATIONS / DEFAULT
| --------      | --------  | --------- | -------- | ---------------
| name          | String    | -         | true     | -
| cloth         | [ObjectId]| Cloth     | true     | -
| date          | [Date]    |           |          | -

### CATEGORY MODEL
| KEY       | TYPE       | REFERENCE | REQUIRED | VALIDATIONS / DEFAULT
| --------  | --------   | --------- | -------- | ---------------
| name      | String     |           | true     | -
| cloths    | [ObjectId] | Cloth     |          | -

### CATEGORY_LOOK MODEL
| KEY       | TYPE       | REFERENCE | REQUIRED | VALIDATIONS / DEFAULT
| --------  | --------   | --------- | -------- | ---------------
| name      | String     |           | true     | -
| looks     | [ObjectId] | Look      |          | -

### CLOSET MODEL
| KEY        | TYPE       | REFERENCE | REQUIRED | VALIDATIONS / DEFAULT
| --------   | --------   | --------- | -------- | ---------------
| name       | String     |           | true     | -
| categories | [ObjectId] | Category  |          | -

## API ROUTES
Please note that all routes in this API should be called with the `/api` prefix before the endpoint:

```
POST http://DOMAIN/api/auth/signup
```

### AUTHENTICATION ENDPOINTS
> TOKEN Required: NO

| METHOD | URL            | What does it do      |
| ------ | -------------- | -------------------- |
| POST   | `/auth/signup` | Create a new account |
| POST   | `/auth/login`  | Authenticates a user |

### USER ENDPOINTS
> TOKEN Required: YES

| METHOD | URL              | What does it do          |
| ------ | -----------------| ------------------------ |
| GET    | `/me`            | Get User By Id           |
| PUT    | `/me`            | Update User By Id        |
| DELETE | `/me`            | Delete User  By Id       |

### CLOSET ENDPOINTS
> TOKEN Required: YES

| METHOD | URL                                                             | What does it do                            |
| ------ | --------------------------------------------------------------- | ------------------------------------------ |
| GET    | `/me/closets`                                                   | Get All closets                            |
| GET    | `/me/closets/:closetId`                                         | Get One closet                             |
| POST   | `/me/closets`                                                   | Create closet                              |
| DELETE | `/me/closets/:closetId`                                         | Delete closet                              |
| GET    | `/me/closets/:closetId/categories/`                             | Get All categories in a closet             |
| POST   | `/me/closets/:closetId/categories/`                             | Create category in a closet                |
| DELETE | `/me/closets/:closetId/categories/:categoryId/`                 | Delete category in a closet                |
| GET    | `/me/closets/:closetId/categories/:categoryId/clothes`          | Get All clothes in a category in a closet  |
| POST   | `/me/closets/:closetId/categories/:categoryId/clothes`          | Create a cloth in a category in a closet   |
| DELETE | `/me/closets/:closetId/categories/:categoryId/clothes/:clothId` | Delete a cloth in a category in a closet   |

### LOOK ENDPOINTS
> TOKEN Required: YES

| METHOD | URL                                                 | What does it do        |
| ------ | --------------------------------------------------  | -----------------------|
| GET    | `/me/category_looks`                                | Get All category_looks |
| POST   | `/me/category_looks`                                | Create category_look   |
| DELETE | `/me/category_looks`                                | Delete category_looks  |
| GET    | `/me/category_looks/:categoryId/looks`              | Get All Looks          |
| GET    | `/me/category_looks/:categoryId/looks/:lookId`      | Get a Look             |
| POST   | `/me/category_looks/:categoryId/looks`              | Create Look            |
| PUT    | `/me/category_looks/:categoryId/looks/:lookId`      | Update Look            |
| DELETE | `/me/category_looks/:categoryId/looks/:lookId`      | Delete Look            |
| GET    | `/me/dates`                                         | Get all dates          |
| POST   | `/me/category_looks/:categoryId/looks/:lookId/date` | Add date               |
| PUT    | `/me/category_looks/:categoryId/looks/:lookId/date` | Modify date            |
| DELETE | `/me/category_looks/:categoryId/looks/:lookId/date` | Delete date            |


