// event.dto.ts

import { IsNotEmpty, IsString, IsDate, IsOptional } from 'class-validator';

export class EventDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  topic: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsDate()
  start: Date;

  @IsNotEmpty()
  @IsDate()
  end: Date;

  @IsNotEmpty()
  @IsDate()
  deadline: Date;
}
