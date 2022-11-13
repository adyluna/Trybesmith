import webtoken from 'jsonwebtoken';
import UserInterface from '../interfaces/user.interface';
import LoginInterface from '../interfaces/login.interface';

export default class Jwt {
  public jwt = webtoken;

  public createToken = (data: (UserInterface | LoginInterface)): string => {
    const token = this.jwt.sign({ data }, process.env.JWT_SECRET as string, {
      expiresIn: '1d',
      algorithm: 'HS256',
    });

    return token;
  };

  public validateToken = (token: string): (UserInterface | null) => {
    try {
      const secret = process.env.JWT_SECRET || 'secret';
      const decoded = this.jwt.verify(token, secret) as UserInterface;
      return decoded;
    } catch (e) {
      return null;
    }
  };
}