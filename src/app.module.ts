import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonsModule } from './persons/persons.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://djsvl:2by0Oqw3Y5pyq1uW@cluster0.fph0zwp.mongodb.net/test',
    ),
    PersonsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
