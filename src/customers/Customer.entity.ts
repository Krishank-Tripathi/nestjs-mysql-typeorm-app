import { IsIn, IsNumber, IsString, MaxLength, MinLength } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 200})
    @MinLength(1)
    @MaxLength(200)
    @IsString()
    email: string;

    @Column({ length: 200})
    @MinLength(1)
    @MaxLength(200)
    @IsString()
    name: string;

    @Column('boolean', {default: false})
    active: boolean = false;
}