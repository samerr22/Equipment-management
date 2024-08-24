import  express  from "express";
import { createequiment, deleteequiment, getAllequiment, updateequiment } from "../controllers/equipment.controller.js";

const router = express.Router();

router.post('/Ecreate',createequiment);
router.get('/getAll', getAllequiment);
router.put('/Euip/:EEId',updateequiment);
router.delete('/deleteEuip/:EId',deleteequiment);



export default router;