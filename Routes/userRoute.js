import express from 'express';
import { AllUsers, createUser, getUser, login, logout, postUser, putUser, softDeleteUser } from '../Controller/userController.js';
import {validate, validate2} from '../Middleware/validate.js';
import isAuthenticated from '../Middleware/isAuthenticated.js';

const router= express.Router();

router.route('/').post(validate,createUser);
router.route('/login').post(validate2,login);
router.route('/logout').get(logout);
router.route("/").get(AllUsers);
router.route('/:userId').get(getUser);
router.route('/').put(isAuthenticated,validate,putUser);
router.route('/').patch(isAuthenticated,validate2,postUser);
router.route('/').delete(isAuthenticated,softDeleteUser);

export default router;