import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @EventPattern('signup')
  async sendConfirmationMail(@Payload() payload: { newUser: any }) {
    return this.mailService.sendUserConfirmation(payload.newUser);
  }

  @EventPattern('signup-google')
  async sendSignupNotification(@Payload() Payload: { newUser: any }) {
    return this.mailService.sendSignupNotification(Payload.newUser);
  }
}
