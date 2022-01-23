import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreatePaymentDto {
  @Type(() => Number)
  @ApiProperty()
  paymentId: number;

  @Type(() => Number)
  @ApiProperty()
  customerId: number;

  @Type(() => Number)
  @ApiProperty()
  staffId: number;

  @Type(() => Number)
  @ApiProperty()
  rentalId: number;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  paymentDate: Date;
}
