<h1 align="center">
    <img alt="" src="../frontend/ReactJS/src/assets/tender_logo.png" height="150px" />
    <br>the backend</br>
</h1>

Hello and welcome to Tender's backend.

Current postman collection [here](https://www.getpostman.com/collections/58ca3cec9b7c18ad0105).

Current deploy [here](https://tender-apy.herokuapp.com/api/v1).

---

## How-to run the project locally

### Clone the repo:

```
$ git clone https://github.com/joaobb/Tender.git
$ cd Tender/backend/
```

### Install the dependencies

```sh
$ npm install
```

### Set up the environment variables

```sh
$ cp .env-example .env
```

#### Open your favourite text editor and set the variables to the values
 
```
MONGO_HOST=tender.gdn1f.mongodb.net
MONGO_DB=tender
MONGO_USERNAME=github-user
MONGO_PASSWORD=u6UssVSg8kVkytK9

TOKEN_SECRET=7nLyShDwZN
```

#### PSA: Don't insert any real passwords on this version, since everyone that has the db access and the token secret can see those.

### Start the server

```sh
$ npm start
```

After these steps, the api will be served at http://localhost:3000

---

#### Projeto da disciplina de Desenvolvimento Web 2020.3/1
