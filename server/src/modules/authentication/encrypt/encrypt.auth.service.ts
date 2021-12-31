import { UnauthorizedException } from '@nestjs/common';
import { validateOrReject } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import Alphabet from 'src/shared/constants/Alphabet';
import { FindUserRequestDTO } from 'src/shared/api/private/get/FindUserRequest.dto';
import { DecryptionService } from '../decrypt/decrypt.auth.service';
import { AuthenticationService } from '../authentication.service';

@Injectable()
export class EncryptionService{

    constructor(private readonly configService: ConfigService, private readonly decryptService: DecryptionService, private readonly authService: AuthenticationService) {}

    async checkUsername(request: Request): Promise<boolean> {
        const convertedUserName = plainToClass(FindUserRequestDTO, request.body);
        try{
            validateOrReject(convertedUserName);
            const userName = await this.decryptService.decrypt_caesar(convertedUserName.username);
            const searchResult = this.authService.usernameLookup(userName);
            return true;
        } catch (error) {
            return false;
        }
    };

    async checkPassword(request: Request): Promise<boolean> {

        const convertedPassword: FindUserRequestDTO = plainToClass(FindUserRequestDTO, request.body);
        try {
            validateOrReject(convertedPassword);
            const password = await this.decryptService.decrypt_caesar(convertedPassword.password);
            const searchResult = this.authService.passwordLookup(password);
            return true;
        } catch (error) {
            return false;
        }

    }

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