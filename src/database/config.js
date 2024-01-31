import dotenv from 'dotenv'

dotenv.config()
const { PORT, USER, DATABASE, PASSWORD, SERVER } = process.env
const sqlEncrypt = process.env.SQL_ENCRYPTED === "true"
const config =  {
    port: PORT,
    
    sql: {
        user: USER,
        database: DATABASE,
        password: PASSWORD,
        server: SERVER,
        options: {
            encrypt: sqlEncrypt,

        }
    }
}

export default config