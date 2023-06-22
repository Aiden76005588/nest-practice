import { IsNotEmpty } from 'class-validator';

export class CreaBoardDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
