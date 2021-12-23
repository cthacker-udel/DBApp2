import { DBUserDto } from './dbuser.dto';
import { PickType } from "@nestjs/mapped-types";

export class DBUserUpdateUsernameDto extends PickType(DBUserDto, ['username'] as const){};