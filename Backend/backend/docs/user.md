# API specs user

## register Admin

Endpoint: POST /api/

Request Body :

```json
{
  "username": "admin",
  "password": 123
}
```

Response Body Success:

```json
{
  "status": "success",
  "message": "user berhasil dibuat",
  "data": {
    "username": "admin",
    "password": "123"
  }
}
```

Response Body Failed:

```json
{
  "status": "fail",
  "message": "request body error"
}
```

Process Failed:

```json
{
  "status": "error",
  "message": "system error"
}
```

## login user

Endpoint: POST /api/login

Request Body :

```json
{
  "username": "admin",
  "password": 123
}
```

Response Body Success:

```json
{
  "status": "success",
  "token": "NEW_TOKEN",
  "message": "berhasil login"
}
```

Response Body Failed:

```json
{
  "status": "fail",
  "message": "request body error"
}
```

Process Failed:

```json
{
  "status": "error",
  "message": "system error"
}
```

## logout user

Endpoint: POST /api/logout

Response Body Success:

```json
{
  "status": "success",
  "message": "user berhasil logout"
}
```

Response Body Failed:

```json
{
  "status": "fail",
  "message": "request body error"
}
```

Process Failed:

```json
{
  "status": "error",
  "message": "system error"
}
```
