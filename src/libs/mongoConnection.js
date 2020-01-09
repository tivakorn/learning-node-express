// libs
import { mongodb } from 'config'
import { MongoClient } from 'mongodb'

// const { url, port, dbname } = mongodb
const { url, port, dbname, username, password } = mongodb

const mongoConnection = async (callback, errorCallback = null) => {

    let conn = null

    try {
        // connection is open once
        if (typeof username === 'undefined' || typeof password === 'undefined') {
            // without authentication
            conn = await MongoClient.connect(`mongodb+srv:${url}:${port}`, { useNewUrlParser: true, useUnifiedTopology: true })
        } else {
            // authenticate DB
            conn = await MongoClient.connect(`mongodb+srv://${username}:${password}@cluster0-vjwn4.mongodb.net`, { useNewUrlParser: true, useUnifiedTopology: true })
        }
        return await callback(conn.db(dbname))

    } catch (e) {
        // eslint-disable-next-line no-console
        console.log('Database connection error: ', e)
        if (errorCallback !== null) {
            return errorCallback(e)
        }
    } finally {
        if (conn !== null) {
            conn.close()
            //console.log('Database connection closed')
        }
    }

    return null
}

export default mongoConnection