import { Injectable } from "@nestjs/common";


@Injectable()
export class TmpAuthService {

    async findFile(){
        return "found";
    }

}