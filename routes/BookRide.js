const router = require('express').Router()
const BookRide = require('../models/BookRide')

// book new ride
router.post('/new', async (req, res) => {
    const statusCheck = await BookRide.findOne({status: "pending"})
    if (statusCheck) {
        return res.status(400).json("You have an uncompleted services!")
    }
    
    const newRide = new BookRide({
        ...req.body 
    })
    
    try {
        const savedRide = await newRide.save()
        return res.status(200).json(savedRide)
    } catch (err) {
        return res.status(500).json(err)
    }
})

// get pending ride
router.get('/current', async (req, res) => {
    try {
        const current = await BookRide.findOne({status: "pending"})
        return res.status(200).json(current)
    } catch (err) {
        return res.status(500).json(err)
    }
})

// get latest 5 order
router.get('/history', async (req, res) => {
    const latestFive = await BookRide.find({status: "completed"}).sort({_id: -1}).limit(5) 
    return res.status(200).json(latestFive)
})

// cancel ride
router.delete('/del/:id', async (req, res) => {
    await BookRide.findByIdAndDelete(req.params.id)
    return res.status(200).json("Deleted Successfully")
})

// get all in completed orders (admin)
router.get('/all-incomplete', async (req, res) => {
    try {
        const allInCompleteOrders = await BookRide.find({status: "pending"})
        return res.status(200).json(allInCompleteOrders)
    } catch (err) {
        return res.status(500).json(err)
    }
})

// get all completed orders
router.get('/completed', async (req, res) => {
    try {
        const completedList = await BookRide.find({status: "completed"})
        return res.status(200).json(completedList)
    } catch (err) {
        return res.status(200).json(err)
    }
})


// mark as completed order (admin)
router.put('/:id', async (req, res) => {
    try {
        const modifiedItem = await BookRide.findByIdAndUpdate(req.params.id, req.body, {new: true})
        return res.status(200).json(modifiedItem)
    } catch (err) {
        return res.status(500).json(err)
    }
})

module.exports = router