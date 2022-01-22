import { ApiProperty } from '@nestjs/swagger';
import { Payment, Prisma } from '@prisma/client';

export class PaymentEntity implements Payment {
  @ApiProperty()
  paymentId: number;

  @ApiProperty()
  customerId: number;

  @ApiProperty()
  staffId: number;

  @ApiProperty()
  rentalId: number;

  @ApiProperty()
  amount: Prisma.Decimal;

  @ApiProperty()
  paymentDate: Date;
}
