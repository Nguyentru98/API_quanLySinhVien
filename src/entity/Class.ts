import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class Class {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    name: string;
    @Column({type: 'varchar', length: 255})
    gvcn: number;
    @Column({type: 'text'})
    quantity: number;
}
