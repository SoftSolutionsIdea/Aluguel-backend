import { IsNotEmpty, IsString } from "class-validator";

export class CreateCityDto {
    @IsString()
    @IsNotEmpty()
    city: string;
}