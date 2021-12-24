import { Injectable, PipeTransform, ArgumentMetadata } from '@nestjs/common';


@Injectable()
export class TestIntPipe2 implements PipeTransform {

    // converts int argument to string

    transform(value: number, metadata: ArgumentMetadata) {
        console.log('arg metadata = ', metadata);
        return String(value);
    }

};