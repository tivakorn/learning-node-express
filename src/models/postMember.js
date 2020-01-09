const postMemberHandler = (req, res) => {

    const { username } = req.body

    res.json({ username })

}

export default postMemberHandler