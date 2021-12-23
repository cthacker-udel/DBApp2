import { DBUserDto } from './dbuser.dto';
import { OmitType } from "@nestjs/mapped-types";

export class DBUserUpdatePasswordDto extends OmitType(DBUserDto, ['username'] as const){};