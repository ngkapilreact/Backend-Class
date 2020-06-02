
mapUser = (productNew, product) => {
    if(product.name){
        productNew.name = product.name;
    }
    if(product.price){
        productNew.price = product.price;
    }
    if(product.quantity){
        productNew.quantity = product.quantity;
    }
    if(product.tags){
        productNew.tags = product.tags.split(',');
    }
    if(product.details){
        productNew.details = product.details;
    }
    if(product.color){
        productNew.color = product.color;
    }
    if(product.image){
        productNew.image = product.image;
    }
    if(product.manuDate){
        productNew.manuDate = product.manuDate;
    }
    if(product.expiryDate){
        productNew.expiryDate = product.expiryDate;
    }
    if(product.brand){
        productNew.brand = product.brand;
    }
    if(product.user){
        productNew.user = product.user;
    }
    if(product.status){
        productNew.status = product.status;
    }
    if(product.quality){
        productNew.quality = product.quality;
    }
    if (product.supplierName || product.supplierAddress) {
        productNew.supplier = {};
        if (product.supplierName){
            productNew.supplier.name = product.supplierName
        }
        if (product.supplierAddress){
            productNew.supplier.address = product.supplierAddress
        }
        if (product.supplierEmail || product.supplierContactPerson || product.supplierPhoneNumber) {
            productNew.supplier.contactDetails = {};
            if (product.supplierEmail){
                productNew.supplier.contactDetails.email = product.supplierEmail
            }
            if (product.supplierPhoneNumber){
                productNew.supplier.contactDetails.phoneNumber = product.supplierPhoneNumber
            }
        }
    }

    return productNew;
}
module.exports = mapUser;