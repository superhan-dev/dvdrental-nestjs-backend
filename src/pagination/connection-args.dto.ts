import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class ConnectionArgs {
  @Type(() => Number)
  @ApiProperty({ required: false })
  first?: number;

  @Type(() => Number)
  @ApiProperty({ required: false })
  last?: number;

  @ApiProperty({ required: false })
  after?: number;

  @ApiProperty({ required: false })
  before?: number;
}
