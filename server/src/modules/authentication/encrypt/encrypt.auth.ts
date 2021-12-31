import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Alphabet from 'src/shared/constants/Alphabet';

@Injectable()
export class EncryptionService{

    constructor(private readonly configService: ConfigService) {}

    async encrypt_caesar(password: string) {

        const shiftAmount = parseInt(this.configService.get('caesar'), 10);
        let emptyString: string = "";
        for (let i = 0; i < password.length; i++) {

            const letter = password.charAt(i);
            if (Alphabet.lower.includes(letter)) {
                let index = Alphabet.lower.indexOf(letter);
                index = (index + shiftAmount) % 26;
                emptyString += Alphabet.lower.charAt(index);
            } else if (Alphabet.upper.includes(letter)) {
                let index = Alphabet.upper.indexOf(letter);
                index = (index + shiftAmount) % 26;
                emptyString += Alphabet.upper.charAt(index);
            } else {
                // symbol
                emptyString += letter;
            }

        }
        return emptyString;

    }


}