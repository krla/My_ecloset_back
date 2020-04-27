# Project Name

## Introduction

- Add a project description

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



### CLOSET MODEL
| KEY       | TYPE     | REFERENCE | REQUIRED | VALIDATIONS / DEFAULT
| --------  | -------- | --------- | -------- | ---------------
| name      | String   |           | true     | -
| user      | ObjectId | Users     | true     | current_user
| categories| [String] |           | true     |


## API ROUTES

Please note that all routes in this API should be called with the `/api` prefix before the endpoint:

```
POST http://DOMAIN/api/auth/signup
```

### AUTHENTICATION ENDPOINTS
> TOKEN Required: NO

| METHOD | URL           | What does it do      |
| ------ | ------------- | -------------------- |
| POST   | `auth/signup` | Create a new account |
| POST   | `auth/login`  | Authenticates a user |

### TODO ENDPOINTS
> TOKEN Required: YES

| METHOD | URL                       | What does it do          |
| ------ | ------------------------- | ------------------------ |
| GET    | `me/todos`                | Get All My Todos         |
| GET    | `me/todos/:id`            | Get One Todo             |
| POST   | `me/todos`                | Create One Todo          |
| PUT    | `me/todos/:id`            | Update Todo              |
| DELETE | `me/todos/:id`            | Delete Todo              |

### TODOs COMMENTS
> TOKEN Required: YES

| METHOD | URL                             | What does it do             |
| ------ | ------------------------------- | --------------------------- |
| GET    | `me/todos/:todoId/comments`     | Get All Comments in a Todo  |
| POST   | `me/todos/:todoId/comments`     | Create a Comment in a Todo  |
| PUT    | `me/todos/:todoId/comments/:id` | Update a Comment in a Todo  |
| DELETE | `me/todos/:todoId/comments/:id` | Deletes a Comment in a Todo |

