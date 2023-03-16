import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import getData from './getData';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'Hello World',
  });
});

router.use('/data', getData);

export default router;
