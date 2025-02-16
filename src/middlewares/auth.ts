import { NextFunction, Response } from 'express'
import jwt from 'jsonwebtoken'

export const authMiddleware = (req: any, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.split(' ')[1]
  if (!token) return res.status(401).json({ message: 'Unauthorized' })

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!)
    req.user = decoded // Attach user info to request object
    next()
  } catch (error) {
    res.status(401).json({ message: 'UnAuthenticated' })
  }
}
