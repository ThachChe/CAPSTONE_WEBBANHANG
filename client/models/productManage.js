class ProductManage {
  constructor() {
    this.arrProduct = [];
    this.arrCart = [];
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

  // lay vi tri
  getIndex(id) {
    let index = -1;
    for (let i = 0; i < this.arrProduct.length; i++) {
      if (id === this.arrProduct[i].id) {
        index = id;
        break;
      }
    }

    return index;
  }

  addToCart(id) {
    let index = this.getIndex(id);

    if (index !== -1) {
      this.arrCart.push(this.arrProduct[index]);
    }

    return this.arrCart;
  }
}

export default ProductManage;
