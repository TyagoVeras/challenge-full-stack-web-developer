interface ICreateUserDTO{
  id?: string;
  name: string;
  email: string;
  password: string;
  isAdmin?: string;
}

interface IResponseUserDTO{
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

interface IRequestAuthenticateUserDTO{
  email: string;
  password: string;
}

interface IResponseUserAuthenticateDTO{
  user: IResponseUserDTO;
  token: string;
}

export {
  ICreateUserDTO, IResponseUserDTO, IResponseUserAuthenticateDTO, IRequestAuthenticateUserDTO,
};
