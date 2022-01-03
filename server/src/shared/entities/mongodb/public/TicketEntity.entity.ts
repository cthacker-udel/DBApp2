import { Column, Entity, ObjectIdColumn } from "typeorm";


@Entity()
export class TicketEntity {

    @ObjectIdColumn()
    id: string

    @Column({ default: -1, type: "number"})
    ticketNum: number;

    @Column({ default: "Default Subject", type: "string"})
    subject: string;

    @Column({ default: new Date().toISOString(), type: "string" })
    date: string;

};
