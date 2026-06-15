import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
        @PrimaryGeneratedColumn()
        id!: number;
        @Column()
        nombre!: string;
        @Column()
        description!: string;
        @Column({ default: true })
        active!: boolean;
}
