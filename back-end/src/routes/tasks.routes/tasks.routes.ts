import { Router } from "express";
import listAllTasksController from "../../controllers/tasks/listAllTasks.controller";
import createTaskController from "../../controllers/tasks/createTaskController.controller";
import updateTaskController from "../../controllers/tasks/updateTask.controller";

const router = Router();

router.get('', listAllTasksController)
router.post('', createTaskController)
router.patch('/:id', updateTaskController)

export default router