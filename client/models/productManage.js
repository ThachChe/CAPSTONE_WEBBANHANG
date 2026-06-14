class ProductManage {
  constructor() {
    this.arrProduct = [];
  }

  //Data from Axios
  getListProduct(data) {
    this.arrProduct = data;
  }

  // Filter Product
  filterProduct(type) {
    if (type === "all") {
      return this.arrProduct;
    }

    let arrFilterProduct = [];
    for (let i = 0; i < this.arrProduct.length; i++) {
      let product = this.arrProduct[i];
      if (product.type === type) {
        arrFilterProduct.push(product);
      }
    }

    return arrFilterProduct;
  }
}

export default ProductManage;
