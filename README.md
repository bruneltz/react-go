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

### Other commands performed while coding the app

#### Server
1. go mod init github.com/bruneltz/react-go 
2. After finishing configuring the compose.yml: docker compose up
3. Handle migrations: go install github.com/jackc/tern/v2@latest
4. Specific directory for Go called **internal**
5. tern init ./internal/store/pgstore/migrations
6. tern new --migrations ./internal/store/pgstore/migrations create_rooms_table
7. Specific directory for Go called **cmd** to handle binaries
8. go mod tidy
9. docker compose start or docker compose up -d
10. In Go, it's not recommend to use ORM
11. go install github.com/sqlc-dev/sqlc/cmd/sqlc@latest
12. Run every command with the directive "generate": go generate ./...
13. go get github.com/go-chi/cors

#### Web
1. npm create vite@latest
2. npm i 
3. npm i react-router-dom
4. npm i lucide-react
5. npm install --save-exact react@rc react-dom@rc
6. As of React 19, tag <form> uses event "action" instead of onSubmit
7. npm install sonner
8. npm i @tanstack/react-query -f