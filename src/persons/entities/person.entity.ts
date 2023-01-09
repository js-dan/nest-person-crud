import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PersonDocument = HydratedDocument<Person>;

@Schema()
export class Person {
  @Prop()
  name: string;

  @Prop()
  cpf: string;

  @Prop()
  email: string;

  @Prop()
  gender: string;

  @Prop()
  age: number;

  @Prop()
  created_at: Date;
}

export const PersonSchema = SchemaFactory.createForClass(Person);
