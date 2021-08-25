import express from 'express';
import Router from 'express-promise-router';
import {getUsers} from '../controllers/users.js';

const router = Router();

router.get('/', getUsers);