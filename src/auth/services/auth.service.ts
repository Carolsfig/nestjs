import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from '../../usuario/services/usuario.service';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Bcrypt } from '../bcrypt/bcrypt';
import { UsuarioLogin } from '../entities/usuariologin.entity';

@Injectable()
export class AuthService {
    constructor(
        private usuarioService: UsuarioService,
        private jwtService: JwtService,
        private bcrypt: Bcrypt
    ) { }

    // Método usado para validar o usuário
    async validateUser(username: string, password: string): Promise<any> {

        const buscaUsuario = await this.usuarioService.findByUsuario(username)

        if (!buscaUsuario)
            throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND)

        // Faz a comparação entre a senha criptografada no banco com a que está vindo pela requisição
        const matchPassword = await this.bcrypt.compararSenhas(buscaUsuario.senha, password)

        // Se as info estiverem corretas, entra no IF
        if (buscaUsuario && matchPassword) {
            const { senha, ...resposta } = buscaUsuario // Desestruturamos o objeto, isto é, pegamos o que importa para nós
            return resposta
        }

        return null
    }

    async login(usuarioLogin: UsuarioLogin) {
        // Aqui criamos um objeto na qual terá um atributo chamado sub e recebe o email do corpo da requisição
        const payload = { sub: usuarioLogin.usuario }

        /*
            objeto que vem pelo corpo da requisição => usuarioLogin = { usuario: "email@email.com", senha: "12345678" }
            objeto criado => payload = { sub: "email@email.com"}
        */

        const buscaUsuario = await this.usuarioService.findByUsuario(usuarioLogin.usuario)

        // Retorna um objeto com os dados do usuário caso o login for bem sucedido
        return {
            id: buscaUsuario?.id,   // Colocamos ? pois o buscaUsuario pode retornar nulo. Caso existir (?) tenta acessar o id
            nome: buscaUsuario?.nome,
            usuario: usuarioLogin.usuario,
            senha: '',
            foto: buscaUsuario?.foto,
            token: `Bearer ${this.jwtService.sign(payload)}`,   // Cria o Token JWT, criptografando alguns dados como o email do usuário que acabou de logar
        }

    }
}