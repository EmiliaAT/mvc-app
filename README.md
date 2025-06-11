# CSC340 - MVC App

## Description

Simple CRUD API for Fox Objects with JPA (Hibernate)

### Version

1.0.0

## Installation

- Get the project
  - clone
    ```
    git clone https://github.com/EmiliaAT/crud-jpa-demo.git
    ```
  - OR download zip.
- Open the project in VS Code.
- This project is built to run with jdk 21.
- [Dependencies](https://github.com/EmiliaAT/crud-jpa-demo/blob/main/pom.xml#L32) to JPA and Postgres in addition to the usual Spring Web. JPA handles the persistence, Postgresql is the database to be used.
- [`/src/main/resources/application.properties`](https://github.com/EmiliaAT/crud-jpa-demo/blob/main/src/main/resources/application.properties) This file is the configuration for the PostgreSQL database to use for the API.
  - You MUST have the database up and running before running the project!
    - Login to your neon.tech account.
    - Locate your database project.
    - On the project dashboard, click on "Connect" and select Java.
    - Copy the connection string provided.
    - Paste it as a value for the property `spring.datasource.url`. No quotation marks.
- Build and run the main class. You should see a new table created in the Neon database.

## API Endpoints

Base URL: [`http://localhost:8080/api/foxes`](http://localhost:8080/api/foxes)

1. ### [`/`](http://localhost:8080/api/foxes) (GET)

Gets a list of all Foxes in the database.

#### Response - A JSON array of Fox objects.

```json
[
  {
    "name": "Red Fox",
    "colour": "Red",
    "species": "Vulpes vulpes",
    "description": "The common Red Fox."
  },
  {
    "name": "Arctic Fox",
    "colour": "White",
    "species": "Vulpes lagopus",
    "description": "The common Arctic Fox."
  }
]
```

2. ### [`/{id}`](http://localhost:8080/api/foxes/2) (GET)

Gets an individual Fox in the system. Each Fox is identified by a numeric `id`.

#### Parameters

- Path Variable: `id` \<Long\> - REQUIRED

#### Response - A single Fox

```json
{
  "name": "Arctic Fox",
  "colour": "White",
  "species": "Vulpes lagopus",
  "description": "The common Arctic Fox."
}
```

3. ### [`/name`](http://localhost:8080/api/foxes/name?key=Arctic) (GET)

Gets a list of Foxes with a name that contains the given string.

#### Parameters

- Request Parameter: `key` \<String\> - REQUIRED

#### Response - A JSON array of Fox objects.

```json
[
  {
    "name": "Arctic Fox",
    "colour": "White",
    "species": "Vulpes lagopus",
    "description": "The common Arctic Fox."
  }
]
```

4. ### [`/colour`](http://localhost:8080/api/foxes/colour) (GET)

Gets a list of Foxes with a colour that match the given string.

#### Parameters

- Request Parameter: `key` \<String\> - REQUIRED

#### Response - A JSON array of Fox objects.

```json
[
  {
    "name": "Arctic Fox",
    "colour": "White",
    "species": "Vulpes lagopus",
    "description": "The common Arctic Fox."
  }
]
```

5. ### [`/species`](http://localhost:8080/api/foxes/species) (GET)

Gets a list of Foxes with a species that match the given string.

#### Parameters

- Request Parameter: `key` \<String\> - REQUIRED

#### Response - A JSON array of Fox objects.

```json
[
  {
    "name": "Arctic Fox",
    "colour": "White",
    "species": "Vulpes lagopus",
    "description": "The common Arctic Fox."
  }
]
```

6. ### [`/description`](http://localhost:8080/api/foxes/description) (GET)

Gets a list of Foxes with a description that match the given string.

#### Parameters

- Request Parameter: `key` \<String\> - REQUIRED

#### Response - A JSON array of Fox objects.

```json
[
  {
    "name": "Arctic Fox",
    "colour": "White",
    "species": "Vulpes lagopus",
    "description": "The common Arctic Fox."
  }
]
```

7. ### [`/`](http://localhost:8080/api/foxes) (POST)

Creates a new Fox entry.

#### Request Body

A Fox object. Note the object does not include an ID as this is auto-generated.

```json
{
  "name": "Arctic Fox",
  "colour": "White",
  "species": "Vulpes lagopus",
  "description": "The common Arctic Fox."
}
```

#### Response - The newly created Fox.

```json
{
  "name": "Arctic Fox",
  "colour": "White",
  "species": "Vulpes lagopus",
  "description": "The common Arctic Fox."
}
```

8. ### [`/{id}`](http://localhost:8080/api/foxes/2) (PUT)

Updates an existing Fox.

#### Parameters

- Path Variable: `id` \<Long\> - REQUIRED

#### Request Body

A Fox object with the updates.

```json
{
  "name": "Arctic Fox",
  "colour": "White",
  "species": "Vulpes lagopus",
  "description": "The common Arctic Fox."
}
```

#### Response - the updated Fox object.

```json
{
  "name": "Arctic Fox",
  "colour": "White",
  "species": "Vulpes lagopus",
  "description": "The common Arctic Fox."
}
```

9. ### [`/{id}`](http://localhost:8080/api/foxes/2) (DELETE)

Delete an existing Fox.

#### Parameters

- Path Variable: `id` \<Long\> - REQUIRED

#### Response - 200 OK / Error Response
