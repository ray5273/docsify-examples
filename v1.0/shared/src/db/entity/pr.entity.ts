import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity()
export class Prs {
    @PrimaryColumn()
    repo_id!: number

    @Column()
    pr_name!: string

    @PrimaryColumn()
    pr_id!: number

    @Column()
    author!: string

    @Column()
    base_branch!: string

    @Column()
    is_closed!: boolean

    @Column()
    created_at!: Date

    @Column()
    html_url!: string

    @Column("text", {array: true})
    requested_reviewers!: string[]

    @Column("text", {array: true})
    requested_teams!: string[]

    @Column()
    alarm_sent!: boolean
}