export class CreateUserDTO {
    name?: string | undefined;
    age?: number;
    nationality?: Nationality
  }
  
  enum Nationality {
    USA,
    UAE,
    UK,
    SL,
  }
  