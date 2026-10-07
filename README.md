# GrubFast - Backend

## Installation Guide

1. Clone the repo.
2. Setup the environment variables referencing `.env.example` format.
3. Run `pnpm install` && `pnpm dev` to get the project started in your local environment.
4. If you're updating the schema, use `pnpm db:migrate` to apply schema to the database. then `pnpm db:generate` to generate types for typescript.
5. Your server will be running on port `8000`. (or the port shown in the console)