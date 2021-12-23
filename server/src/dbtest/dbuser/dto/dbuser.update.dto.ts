import { PartialType } from '@nestjs/mapped-types';
import { DBUserDto } from './dbuser.dto';

export class DBUserUpdateDto extends PartialType(DBUserDto) {};