import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserEntity } from '../entities/user.entity';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('/signup')
    signUp(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
        return this.authService.signUp(createUserDto);
    }

    @Post('/signin')
    signIn(@Body() createUserDto: CreateUserDto):  Promise<{accessToken : string}> {
        return this.authService.signIn(createUserDto);
    }

}