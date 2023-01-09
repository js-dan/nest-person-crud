import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person, PersonDocument } from './entities/person.entity';

@Injectable()
export class PersonsService {
  constructor(
    @InjectModel(Person.name) private personModel: Model<PersonDocument>,
  ) {}

  create(createPersonDto: CreatePersonDto) {
    const person = new this.personModel(createPersonDto);
    return person.save();
  }

  findAll() {
    return this.personModel.find();
  }

  findOne(id: string) {
    return this.personModel.findById(id);
  }

  update(id: string, updatePersonDto: UpdatePersonDto) {
    return this.personModel.findByIdAndUpdate(
      { _id: id },
      { $set: updatePersonDto },
      { new: true },
    );
  }

  remove(id: string) {
    return this.personModel.deleteOne({ _id: id }).exec();
  }
}
