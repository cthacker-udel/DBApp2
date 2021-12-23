import { HttpStatus } from '@nestjs/common';
import { validateOrReject } from 'class-validator';
import { BadRequestException, HttpException } from '@nestjs/common';
import { ArgumentMetadata } from '@nestjs/common';
import { VarArgsDto } from './../dto/varargs.dto';
import { PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';

export class VarArgsDtoPipe implements PipeTransform {

    async transform(value: VarArgsDto, metadata: ArgumentMetadata) {
        const convertedDto = plainToClass(VarArgsDto, value);
        try{
            await validateOrReject(convertedDto).catch(errors => {
                console.log("errors = ", errors);
            });
            return convertedDto;
        } catch (errors) {
            throw new BadRequestException('Invalid parameters sent');
        }
    }

};
