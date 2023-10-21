import {
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

import { UserEntity } from '@app/shared';

import { MessageEntity } from './message.entity';

@Entity('conversation')
export class ConversationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => UserEntity)
  @JoinTable()
  users: UserEntity[];

  @OneToMany(() => MessageEntity, (messageEntity) => messageEntity.conversation)
  messages: MessageEntity[];

  @CreateDateColumn()
  lastUpdated: Date;
}
