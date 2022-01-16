import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import 'dotenv/config';

export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new Error('token is missing');
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, process.env.JWT_SECRET_KEY);
    next();
  } catch {
    throw new Error('token is invalid');
  }
}
