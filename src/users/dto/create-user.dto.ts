import { IsString, IsEmail, IsOptional, IsDateString } from 'class-validator';
import { Role } from '@prisma/client';

export class CreateUserDto {
  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  domicile?: string;

  @IsOptional()
  @IsDateString()
  birthday?: Date;

  role: Role;
}