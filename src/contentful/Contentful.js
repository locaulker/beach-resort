import { createClient } from "contentful"
//import dotenv from 'dotenv'

//require('dotenv').config()

export default createClient({
	space: process.env.REACT_APP_SPACE_ID,
	accessToken: process.env.REACT_APP_ACCESS_TOKEN,
})
