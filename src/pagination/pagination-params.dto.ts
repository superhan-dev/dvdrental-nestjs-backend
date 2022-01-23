import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class PaginationParamsDto {
  @Type(() => Number)
  @ApiProperty({ required: false })
  rowsPerPage?: number;

  @Type(() => Number)
  @ApiProperty({ required: false })
  rowsNumber?: number;

  @Type(() => Number)
  @ApiProperty({ required: false })
  page?: number;

  @ApiProperty({ required: false })
  sortBy?: string;

  @Type(() => Boolean)
  @ApiProperty({ required: false })
  desending?: boolean;
}
