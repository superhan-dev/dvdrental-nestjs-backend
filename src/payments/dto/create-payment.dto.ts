import { ApiProperty } from '@nestjs/swagger';

export class CreatePaymentDto {
  @ApiProperty()
  paymentId: number;

  @ApiProperty()
  customerId: number;

  @ApiProperty()
  staffId: number;

  @ApiProperty()
  rentalId: number;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  paymentDate: Date;
}
