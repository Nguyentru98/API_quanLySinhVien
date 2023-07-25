import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Class } from "./Class";
@Entity()
export class Students {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    name: string;
    @Column({type: 'varchar', length: 255})
    age: number;
    @Column({type: 'text'})
    score: number;
    
    @ManyToOne(() => Class, (Class) => Class.id)
    class: Class;
}
