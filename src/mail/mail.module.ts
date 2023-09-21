import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.elasticemail.com',
        // port: 2525,
        secure: false,
        auth: {
          user: 'zhangrong@nestpractice.com',
          pass: '8675679BB6FFA3FBD19320CE0C2B34D77E0D',
        },
      },
      defaults: {
        from: `zhangrong@nestpractice.com`,
      },
      // template: {
      //   dir: join(__dirname, 'templates'),
      //   adapter: new HandlebarsAdapter(),
      //   options: {
      //     strict: true,
      //   },
      // },
    }),
  ],
  controllers: [MailController],
  providers: [MailService],
})
export class MailModule {}
