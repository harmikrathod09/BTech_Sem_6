import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    Studentid: number

    @Column()
    StudentName: string

    @Column()
    StudentEmail: String

    @Column('decimal', {
        precision: 4,  
        scale: 2       
    })
    StudentSPI: number
}
