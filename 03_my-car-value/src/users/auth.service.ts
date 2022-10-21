import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import {randomBytes, scrypt as underscore_script} from "crypto";
import {promisify} from "util";

const scrypt = promisify(underscore_script);

@Injectable()
export class AuthService{
    constructor(private usersService:UsersService){}

   async signup(email: string, password: string){
        // TODO 1: See if the email is in use
        const users = await this.usersService.findByEmail(email);
        if(users.length) throw new BadRequestException("Email in use.");

        // TODO 2: Hash the user password

        // TODO 2.1 : generate a salt
        const salt = randomBytes(8).toString("hex");
        // TODO 2.2 : hash the salt and password
        // TODO 2.3 : joined the hashed result + salt
        

        // TODO 3: Create a new user and save
        // TODO 4: Return the user.
    }

    signin(){}
}