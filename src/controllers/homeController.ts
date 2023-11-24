import { Request, Response } from 'express';
import { Product } from '../models/Product';
import { sequelize } from '../conn/mysql';
import { User } from '../models/User';


export const home = async (req: Request, res: Response)=>{

    /* utilizado apenas para testar ou debugar
    try{
        await sequelize.authenticate()
        console.log("Conexão estabelecida com sucesso")
    }catch(error){
        console.log("deu problema: ",error)
    }*/

    let users = await User.findAll()

    console.log("USUARIOS: ",JSON.stringify(users))


    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Rafael',
        lastName: 'Sbrana',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: [],
        users
    });
};