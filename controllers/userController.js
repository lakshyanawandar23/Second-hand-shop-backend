import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import generateToken from '../utils/generateToken.js'

dotenv.config()

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  // console.log(user)

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      address: user.address,
      contact: user.contact,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

//GET USER PROFILE
const getUserProfile = asyncHandler(async (req, res) => {
  //here req.user is coming from middleware
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      address: user.address,
      contact: user.contact,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})



const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, contact, address } = req.body
  const { phone_no } = contact
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('Email is already registered')
  }
  const validatename = name.length
  const validateaddress = address.length
  const validatePassword = password.length

  if (validatename < 3) {
    res.status(400)
    throw new Error('Name must be of 3 characters  or more length ')
  }

  if (validateaddress < 5) {
    res.status(400)
    throw new Error('Address must be of 5 characters  or more length ')
  }
  if (validatePassword < 6) {
    res.status(400)
    throw new Error('Password length must be greater than 5')
  }

  const validateContact = contact.phone_no.length
  if (validateContact !== 10) {
    res.status(400)
    throw new Error('Enter 10 digit mobile number')
  }

   
   

      const user = await User.create({
        name,
        email,
        password,
        contact,
        address,
      })

      if (user) {
        res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user._id),
          address: user.address,
          contact: user.contact,
        })
      } else {
        res.status(400)
        throw new Error('Invalid User Data')
      }
    
   
})

//get all users by admin only

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({})
  res.json(users)
})

//delete user
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)
  if (user) {
    await user.remove()
    res.json({ message: 'User removed' })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})
//upadte user profile

const updateUserProfile = asyncHandler(async (req, res) => {
  // const user = await User.findById(req.params.id)
  const { name, email, password, address, phone_no } = req.body

  const user = await User.findById(req.params.id)

  if (user) {
    if (req.user._id.toString() === user._id.toString() || req.user.isAdmin) {
      ;(user.name = name || user.name),
        (user.email = email || user.email),
        (user.address = address || user.address),
        (user.password = password || user.password),
        (user.contact.phone_no = phone_no || user.contact.phone_no)
      const updatedUser = await user.save()
      res.status(201).json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,

        address: updatedUser.address,
        contact: updatedUser.contact,
      })
    } else {
      res.status(401)
      throw new Error('You cannot perform this action')
    }
  } else {
    res.status(404)
    throw new Error('No user found')
  }
})

//get user by id

const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password')

  if (
    (user && user._id.toString() === req.user._id.toString()) ||
    req.user.isAdmin
  ) {
    res.json(user)
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

export {
  authUser,
  getUserProfile,
  registerUser,
  getUsers,
  deleteUser,
  updateUserProfile,
  getUserById,
  
}
