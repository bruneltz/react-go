# react-go

Commands performed:

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

## Web

1. npm create vite@latest
2. npm i 
3. npm i react-router-dom

```

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CreateRoom } from './pages/create-room'
import { Room } from './pages/room'

const router = createBrowserRouter([
  {
    path: '/',
    element: <CreateRoom></CreateRoom>
  },
  {
    path: '/room/:roomId',
    element: <Room></Room>
  }
])

export function App() {
  return <RouterProvider router={router}></RouterProvider>
}



```

4. npm i lucide-react
5. npm install --save-exact react@rc react-dom@rc
6. A partir do React 19, a tag <form> utiliza o "action" ao invés do onSubmit
7. npm install sonner