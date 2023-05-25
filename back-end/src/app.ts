import "express-async-errors";
import "dotenv/config";

import express  from 'express'
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import tasksRoutes from "./routes/tasks.routes/tasks.routes"

const app = express()

app.use(express.json())

app.use("/tasks", tasksRoutes)
app.use(handleErrorMiddleware);


app.listen(process.env.PORT, () => {
    console.log(`App rodando na porta ${process.env.PORT}`);
  });
