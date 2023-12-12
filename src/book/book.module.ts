import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Book, BookSchema } from "./schema/book.schema";
import { BookController } from "./book.controller";
import { BookService } from "./book.service";
import { AuthGuard } from "src/auth/guards/auth.guard";
import { JwtService } from "@nestjs/jwt";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
  controllers: [BookController],
  providers: [BookService,AuthGuard,JwtService],
})
export class BookModule {}
