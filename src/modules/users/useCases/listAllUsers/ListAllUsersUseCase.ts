import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id); 
    // if (!user) throw new Error("User does not exists");
    if (!user.admin) throw new Error("Only administrators are permited");

    const allUsers = this.usersRepository.list();

    return allUsers;
  }
}

export { ListAllUsersUseCase };
