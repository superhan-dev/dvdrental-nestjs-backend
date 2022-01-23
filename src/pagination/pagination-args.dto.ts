import { ApiProperty } from '@nestjs/swagger';

export class PaginationArgsDto {
  @ApiProperty({ required: false })
  skip?: number;
  @ApiProperty({ required: false })
  take?: number;
  @ApiProperty({ required: false })
  where?: object;
  @ApiProperty({ required: false })
  orderBy?: object;
}
