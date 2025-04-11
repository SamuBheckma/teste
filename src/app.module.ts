import { Module } from '@nestjs/common';
import { TestesModule } from './testes/testes.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TestesModule, AuthModule, UserModule],
})
export class AppModule {}
