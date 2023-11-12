import { Franchises } from "../../domain/models/franchises/franchises.model"
import { AppDataSource } from "../../infrastructure/database/db"
import { exceptionsHttp } from "../http/exceptions";
import { HandlerInterface } from "./user.controller";
import { Request, Response } from "express";
 
export interface FranchiseInterface {
    ID: number
    code_postal: string
    city: string
    address: string
    franchise_number: number
  }

export const FranchisesAll = async (req: Request, res: Response) => {
    try {
        const franchises = await AppDataSource.getRepository(Franchises).find();
        if(franchises.length < 1 || !franchises) {
            return exceptionsHttp(301, 'Franchises not found');
        }
        return  {franchises}

    } catch (error) {
        return exceptionsHttp(301);
    }
}

export const FranchisesCreate = async (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        return exceptionsHttp(301);
    }
}

export const franchisesEdit = async (req: Request): Promise<HandlerInterface<void>> => {
    
    try {
        if(req && req.body) {

            const id = req.body.ID;
            
            /**
             * @example
             * La expresión Partial<Franchises> es un tipo en TypeScript que se utiliza para representar un objeto que es una versión parcial de otro objeto o clase. En este caso, se está utilizando en el contexto de TypeORM para definir un objeto que contendrá un subconjunto de propiedades de la clase Franchises, y no necesariamente todas las propiedades.
             */
            const franchisesEdit: Partial<Franchises> = {}

            if(req.body.code_postal) {
                franchisesEdit.code_postal = req.body.code_postal; 
            }
            
            if(req.body.city) {
                franchisesEdit.city = req.body.city; 
            }

            if (req.body.address) {
                franchisesEdit.address = req.body.address;
            }

            if (req.body.franchise_number) {
                franchisesEdit.franchise_number = req.body.franchise_number;
            }

            const updateData = await AppDataSource.getRepository(Franchises).update(id, franchisesEdit);

            if(updateData) {
                return { code: 200, message: '¡Modificacion Satifactoria!' }
            }

            return { code: 400, message: '' }
        }
        return { code: 400, message: 'Error'}
    } catch (error) {
        return { code: 400, message: 'Error'}
    }

}

export const franchisesDelete = async (req: Request): Promise< HandlerInterface<void> > => {
    try {
        if(req && req.body) {
            
            const deleteFranchise = await AppDataSource.getRepository(Franchises).delete({
                id: req.body.id
            });

            if(deleteFranchise) {
                return { code: 200, message: 'Franquicia eliminada exitosamente'}
            }
            
            return { code: 401, message: 'Error'}
        }
        return { code: 400, message: 'Error'}
    } catch (error) {
        return { code: 401, message: 'Error'}
    }
}