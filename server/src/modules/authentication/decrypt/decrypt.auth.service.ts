import { Alphabet } from './../../../shared/constants/Alphabet';
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";


@Injectable()
export class DecryptService {

    constructor(private readonly configService: ConfigService){}

    async decrypt_caesar(password: string): Promise<string> {

        const shift = this.configService.get<number>('caesar');

        let emptyString: string = "";

        for (let i = 0; i < password.length; i++) {

            const letter = password.charAt(i);
            if (Alphabet.upper.includes(letter)) {
                // upper
                const index = (Alphabet.upper.indexOf(letter) - shift) % 26;
                emptyString += Alphabet.upper.charAt(index);
            } else if (Alphabet.lower.includes(letter)) {
                // lower
                const index = (Alphabet.lower.indexOf(letter) - shift) % 26;
                emptyString += Alphabet.lower.charAt(index);
            } else {
                // symbol
                emptyString += letter;
            }

        }
        return emptyString;

    }

}