package main

import (
	"context"
	"errors"
	"fmt"
	"net/http"
	"os"
	"os/signal"

	"github.com/bruneltz/react-go/internal/api"
	"github.com/bruneltz/react-go/internal/store/pgstore/pgstore"
	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/joho/godotenv"
)

func main() {
	if err := godotenv.Load(); err != nil {
		panic(err)
	}

	ctx := context.Background()
	pool, err := pgxpool.New(ctx, fmt.Sprintf(
		"user=%s password=%s host=%s port=%s dbname=%s",
		os.Getenv("ELTZ_DATABASE_USER"), os.Getenv("ELTZ_DATABASE_PASSWORD"), os.Getenv("ELTZ_DATABASE_HOST"), os.Getenv("ELTZ_DATABASE_PORT"), os.Getenv("ELTZ_DATABASE_NAME"),
	))

	if err != nil {
		panic(err)
	}

	// Execute before the return, such as a finally
	defer pool.Close()

	if err := pool.Ping(ctx); err != nil {
		panic(err)
	}

	handler := api.NewHandler(pgstore.New(pool))

	go func() {
		if err := http.ListenAndServe(":8080", handler); err != nil {
			if !errors.Is(err, http.ErrServerClosed) {
				panic(err)
			}
		}
	}()

	quit := make(chan os.Signal, 1)
	signal.Notify(quit, os.Interrupt)
	<-quit
}
