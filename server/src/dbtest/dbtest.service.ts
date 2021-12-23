import { Injectable } from '@nestjs/common';


@Injectable()
export class DBTestService {

    async testIntPipe(int: number) {
        return new Promise((res, error) => {
            res(10);
        })
        .catch((error) => console.log(error));
    };

};
