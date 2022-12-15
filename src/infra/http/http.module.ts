import { CancelNotification } from '@application/useCases/cancel-notification';
import { CountRecipientNotifications } from '@application/useCases/count-recipient-notifications';
import { GetRecipientsNotifications } from '@application/useCases/get-recipient-notifications';
import { ReadNotification } from '@application/useCases/read-notification';
import { UnreadNotification } from '@application/useCases/unread-notification';
import { Module } from '@nestjs/common';
import { SendNotification } from 'src/application/useCases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientsNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
