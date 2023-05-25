import "express-async-errors";
import express, { NextFunction, Request, Response } from 'express'
import tasksRoutes from "./routes/tasks.routes/tasks.routes"
import { AppError } from './errors'

const app = express()

app.use(express.json())

app.use("/tasks", tasksRoutes)

app.use((err: Error, req:Request, res:Response, _: NextFunction) => {
  if (err instanceof AppError){
    return res.status(err.statusCode).json({
      status: "Error",
      message: err.message
    })
  }
  console.log(err)
  return res.status(500).json({status: "Error", message: "Internal server error"})
})

app.listen(3000, () => {
    console.log(`App rodando na porta ${3000}`);
  });
