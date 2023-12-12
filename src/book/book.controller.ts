import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UseGuards,
} from "@nestjs/common";
import { BookService } from "./book.service";
import { BookDto } from "./dto/book.dto";
import { AuthGuard } from "src/auth/guards/auth.guard";

@UseGuards(AuthGuard)
@Controller("book")
export class BookController {
  constructor(private bookservice: BookService) {}

  @Post("add")
  async createbook(@Body() bookdto: BookDto) {
    try {
      return await this.bookservice.createbook(bookdto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
