import { Injectable } from '@nestjs/common';
import { PaginationArgsDto } from 'src/pagination/pagination-args.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentsService {
  constructor(private prisma: PrismaService) {}

  create(createPaymentDto: CreatePaymentDto) {
    return this.prisma.payment.create({ data: createPaymentDto });
  }

  async findAll(pagination) {
    const paginationArgs: PaginationArgsDto = {
      // 다음 옵션을 프로그램으로 처리해야한다.
      // take: pagination.rowsPerPage,
      // skip: pagination.page + pagination.rowsPerPage,
      // orderBy: {
      //   [pagination.sortBy]: pagination.desending ? 'desc' : 'asc',
      // },
    };

    if (pagination.rowsPerPage) {
      paginationArgs.take = pagination.rowsPerPage;
    }
    if (pagination.page > 0) {
      paginationArgs.skip = pagination.page + pagination.rowsPerPage;
    }
    if (pagination.sortBy) {
      paginationArgs.orderBy = {
        [pagination.sortBy]: pagination.desending ? 'desc' : 'asc',
      };
    }

    const totalElements = await this.prisma.payment.count();

    const result = await this.prisma.payment.findMany(
      paginationArgs ? paginationArgs : null,
    );

    return { totalElements: totalElements, ...result };
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
