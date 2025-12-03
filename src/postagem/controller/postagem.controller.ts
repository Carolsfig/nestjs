import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { PostagemService } from "../services/postagem.service";
import { Postagem } from "../entities/postagem.entity";

@Controller("/postagens")   // Indica que a Classe é uma Controller
export class PostagemController {

    constructor(private readonly postagemService: PostagemService) { }

    @Get()   // Indica qual o tipo de Requesição esse método é executado
    @HttpCode(HttpStatus.OK)   // Monta a Resposta HTTP para o fronto com o status 200
    findAll(): Promise<Postagem[]> {
        return this.postagemService.findAll();
    }

    @Get("/:id")
    @HttpCode(HttpStatus.OK)  // Monta a Resposta HTTP para o fronto com o status 200
    findById(@Param('id', ParseIntPipe) id: number): Promise<Postagem> {
        return this.postagemService.findById(id);
    }

    @Get('/titulo/:titulo')  // postagens/titulo/{texto}
    @HttpCode(HttpStatus.OK)
    findByTitulo(@Param('titulo') titulo: string): Promise<Postagem[]> {
        return this.postagemService.findByTitulo(titulo);
    }

    @Post()  // Cadastrar/Criar/Salvar info
    @HttpCode(HttpStatus.CREATED)   // 201
    create(@Body() postagem: Postagem): Promise<Postagem> {
        return this.postagemService.create(postagem);
    }


    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() postagem: Postagem): Promise<Postagem> {
        return this.postagemService.update(postagem);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT) //204 - no content indica sucesso e fala "Deu certo oq vc fez mas eu nao tenho oq te mostrar, sem conteúdo"
    delete(@Param('id', ParseIntPipe) id: number){
        return this.postagemService.delete(id);
    }
}