const express = require('express')
const User = require('../models/user')
const Note = require('../models/note')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

//@route    GET /api/v1/notes
//@desc     get all notes for user
//@access   Private
router.get('/', requireAuth, async (req, res) => {
    const notes = await Note.find({
        user: req.id
    })

    return res.status(200).json({ status: 'success', data: notes })
})

//@route    GET /api/v1/notes/:id
//@desc     get a specific note for user
//@access   Private
router.get('/:id', requireAuth, async (req, res) => {
    const note = await Note.findById(req.params.id)
    note.noOfOpens++
    await note.save()

    return res.status(200).json({ status: 'success', data: note })
})

//@route    POST /api/v1/notes
//@desc     create a new note
//@body     title, body
//@access   Private
router.post('/', requireAuth, async (req, res) => {
    try {
        const user = await User.findById(req.id)

        const { title, body } = req.body

        const note = new Note({
            title,
            body,
            user
        })

        await note.save()

        return res.status(200).json({ status: 'success', data: note })
    } catch (err) {
        return res.status(500).json({
            status: 'error',
            message: 'Something went wrong with server'
        })
    }
})

//@route    DELETE /api/v1/notes/:id
//@desc     delete a note
//@pararms  id
//@access   Private
router.delete('/:id', requireAuth, async (req, res) => {
    try {
        const note = await Note.findOneAndDelete({ _id: req.params.id })

        return res.status(200).json({ status: 'success' })
    } catch (err) {
        return res.status(500).json({
            status: 'error',
            message: 'Something went wrong with server'
        })
    }
})

//@route    PUT /api/v1/notes/:id
//@desc     update a note
//@pararms  id
//@body     title, body
//@access   Private
router.put('/:id', requireAuth, async (req, res) => {
    try {
        const note = await Note.findById(req.params.id)

        const { title, body } = req.body

        note.title = title
        note.body = body

        await note.save()

        return res.status(200).json({ status: 'success' })

    } catch (err) {
        return res.status(500).json({
            status: 'error',
            message: 'Something went wrong with server'
        })
    }
})

module.exports = router