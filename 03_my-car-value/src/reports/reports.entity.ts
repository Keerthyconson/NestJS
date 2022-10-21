
import { Column } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';

@Entity()
export class Report{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    price:number;
}