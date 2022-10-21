import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Query,
  Patch,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user-dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dtos/update-user-dto';
import { Serialize } from '../interceptors/serialize.interceptor';
import { UserDto } from './dtos/user.dto';

@Controller('auth')
@Serialize(UserDto)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    console.log(body);
    this.usersService.create(body.email, body.password);
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    console.log(id);

    const user = await this.usersService.findOne(parseInt(id));
    if (!user) throw new NotFoundException('User Not Found');
    return user;
  }

  @Get()
  getUsersByEmail(@Query('email') email: string) {
    console.log('Get users by email ', email);
    return this.usersService.findByEmail(email);
  }

  @Patch(':id')
  updateUsers(@Param('id') id: string, @Body() body: UpdateUserDto) {
    console.log('Updating the user');
    return this.usersService.update(parseInt(id), body);
  }

  @Delete(':id')
  deleteUsers(@Param('id') id) {
    console.log('Deleted the user');
    return this.usersService.removeUser(id);
  }
}
