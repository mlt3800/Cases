export abstract class BaseError extends Error {
    constructor(message: string, public code: number) {
      super(message);
    }
}
  
  export class CustomError extends Error {
    constructor(statusCode: number, message: string){
        super(message)
    }
}

export class InvalidName extends CustomError{ 
    constructor(){
        super(400, "Nome inválido")
    }
}

export class InvalidRole extends CustomError{ 
    constructor(){
        super(400, "Tipo de usuário inválido")
    }
}

export class InvalidEmail extends CustomError{ 
    constructor(){
        super(400, "Email inválido")
    }
}

export class InvalidPassword extends CustomError{ 
    constructor(){
        super(400, "Senha inválida")
    }
}

export class UserNotFound extends CustomError{ 
    constructor(){
        super(404, "Usuário não encontrado")
    }
}

export class Unauthorized extends CustomError{ 
    constructor(){
        super(401, "Usuário não autorizado")
    }
}

export class MissingToken extends CustomError{ 
    constructor(){
        super(404, "Token não encontrado!")
    }
}

export class ProfileNotFound extends CustomError{ 
    constructor(){
        super(404, "Perfil não encontrado!")
    }
}

export class EmailExist extends CustomError{ 
    constructor(){
        super(400, "Usuário já existe")
    }
}