import { Static } from '@fastify/type-provider-typebox';
import { changeUserByIdSchema, createUserSchema } from '../../users/schemas.js';

export type CreateUserDto = Static<(typeof createUserSchema)['body']>;
export type ChangeUserDto = Static<(typeof changeUserByIdSchema)['body']>;
