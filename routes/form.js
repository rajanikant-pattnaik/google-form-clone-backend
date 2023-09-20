import express from 'express'
import { addForm } from '../controllers/form.js'
const router=express.Router();

router.post('/forms/new',addForm);

export default router;