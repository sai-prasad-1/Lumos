import { Injectable } from '@nestjs/common';
import { eventNames } from 'process';
import { PrismaService } from 'src/prisma/prisma.service';
import { createEventDto } from './dto';

@Injectable()
export class EventService {
    constructor(private prisma: PrismaService) {}


    async createEvent(dto: createEventDto) {
        const college = await this.prisma.college.findFirst({
            where: {
                collegeName: dto.collegeName
            }
        })

        const event = await this.prisma.event.create({
            data: {
                collegId: college.id,
                eventName: dto.eventName,
                eventDate: new Date(dto.eventDate).toISOString(),
            }
        })

        return event;

    }

    async createParticipant(dto: any) {
        const event = await this.prisma.event.findFirst({
            where: {
                eventName: dto.eventName
            }
        });

        const team = await this.prisma.team.findFirst({
            where: {
                eventId: event.id
            }
        })

        if (team) {
            const participant = await this.prisma.participant.create({
                data: {
                    email: dto.email,
                    eventId: event.id,
                    teamId: team.id,
                    pending: false,
                    RSVP: false
                }
            });

            return { team, participant }
        }

        const _team = await this.prisma.team.create({
            data: {
                teamName: dto.teamName,
                eventId: event.id,
            }
        });

        const participant = await this.prisma.participant.create({
            data: {
                email: dto.email,
                eventId: event.id,
                teamId: team.id,
                pending: false,
                RSVP: false
            }
        })

        return { _team, participant }

    }

    async joinAsIndividual(dto: any) {


        const team = await this.prisma.team.create({
            data: {
                teamName: "hi",
                eventId: dto.eventId,
            }
        })

        const participant = await this.prisma.participant.create({
            data: {
                email: dto.email,
                eventId: dto.eventId,
                teamId: team.id,
                pending: false,
                RSVP: false
            }
        })

        return participant;
    }

    async sendInvitation(dto) {
        await this.prisma.invitation.create({
            data: {
                email: dto.email,
                eventId: dto.eventId,
                teamId: dto.teamId,
                teamName: dto.teamName,
                accepted: false,
                studentId: dto.studentId
            }
        })
    }

    async acceptInvitation(dto) {
        await this.prisma.participant.create({
            data: {
                email: dto.email,
                eventId: dto.eventId,
                teamId: dto.teamId,
                pending: false,
                RSVP: false
            }
        })

        await this.prisma.invitation.update({
            where: {
                id: dto.invitationId
            },
            data: {
                accepted: true
            }
        })
    }

    async joinAsTeam(dto){
        const event = await this.prisma.event.findFirst({
            where: {
                eventName: dto.eventName
            }
        });

        const team = await this.prisma.team.create({
            data: {
                teamName: dto.teamName,
                eventId: event.id,
            }
        })

        const participant = await this.prisma.participant.create({
            data: {
                email: dto.email,
                eventId: event.id,
                teamId: team.id,
                pending: false,
                RSVP: false
            }
        })

        return participant;
    }

    async getEvents() {
        return await this.prisma.event.findMany({
            include: {
                college: true,
                teams: true,
                participants: true
            }
        });
    }


    async getInvitations(dto) {
        return await this.prisma.invitation.findMany({
            where: {
                studentId: dto.studentId
            }
        })
    }

    
}
