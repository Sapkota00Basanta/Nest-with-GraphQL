import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentController } from './payment/payment.controller';
import { PaymentModule } from './payment/payment.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [PaymentModule, TestModule],
  controllers: [AppController, PaymentController],
  providers: [
    {
      // This ensures when we inject service name AppService is linked to AppService Class.
      provide: 'AppService',
      useClass: AppService,
    },
  ],
})
export class AppModule {}
