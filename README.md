# obi-api

### Project clone 
````
git clone --branch dev https://github.com/TyagoVeras/challenge-full-stack-web-developer.git
````
### access the folder with command

```
cd .\challenge-full-stack-web-developer\
```


### Install dependencies
```
yarn
```

### Rename .env.exemple to
```
.env
```
# BEGIN CONFIG DATABASE

### Enter database credentials in file .env
```
DATABASE_URL='mysql://USER:PASSWORD@localhost:3306/DATABASE?schema=public'
```

### If your database does not have a password, just omit the password field 
```
DATABASE_URL='mysql://USER@localhost:3306/DATABASE?schema=public'
```
#### Exemple
```
DATABASE_URL='mysql://root@localhost:3306/desafio?schema=public'

```
--------------------------------------
# END CONFIG DATABASE

### Run migrate
```
yarn prisma migrate dev
```


### Compiles and hot-reloads for development
```
yarn dev
```
### Port using 3333 - server

### Front
https://github.com/TyagoVeras/challenge-full-stack-web-develop-front
