import joi from "joi";
import sp from "../models/products";

const productSchema = joi.object({
    name: joi.string().required(),
    price: joi.number().required()
})

export const getAll = async(req,res)=>{
    try {
        const product = await sp.find()
        if(!product){
            return res.status(400).josn({
                message: "Không có sản phẩm nào"
            })
        }
        return res.json({
            message: "Danh sách sản phẩm",
            data: product
        })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const getOne = async(req,res)=>{
    try {
        const product = await sp.find({_id: req.params.id})
        if(!product){
            return res.status(400).josn({
                message: "Sản phẩm không tồn tại"
            })
        }
        return res.json({
            data: product
        })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const add = async(req,res)=>{
    try {
        const {error} = productSchema.validate(req.body)
        if(error){
            return res.status(400).json({
                message: error.details[0].message
            })
        }
        const product = await sp.create(req.body)
        if(!product){
            return res.status(400).json({
                message: "Thêm sản phẩm không thành công"
            })
        }
        return res.json({
            message: "Thêm sản phẩm thành công",
            data: product
        })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const update = async(req,res)=>{
    try {
        const {error} = productSchema.validate(req.body)
        if(error){
            return res.status(400).json({
                message: error.details[0].message
            })
        }
        const product = await sp.findByIdAndUpdate(req.params.id,req.body)
        if(!product){
            return res.status(400).json({
                message: "Cập nhật sản phẩm không thành công"
            })
        }
        return res.json({
            message: "Cập nhật sản phẩm thành công"
        })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const remove = async(req,res)=>{
    try {
        const product = await sp.deleteOne({_id: req.params.id})
        if(!product){
            return res.status(400).josn({
                message: "Sản phẩm không tồn tại"
            })
        }
        return res.json({
            message: "Xoá sản phẩm thành công"
        })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}