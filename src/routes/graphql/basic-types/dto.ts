import { Static } from '@fastify/type-provider-typebox';
import { changeUserByIdSchema, createUserSchema } from '../../users/schemas.js';
import { changePostByIdSchema, createPostSchema } from '../../posts/schemas.js';

export type CreateUserDto = Static<(typeof createUserSchema)['body']>;
export type ChangeUserDto = Static<(typeof changeUserByIdSchema)['body']>;

export type CreatePostDto = Static<(typeof createPostSchema)['body']>;
export type ChangePostDto = Static<(typeof changePostByIdSchema)['body']>;
