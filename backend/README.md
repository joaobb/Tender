<h1 align="center">
    <img alt="" src="https://github.com/joaobb/Tender/blob/master/projMisc/logo.png?raw=true" height="150px" />
    <br>the backend</br>
</h1>

Hello and welcome to Tender's backend.

Current postman collection [here](https://www.getpostman.com/collections/58ca3cec9b7c18ad0105).

[Postman documentation.](https://documenter.getpostman.com/view/9283323/TVKHVFab)

Currently deployed at http://tender-api.joaobb.xyz/api/v1

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

CLOUDINARY_NAME=dqz9lty8v
CLOUDINARY_API_KEY=977283554737519
CLOUDINARY_API_SECRET=pfOdtOBS6BKXDOJyVO-MKbTLfKg
```

#### PSA: Don't insert any real passwords on this version, since everyone that has the db access and the token secret can see those.

### Start the server

```sh
$ npm start
```

After these steps, the api will be served at http://localhost:3000

---

#### Projeto da disciplina de Desenvolvimento Web 2020.3/1
