import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm"; // typeorm에게 테이블을 만들어달라고 요청해야함

@Entity()
export default class Board extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  number!: number;

  @Column({ type: "text" })
  writer!: String;

  @Column({ type: "text" })
  title!: String;

  @Column({ type: "integer" })
  age!: number;

  @Column({ type: "timestamp", default: null, nullable: true })
  deletedAt?: Date; // 없어도 되고 있어도 됨
}
