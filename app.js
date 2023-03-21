import express from "express"
import mongoose from "mongoose"
import router from "./src/router/product"
const app = express()

app.use(express.json())
app.use(router)

mongoose.connect("mongodb://127.0.0.1:27017/we17309").then(()=>{console.log("Đã kết nối");})

export const viteNodeApp  = app