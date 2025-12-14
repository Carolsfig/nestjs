import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Tema } from "../../tema/entities/tema.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";

@Entity({ name: "tb_postagens" })   // Indicando que a classe é uma Entidade/Model
export class Postagem {

    @PrimaryGeneratedColumn()   // Chave Primária e Auto Incremental
    id: number;

    @IsNotEmpty()   // Validador de Objeto
    @Column({ length: 100, nullable: false })   // Tamanho Máximo: 100 | Regra do MySQL - NOT NULL
    titulo: string;

    @IsNotEmpty()
    @Column({ length: 1000, nullable: false })   // Tamanho Máximo: 1000 | Regra do MySQL - NOT NULL
    texto: string;

    @UpdateDateColumn()
    data: Date;

    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })
    tema: Tema

    @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
        onDelete: "CASCADE"
    })
    usuario: Usuario
}