import { NextFunction, Request, Response } from 'express'

import type { ZodSchema } from 'zod'

export const validationMiddleware =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    // Parse and validate the request body
    const { error } = schema.safeParse(req.body)
    if (error)
      return res
        .status(400)
        .json({ message: 'Validation failed', errors: error.errors })

    // Proceed if validation succeeds
    next()
  }
