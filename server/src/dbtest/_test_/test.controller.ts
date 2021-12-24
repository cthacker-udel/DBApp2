import { IntPipeDecorator } from './decorators/test.intpipe.decorator';
import { TestIntPipe2 } from './pipes/test.validation.pipe';
import { TestService } from './test.service';
import { Controller, Get, SetMetadata, UsePipes } from "@nestjs/common";


@Controller('test')
export class TestController {

    constructor (private readonly testService: TestService){}

    @Get('intpipe1')
    @UsePipes(TestIntPipe2)
    @IntPipeDecorator('metadata1', 'metadata2')
    async testIntPipe() {



    }


}