// Libs
import express from 'express'
const router = express.Router()

import test from '../models/getMember'
import postMember from '../models/postMember'

router.get('/get_member', [], test)
router.post('/post_member', [], postMember)

router.get('/', (req, res) => { res.json({ success: true }) })

export default router