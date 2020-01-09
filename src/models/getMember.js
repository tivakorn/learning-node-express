// libs
import MongoConnection from '../libs/mongoConnection'

const getMenberHandler = async (req, res) => {

    const json = await getMenber(req.query)

    // res.json({ data: json })
}

const getMenber = async (query) => {
    return await MongoConnection(async (db) => {

        const { username } = query

        const memberData = await db.collection('members').find({}).toArray()

        console.log(memberData)
    })
}

export default getMenberHandler