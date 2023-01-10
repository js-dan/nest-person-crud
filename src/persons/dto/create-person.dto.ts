import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePersonDto {
  @ApiProperty({ example: 'Jane Doe' })
  name: string;

  @ApiProperty({ example: '012.345.678-90' })
  cpf: string;

  @ApiProperty({ example: 'jdoe@gmail.com' })
  email: string;

  @ApiPropertyOptional({ example: 'Female' })
  gender?: string;

  @ApiPropertyOptional({ example: 27 })
  age?: number;

  @ApiPropertyOptional({ example: '2023-01-10T19:00:39.035Z' })
  created_at?: Date;
}
