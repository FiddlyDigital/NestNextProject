import { Injectable, NotFoundException, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductsService {

  constructor(private prismaService: PrismaService) {

  }

  async create(createProductDto: CreateProductDto) {
    try {
      return await this.prismaService.product.create({
        data: createProductDto
      });
    } catch (exc) {
      if (
        exc instanceof Prisma.PrismaClientKnownRequestError &&
        exc.code === "P2002"
      ) {
        throw new ConflictException(`Product with name ${ createProductDto.name } already exists.`);
      }

      throw new InternalServerErrorException();
    }
  }

  async findAll() {
    return this.prismaService.product.findMany();
  }

  async findOne(id: number) {
    const existingProduct = await this.prismaService.product.findUnique({
      where: {
        id: id
      }
    });

    if (!existingProduct) {
      throw new NotFoundException(`Product with id ${id} found`);
    }

    return existingProduct;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    // TODO: same as update
    const existingProduct = await this.prismaService.product.update({
      where: {
        id: id
      },
      data: updateProductDto
    });

    if (!existingProduct) {
      throw new NotFoundException(`Product with id ${id} found`);
    }

    return existingProduct;
  }

  async remove(id: number) {
    const existingProduct = await this.prismaService.product.delete({
      where: {
        id: id
      }
    });

    if (!existingProduct) {
      throw new NotFoundException(`Product with id ${id} found`);
    }

    return existingProduct;
  }
}
