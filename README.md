# express-deall-technicalTest

## Run Locally

Clone the project

```bash
  git clone https://github.com/adikurniawanid/express-deall-technicalTest.git
```

Go to the project directory

```bash
  cd express-deall-technicalTest
```

Install dependencies

```bash
  npm install
```

Create the database

```bash
  sequelize db:create
```

Migration the database

```bash
  sequelize db:migrate
```

Seed Admin data

```bash
  sequelize db:seed:all
```

Start the server

```bash
  npm start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`DEV_DB_USERNAME`
`DEV_DB_PASSWORD`
`DEV_DB_NAME`
`DEV_DB_HOST`

`TEST_DB_USERNAME`
`TEST_DB_PASSWORD`
`TEST_DB_NAME`
`TEST_DB_HOST`

`DATABASE_URL`

`BCRYPT_SALT`

`JWT_SECRET_KEY`
`JWT_ACCESS_EXPIRATION_MINUTES`
`JWT_REFRESH_EXPIRATION_DAYS`
`JWT_RESET_PASSWORD_EXPIRATION_MINUTES`
`JWT_VERIFY_EMAIL_EXPIRATION_MINUTES`

## Admin credential

```
    username: admin123
    password: admin123
```

## Documentation

[![Run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/13454122/2s8YzTSgwN)
