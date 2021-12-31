import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Alphabet from 'src/shared/constants/Alphabet';

@Injectable()
export class EncryptionService{

    constructor(private readonly configService: ConfigService) {}

    async encrypt_caesar(password: string) {

        const shiftAmount = this.configService.get<number>('caesar');
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


    async encrypt_autokey(password: string) {

        const autoKeyConst = this.configService.get<string>('autokey').toUpperCase();
        password = password.replace(new RegExp('\W'),'').toUpperCase();

        let emptystring: string = "";

        const keyIndex = 0;
        const passIndex = 0;
        let genIndexKey = 0;
        let genIndexPass = 0;
        while (keyIndex < autoKeyConst.length || passIndex < password.length) {

            if (keyIndex < autoKeyConst.length) {
                genIndexKey = Alphabet.upper.indexOf(autoKeyConst.charAt(keyIndex));
            } else {
                genIndexKey = 0;
            }
            if (passIndex < password.length) {
                genIndexPass = Alphabet.upper.indexOf(password.charAt(passIndex));
            } else {
                genIndexPass = 0;
            }
            const result = (genIndexKey + genIndexPass) % 26;
            emptystring += Alphabet.upper.charAt(result); 
        }
        return emptystring;

    }


}