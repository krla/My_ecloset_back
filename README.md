# Project Name

## Introduction

- My eCloset is an app that helps you to keep all your clothes in virtuals closets, where you can choose severals pieces of cloth and combine between them to keep your looks, and put them in a calendar. 

## MODELS

### USER MODEL

| KEY       | TYPE   | REQUIRED | VALIDATIONS  |
| --------- | ------ | ---------|------------- |
| email     | String | true     | regex(email) |
| name      | String | true     |              |
| gender    | String | true     |              |
| password  | String | true     | min(6)       |
| createdAt | Number |          |              |

### CLOTH MODEL

| KEY      | TYPE     | REFERENCE | REQUIRED | VALIDATIONS / DEFAULT
| -------- | -------- | --------- | -------- | ---------------
| name     | String   | -         | true     | -
| img      | String   | -         | true     | -
| user     | ObjectId | Users     | true     | current_user

### LOOK MODEL

| KEY           | TYPE      | REFERENCE | REQUIRED | VALIDATIONS / DEFAULT
| --------      | --------  | --------- | -------- | ---------------
| name          | String    | -         | true     | -
| cloth         | [ObjectId]| Cloth     | true     | -
| category_look | String    |           | true     | -


### CATEGORY MODEL
| KEY       | TYPE       | REFERENCE | REQUIRED | VALIDATIONS / DEFAULT
| --------  | --------   | --------- | -------- | ---------------
| name      | String     |           | true     | -
| cloth     | [ObjectId] | Cloth     | true     | -

### CLOSET MODEL
| KEY       | TYPE       | REFERENCE | REQUIRED | VALIDATIONS / DEFAULT
| --------  | --------   | --------- | -------- | ---------------
| name      | String     |           | true     | -
| categories| [ObjectId] | Category  | true     | -


## API ROUTES

Please note that all routes in this API should be called with the `/api` prefix before the endpoint:

```
POST http://DOMAIN/api/auth/signup
```

### AUTHENTICATION ENDPOINTS
> TOKEN Required: NO

| METHOD | URL           | What does it do       |
| ------ | ------------- | --------------------  |
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

| METHOD | URL                                                   | What does it do                            |
| ------ | ----------------------------------------------------  | ------------------------------------------ |
| GET    | `/me/closets`                                         | Get All closets                            |
| GET    | `/me/closets/:closetId`                               | Get One closet                             |
| POST   | `/me/closets`                                         | Create closet                              |
| DELETE | `/me/closets/:closetId`                               | Delete closet                              |
| GET    | `/me/closets/:closetId/categorys/`                    | Get All categorys in a closet              |
| GET    | `/me/closets/:closetId/categorys/:categoryId/`        | Get One category in a closet               |
| POST   | `/me/closets/:closetId/categorys/`                    | Create category in a closet                |
| DELETE | `/me/closets/:closetId/categorys/:categoryId/`        | Delete category in a closet                |
| GET    | `/me/closets/:closetId/categorys/:categoryId/clothes` | Get All clothes in a category in a closet  |
| POST   | `/me/closets/:closetId/categorys/:categoryId/cloth`   | Create a cloth in a category in a closet   |
| DELETE | `/me/closets/:closetId/categorys/:categoryId/cloth`   | Delete a cloth in a category in a closet   |

### LOOK ENDPOINTS
> TOKEN Required: YES

| METHOD | URL                 | What does it do          |
| ------ | -----------------   | ------------------------ |
| GET    | `/me/looks`         | Get All Looks            |
| GET    | `/me/looks/:lookId` | Get One Look             |
| POST   | `/me/looks`         | Create Look              |
| PUT    | `/me/looks/:lookId` | Update Look              |
| DELETE | `/me/looks/:lookId` | Delete Look              |

