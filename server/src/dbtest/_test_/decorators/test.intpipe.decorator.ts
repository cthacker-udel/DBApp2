import { SetMetadata } from '@nestjs/common';

export const IntPipeDecorator = (...args: string[]) => SetMetadata('args', args);