import { ISession } from 'connect-typeorm';
import {
  Column,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class SessionEntity implements ISession {
  @Index()
  @Column('bigint')
  public expiredAt = Date.now();

  @PrimaryColumn('varchar', { length: 355 })
  id: string;

  @Column('text')
  json: string;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  destroyedAt?: Date;
}
