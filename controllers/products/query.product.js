let productModel = require('./../../models/model.product');
let mapProduct = require('./../../helpers/helper.product');

insertProduct = (data) => {
    return new Promise((resolve,reject)=>{
        let newProduct = new productModel({});
        let mappedProduct = mapProduct(newProduct, data);
        mappedProduct.save((error,saveProduct)=>{
            if(error){
                reject(error);
            }
            else{
                resolve(saveProduct);
            }
        })
    })
}

fetchProduct = (condition) => {
    return new Promise((resolve,reject) => {
        productModel.find(condition).exec((error,showProduct)=>{
            if(error){
                reject(error);
            }
            else{
                resolve(showProduct);
            }
        })
    })
}
searchProduct = (condition, data) => {
    return new Promise((resolve,reject)=>{
        let searchProduct = mapProduct(condition, data);
        productModel.find(condition).exec((error,searchProducts)=>{
            if(error){
                reject(error);
            }
            else{
                resolve(searchProducts);
            }
        })
    })
}
updateProduct = (id, data) => {
    return new Promise((resolve,reject)=>{
        productModel.findByIdAndUpdate(id).exec((error,product)=>{
            if(error){
                reject(error);
            }
            if(product){
                let newMapProduct = mapProduct(product,data);
                newMapProduct.save((error,updated)=>{
                    if(error){
                        reject(error);
                    }
                    else{
                        resolve(updated);
                    }
                })
            }
            else{
                reject({
                    message: 'No Product found',
                    status:404,
                })
            }
        })
    })

}
removeProduct = (id) => {
    return new Promise((resolve,reject)=>{
        productModel.findByIdAndRemove(id).exec((error,product)=>{
            if(error){
                reject(error);
            }
            if(product){
                resolve(product);
            }
            else{
                reject({
                    message:'Product already removed',
                    status:404,
                })
            }
        })
    })
}

module.exports = {
    getProduct:fetchProduct,
    postProduct:insertProduct,
    putProduct:updateProduct,
    deleteProduct:removeProduct,
    searchProduct:searchProduct,

}