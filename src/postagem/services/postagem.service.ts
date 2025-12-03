import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ILike, Repository } from "typeorm";
import { Postagem } from "../entities/postagem.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult } from "typeorm/browser";
import { TemaService } from "../../tema/services/tema.service";

@Injectable()   // Indica que a classe é de serviço e pode ser inserida/injetada em outras classes
export class PostagemService {

    // Iniciando ferramentas para a classe de Serviço
    constructor(
        @InjectRepository(Postagem)  // Pode chamar os métodos de um Classe Repository
        private postagemRepository: Repository<Postagem>,
        private temaService: TemaService
    ) { }

    // O InjectRepository permite que a classe repository acesse a classe Postagem e chame seus métodos.

    async findAll(): Promise<Postagem[]> {

        return await this.postagemRepository.find({
            relations:{
                tema: true
            }
        });
    }

    async findById(id: number): Promise<Postagem> {
        const postagem = await this.postagemRepository.findOne({
             where: {
                id
            },
            relations:{
                tema: true
            }
        })

        if(!postagem){
            throw new HttpException('Postagem não encontrada', HttpStatus.NOT_FOUND)
        }

        return postagem
    }

    async findByTitulo(titulo: string): Promise<Postagem[]> {
        return await this.postagemRepository.find({
            where: {
                titulo: ILike(`%${titulo}%`)
            },
            relations: {
                tema: true
            }
        })
    }

    async create(postagem: Postagem): Promise<Postagem> {

        await this.temaService.findById(postagem.tema.id)

        return await this.postagemRepository.save(postagem);
    }

    async update(postagem: Postagem): Promise<Postagem> {

        let buscaPostagem = await this.findById(postagem.id);

        if (!buscaPostagem || !postagem.id){
            throw new HttpException('Postagem não encontrada!', HttpStatus.NOT_FOUND)
        }

        if(postagem.tema) {
            let tema = await this.temaService.findById(postagem.tema.id)

            if(!tema){
                throw new HttpException('Tema não encontrado!', HttpStatus.NOT_FOUND);
            }

            return await this.postagemRepository.save(postagem);
        }

        return await this.postagemRepository.save(postagem);
    }

    async delete(id: number): Promise<DeleteResult> {  // O DeleteResult confirma que foi excluído
        let buscaPostagem = await this.findById(id);

        if(!buscaPostagem)
            throw new HttpException('Postagem não encontrada!', HttpStatus.NOT_FOUND);

        return await this.postagemRepository.delete(id);
    }
    // SELECT * FROM tb_postagens WHERE titulo LIKE %cabana%

    // Postagem Cabana
    // Cabana de Férias
    // SUL: Cabana Temática
    // O ILike ignora letras maiusculas ou minusculas
    // Quando dentro de %% a palavra pode estar no meio de frases e ser encontrada mesmo assim.


    /* REPOSITORY<POSTAGEM>

    find() => SELECT * FROM ??
    create() => INSERT INTO ?? VALUES (,,,,)

    findOne() => SELECT * FROM tb_postagens WHERE id = {id}
    */

    /*
        private contaController: ContaController


    */


}