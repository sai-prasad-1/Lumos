import { Controller, Post, Body, Get } from '@nestjs/common'
import { EventService } from './event.service';
import { createEventDto } from './dto';
import { prisma } from '@prisma/client';


@Controller()
export class EventController{

    constructor(private eventService: EventService) {}


    @Post("createEvent")
    async createEvent(@Body() dto: createEventDto) {
        return await this.eventService.createEvent(dto);
    }

    @Post("createParticipant")
    async createParticipant(@Body() dto) {
        return await this.eventService.createParticipant(dto);
    }


    @Get("events")
    async getEvents() {
        return this.eventService.getEvents();
    }

    @Post("joinAsIndividual")
    async joinAsIndividual(@Body() dto) {
        return this.eventService.joinAsIndividual(dto);
    }

    @Post("joinAsTeam")
    async joinAsTeam(@Body() dto) {
        return this.eventService.joinAsTeam(dto)
    }

    @Post("SendInvitation")
    async SendInvitation(@Body() dto) {
        return this.eventService.sendInvitation(dto)
    }

    @Post("AcceptInvitation")
    async acceptInvitaion(@Body() dto) {
        return this.eventService.acceptInvitation(dto);
    }

    @Get("AllInvitations")
    async getInvitations(@Body() dto) {
        return this.eventService.getInvitations(dto);
    }
}