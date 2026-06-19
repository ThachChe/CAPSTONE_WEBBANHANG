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

    return index - 1;
  }

  addToCart(id, quantity) {
    let index = this.getIndex(id);

    if (index !== -1 && quantity > 0) {
      // kiểm tra sản phẩm đã có trong cart chưa
      let productCart = this.arrCart.find((item) => item.id === id);
      // find này là vòng lặp ngầm dùng duyệt mảng và trả về oject

      if (productCart) {
        // kiểm tra số lượng trong cart có vượt kho không
        if (productCart.quantity < quantity) {
          productCart.quantity += 1;
        } else {
          console.log("Sản phẩm đã hết hàng");
        }
      } else {
        // nếu chưa có thì thêm mới với quantity = 1
        this.arrCart.push({
          ...this.arrProduct[index],
          quantity: 1,
        });
      }
    }

    return this.arrCart;
  }
}
export default ProductManage;
