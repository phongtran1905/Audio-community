
# Audio Community

This is an API that functions as a server for music streaming applications like Spotify or Apple Music, with full CRUD functionality.

## Build with

* Nestjs
* TypeORM
* Docker
* Postgres
* MinIO


## Installation

Clone with SSH 

```bash
git clone git@github.com:phongtran1905/Audio-community.git
cd Audio-community
```

Running 
```bash
docker compose up
```

Seeding data (Optional)

- After running the API successfully, open a new terminal tab with the same directory as the current tab.
- Enter Nodejs container
```bash
docker exec -it audio-community-node sh      
```
- Execute seeding
```bash
node dist/seeds/seed.js     
```
