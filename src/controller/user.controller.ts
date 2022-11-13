import { Request, Response } from 'express';
import UserService from '../service/user.service';

class UserController {
  constructor(private userService = new UserService()) {}

  public createUser = async (req: Request, res: Response) => {
    const user = req.body;

    const token = await this.userService.createUser(user);
    res.status(201).json({ token });
  };

  public findUser = async (req: Request, res: Response) => {
    const user = req.body;

    const foundUser = await this.userService.findUser(user);

    if (foundUser.length === 0) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }
    
    const { id, username, password } = foundUser[0];

    if (password !== user.password) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }

    const userInfo = {
      id,
      username,
    };
    const token = this.userService.jwt.createToken(userInfo);

    res.status(200).json({ token });
  };
}

export default new UserController();