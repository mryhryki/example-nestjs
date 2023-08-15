import {
  IsBoolean,
  IsDefined,
  IsEmail,
  IsNotEmpty,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ExtraUserDto {
  @IsBoolean({ message: 'validation.INVALID_BOOLEAN' })
  subscribeToEmail: string;

  @Min(5, {
    // message: i18nValidationMessage('validation.MIN', { message: 'COOL' }),
  })
  min: number;

  @Max(10, {
    // message: i18nValidationMessage('validation.MAX', { message: 'SUPER' }),
  })
  max: number;
}

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  // @ValidateNested()
  // @IsDefined()
  // @Type(() => ExtraUserDto)
  // extra: ExtraUserDto;
}
