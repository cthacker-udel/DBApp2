import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
export class TmpAuthEntity {

    @ObjectIdColumn()
    id: string

    @Column({default: "defaultname"})
    name: string

    @Column({default: "rank"})
    rank: string

    @Column({default: "years"})
    years: number

}