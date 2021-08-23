import Router from "express";
import UserController from "../controller/UserController.js"
const router = new Router();

router.post("/users", UserController.create);
router.get("/users", UserController.getAll);
router.get("/users/:id", UserController.getById);
router.put("/users/:id", UserController.update);
router.delete("/users/:id", UserController.delete);
router.delete("/users", UserController.deleteAll);
export default router;