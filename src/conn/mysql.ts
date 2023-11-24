import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()


/*importando nossa conexao*/
export const sequelize = new Sequelize(
    //recebendo os parametros para o nosso banco
    process.env.MYSQL_DB as string,
    process.env.MYSQL_USER as string,
    process.env.MYSQL_PASSWORD as string,
    
        {
        dialect:'mysql',
        port:parseInt(process.env.MYSQL_PORT as string)
        }
)

