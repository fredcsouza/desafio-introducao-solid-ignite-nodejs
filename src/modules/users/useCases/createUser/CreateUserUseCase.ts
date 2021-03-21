import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const emailAlreadyExistis = this.usersRepository.findByEmail(email);

    if (emailAlreadyExistis) {
      throw new Error("Email already existis!");
    }
    const user = this.usersRepository.create({ name, email });

    return user;
  }
}

export { CreateUserUseCase };
