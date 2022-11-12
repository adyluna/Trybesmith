import webtoken from 'jsonwebtoken';
import userInterface from '../interfaces/user.interface';

export default class Jwt {
  public jwt = webtoken;

  public createToken = (data: userInterface): string => {
    const token = this.jwt.sign({ data }, process.env.JWT_SECRET as string, {
      expiresIn: '1d',
      algorithm: 'HS256',
    });

    return token;
  };
}