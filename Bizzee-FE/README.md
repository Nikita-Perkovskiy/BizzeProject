# Bizzee frontend

## Local

### Prerequisites

`npm` must be installed. Then you must install dependencies using `npm install`

#### Build

To build this project run:

- `npm run build`

Built files will be saved in `build` folder

#### Run

To run this project locally using `npm`:

- `npm run start`

## Docker

### Prerequisites

Docker must be installed on your local machine. Instructions for installation can be found [here](https://docs.docker.com/engine/install/)

#### Run

- Firstly, the docker image must be built using `docker build -t bizzee-fe .`
- Then you can start your container using `docker run -p 80:80 --name bizzee-fe bizzee-fe`
- Finally, open `localhost:80` in browser
