import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer/dist';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendUserConfirmation(user: any) {
    console.log(user);
    // const url = `localhost:3004/confirm`;
    await this.mailerService.sendMail({
      to: user.email,
      // from: 'zhangrong@nestpractice.com',
      subject: 'Confirm your email',
      // template: './confirmation',
      // context: {
      //   name: `${user.first_name} ${user.last_name}`,
      //   url,
      // },
      text: 'Confirm your email',
    });
  }
}
