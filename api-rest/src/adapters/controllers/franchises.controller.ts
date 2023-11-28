import { Franchises } from "../../domain/franchises/franchises.model"
import { AppDataSource } from "../../infrastructure/database/db"
import { exceptionsHttp } from "../http/exceptions";
import { Request, Response } from "express";

export const FranchisesAll = async (req: Request, res: Response) => {
    try {
        const franchises = await AppDataSource.getRepository(Franchises).find();
        if (franchises.length < 1 || !franchises) {
            return res.json(exceptionsHttp(301, 'Franchises not found'));
        }
        return res.json(franchises);

    } catch (error) {
        return res.json(exceptionsHttp(301));
    }
}

export const FranchisesCreate = async (req: Request, res: Response) => {
    try {
        const { code_postal, city, address, franchise_number } = req.body;

        const isString = (val: any, type: string) => val || typeof val === type;

        if (isString(code_postal, 'string') && isString(city, 'string') &&
            isString(address, 'string') && isString(franchise_number, 'number')
        ) {
            const newFranchise = Object.assign(new Franchises(), {
                code_postal, city, address, franchise_number
            });
            const createFranchise = await AppDataSource.getRepository(Franchises).save(newFranchise)

            if (createFranchise) {
                return res.json({ code: 200, message: 'Usuario insertado correctamente' });
            }

            return res.json({ code: 400, message: 'No se ha podido insertar la franquicia' });
        }

    } catch (error) {
        return exceptionsHttp(301);
    }
}

export const franchisesEdit = async (req: Request, res: Response) => {

    try {
        if (req && req.body) {

            const id = req.body.id;

            /**
             * @example
             * La expresión Partial<Franchises> es un tipo en TypeScript que se utiliza para representar un objeto que es una versión parcial de otro objeto o clase. En este caso, se está utilizando en el contexto de TypeORM para definir un objeto que contendrá un subconjunto de propiedades de la clase Franchises, y no necesariamente todas las propiedades.
             */
            const franchisesEdit: Partial<Franchises> = {}

            if (req.body.code_postal) {
                franchisesEdit.code_postal = req.body.code_postal;
            }

            if (req.body.city) {
                franchisesEdit.city = req.body.city;
            }

            if (req.body.address) {
                franchisesEdit.address = req.body.address;
            }

            if (req.body.franchise_number) {
                franchisesEdit.franchise_number = req.body.franchise_number;
            }

            const updateData = await AppDataSource.getRepository(Franchises).update(id, franchisesEdit);

            if (updateData) {
                return res.json(exceptionsHttp(200));
            }
            return res.json(exceptionsHttp(400));
        }
        return res.json(exceptionsHttp(400));
    } catch (error) {
        return res.json(exceptionsHttp(400));
    }

}

export const franchisesDelete = async (req: Request, res: Response) => {
    try {
        if (req && req.body) {

            const deleteFranchise = await AppDataSource.getRepository(Franchises).delete({
                id: req.body.id
            });

            if (deleteFranchise) {
                return res.json(exceptionsHttp(200));
            }

            return res.json(exceptionsHttp(401));
        }
        return res.json(exceptionsHttp(400));
    } catch (error) {
        return res.json(exceptionsHttp(401));
    }
}