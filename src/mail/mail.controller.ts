import { Controller } from '@nestjs/common';
import { MailService } from './mail.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @EventPattern('signup')
  async sendConfirmationMail(@Payload() payload: { newUser: any }) {
    return this.mailService.sendUserConfirmation(payload.newUser);
  }
}
