import express from 'express'
import auth from '../middleware/auth.js'
import {handleAddMessage,
        handleAddNewServiceMessage,
        handleAddNewServiceReview,
        handleDeleteServiceMessage,
        handleDeleteServiceRequestMessage,
    } from '../controllers/messageControllers.js'


const router = express.Router()

router.put('/addnewrmessage', auth, handleAddMessage)
router.delete('/deleteservicerequestmessage',  handleDeleteServiceRequestMessage)
router.put('/serviceprovidersmessage', auth, handleAddNewServiceMessage)
router.delete('/deleteservicemessage',  handleDeleteServiceMessage)
router.put("/addnewservicereview", auth, handleAddNewServiceReview)

export default router