# AMA (Ask Me Anything)

> Class course promoted by [Rocketseat](https://www.rocketseat.com.br/) school.

---

The AMA application enables users to create a room where others can submit answers and upvote them.

![Demo](/demo.gif)

To run locally, follow these commands:

1. Clone this project

Start the server:
1. Inside the server directory, run `docker compose start`
2. Inside the server directory, run `go run ./cmd/wsrs/main.go`
3. Open http://localhost:8081/ to access the pgAdmin

Start the web:
1. Inside the web directory, run `npm run dev`
2. Open http://localhost:5173/
