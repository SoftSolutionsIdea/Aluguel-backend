import { Type } from "class-transformer";
import { IsDate, IsDateString, IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, Matches, ValidateNested } from "class-validator";
import { IsCPFOrCNPJ } from "src/common/dto/cpf_cnpj";
import { CreateAddressDto } from "src/common/dto/address/createAddress.dto";

export class CreateClientDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail({}, {message: 'Email inválido'})
    @Matches(/^[a-zA-Z0-9._%+-]/, {message: 'Email precisa ser um endereço de gmail'})
    email: string;

    @IsString()
    @IsOptional()
    instagram: string;

    @IsString()
    @Matches(/^\(\d{2}\) \d{4,5}-\d{4}$/, { message: "Número de telefone deve estar no formato (XX) XXXX-XXXX OU (XX) XXXXX-XXXX"})
    telephone_1: string;

    @IsString()
    @IsOptional()
    @Matches(/^\(\d{2}\) \d{4,5}-\d{4}$/, { message: "Número de telefone deve estar no formato (XX) XXXX-XXXX OU (XX) XXXXX-XXXX"})
    telephone_2: string;

    @IsDateString({}, {message: 'Formato inválido da data'})
    niver: string;

    @IsString()
    @Matches(/^\d{2}\.\d{3}\.\d{3}-\d{1}$/, {message: 'RG precisa ser do formato XX.XXX.XXX-X' })
    rg: string

    @IsString()
    @IsCPFOrCNPJ()
    cpf_cnpj: string;

    @ValidateNested()
    @IsNotEmpty()
    @Type(() => CreateAddressDto)
    addressCli: CreateAddressDto

}