# React initial project

- React 18.3.12 with TypeScript

## Commands

### Install dependencies

```bash
npm install
```

### Run the project

```bash
npm start
```

### Run the tests

```bash
npm test
```

## Backend

The docker-compose file is configured to run the backend in a container.
You can run the backend with the following command:

```bash
docker-compose up -d
```

### API-s

| Project   | Port | Docs                                  |
| --------- | ---- | ------------------------------------- |
| Exam      | 3000 | [Swagger](http://localhost:3000/docs) |
| Faiskola  | 8000 | [Swagger](http://localhost:8000/docs) |
| PizzaShop | 8001 | [Swagger](http://localhost:8001/docs) |