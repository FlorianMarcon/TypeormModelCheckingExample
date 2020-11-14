import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BankSchema extends  BaseEntity  {

    @PrimaryGeneratedColumn()
    _id  :   string;

    @Column()
    agency  :   String;

    @Column()
    isArchivated: boolean;
}
