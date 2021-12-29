import { Column, Entity } from "typeorm";



@Entity()
export class DeleteTicketRequestEntity {

    @Column({ default: 0, type: "number" })
    ticketNum: number;

    @Column({ default: "Default Subject", type: "string" })
    subject: string;

    @Column({ default: new Date().toISOString(), type: "string" })
    date: string;

};