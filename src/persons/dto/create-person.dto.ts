export class CreatePersonDto {
  name: string;
  cpf: string;
  email: string;
  gender?: string;
  age?: number;
  created_at?: Date;
}
