import IHashProvider from '../models/IHashProvider';

class FakeHashProvider implements IHashProvider {
  public async generate(payload: string): Promise<string> {
    return payload;
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return payload === hashed;
  }
}

export default FakeHashProvider;
