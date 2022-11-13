import connection from '../models/connection';
import Jwt from '../utils/jwt.util';
import UserModel from '../models/user.model';
import UserInterface from '../interfaces/user.interface';
import LoginInterface from '../interfaces/login.interface';

export default class UserService {
  public userModel = new UserModel(connection);

  public jwt = new Jwt();

  public createUser = async (user: UserInterface): Promise<string> => {
    const createdUser = await this.userModel.create(user);

    const token = this.jwt.createToken(createdUser);

    return token;
  };

  public findUser = async (user: LoginInterface): Promise<LoginInterface[]> => {
    const foundUser = await this.userModel.find(user);
    
    return foundUser;
  };
}