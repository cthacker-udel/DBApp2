import { DBUserDto } from './dbuser.dto';
import { IntersectionType } from "@nestjs/mapped-types";
import { DBUserAdditionalPropsDto } from './dbuser.additional.props.dto';


export class DBUserClearanceDto extends IntersectionType(DBUserDto, DBUserAdditionalPropsDto) {};