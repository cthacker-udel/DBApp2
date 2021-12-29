import { Column, Entity, ObjectID, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class AddTicketRequestEntity {
    @ObjectIdColumn()
    id: ObjectID;

    @PrimaryGeneratedColumn({ type: "number" })
    ticketNum: number;

    @Column({ default: "Default Subject", type: "string" })
    subject: string;

    @Column({ default: new Date().toISOString(), type: "string" })
    date: string;
};