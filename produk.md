# API laporan

## create produk

Endpoint: POST /api/produk

Request Body :

```json
{
  "id": 1,
  "nama": 1,
  "harga": "",
  "link": "",
  "stok": "",
  "image": "",
  "jenis": "",
  "created_at": "",
  "update_at": "",

}
```

Response Body Success:

```json
{
  "status": "success",
  "message": "produk berhasil dibuat",
  "data": {
    "id": 1,
  "nama": 1,
  "harga": "",
  "link": "",
  "stok": "",
  "image": "",
  "jenis": "",
  "created_at": "",
  "update_at": "",
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

## get produk all

Endpoint: GET /api/produk

Response Body Success:

```json
{
  "status": "success",
  "data": 
    {
      "id": 1,
  "nama": 1,
  "harga": "",
  "link": "",
  "stok": "",
  "image": "",
  "jenis": "",
  "created_at": "",
  "update_at": "",
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

## get laporan by id

Endpoint: GET /api/laporan/:id

Response Body Success:

```json
{
  "status": "success",
  "data": {
    "id": 1,
  "nama": 1,
  "harga": "",
  "link": "",
  "stok": "",
  "image": "",
  "jenis": "",
  "created_at": "",
  "update_at": "",
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

## delete laporan

Endpoint: DEL /api/produk/:id

Response Body Success:

```json
{
  "status": "success",
  "message": "laporan berhasil dihapus"
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
