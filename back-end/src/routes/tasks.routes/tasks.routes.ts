import { Router } from "express";
import listAllTasksController from "../../controllers/tasks/listAllTasks.controller";
import createTaskController from "../../controllers/tasks/createTaskController.controller";

const router = Router();

router.get('', listAllTasksController)
router.post('', createTaskController)

export default router