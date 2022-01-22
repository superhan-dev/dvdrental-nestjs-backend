import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentsService {
  constructor(private prisma: PrismaService) {}

  create(createPaymentDto: CreatePaymentDto) {
    return this.prisma.payment.create({ data: createPaymentDto });
  }

  findAll() {
    return this.prisma.payment.findMany({
      take: 10,
    });
  }

  findOne(id: number) {
    return this.prisma.payment.findUnique({ where: { paymentId: id } });
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return this.prisma.payment.update({
      where: { paymentId: id },
      data: updatePaymentDto,
    });
  }

  remove(id: number) {
    return this.prisma.payment.delete({ where: { paymentId: id } });
  }
}
