import { Column, Entity } from "typeorm";


@Entity()
export class TicketEntity {

    @Column({ default: -1, type: "number"})
    ticketNum: number;

    @Column({ default: "Default Subject", type: "string"})
    subject: string;

    @Column({ default: new Date().toISOString(), type: "string" })
    date: string;

};
