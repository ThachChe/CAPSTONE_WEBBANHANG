import Services from "./../services/api.js";
import Product from "../models/product.js";

function getId(id) {
  return document.getElementById(id);
}

const services = new Services();

function getListProduct() {
  const promise = services.getListProductApi();

  promise
    .then(function (result) {
      const data = result.data;
      renderUI(data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function renderUI(list) {
  let content = "";
  for (let i = 0; i < list.length; i++) {
    const product = list[i];
    content += `
            <tr class="bg-white border-b hover:bg-gray-50">
                <td class="px-4 py-3 font-medium text-gray-900">${i + 1}</td>
                <td class="px-4 py-3 font-semibold text-gray-700">${product.name}</td>
                <td class="px-4 py-3 text-red-500 font-medium">${product.price}</td>
                <td class="px-4 py-3 text-gray-600 max-w-xs truncate">${product.screen}</td>
                <td class="px-4 py-3 text-gray-600 max-w-xs truncate">${product.backCamera}</td>
                <td class="px-4 py-3 text-gray-600 max-w-xs truncate">${product.frontCamera}</td>
                <td class="px-4 py-3">
                    <img class="w-12 h-12 object-cover rounded border" src="${product.img}" width="50" />
                </td>
                <td class="px-4 py-3 font-semibold text-gray-600 max-w-xs truncate">${product.type}</td>
                <td class="px-4 py-3 text-gray-600 max-w-xs truncate">${product.desc}</td>
                <td>
                    <button class="px-3 py-1 text-xs text-white bg-blue-500 hover:bg-blue-600 rounded" onclick="handleEdit('${product.id}')">Edit</button>
                    <button class="px-3 py-1 text-xs text-white bg-red-500 hover:bg-red-600 rounded" onclick="handleDelete('${product.id}')">Delete</button>
                </td>
            </tr>
        `;
  }
  document.getElementById("tblDanhSachSP").innerHTML = content;
}

getListProduct();
/**
 * Hàm tắt modal an toàn của Flowbite
 */
function closeProductModal() {
  const closeBtn = document.querySelector('[data-modal-hide="product-modal"]');
  if (closeBtn) {
    closeBtn.click();
  }
}

/**
 * Delete Product
 */

function handleDelete(id) {
  const promise = services.deleteProductApi(id);
  promise
    .then(function (result) {
      const data = result.data;
      console.log(data);
      alert(`Delete success: ${data.name}`);
      //render lại danh sách mới
      getListProduct();
    })
    .catch(function (error) {
      console.log(error);
    });
}
window.handleDelete = handleDelete;

/**
 * Bấm vào nút thêm mới => xử lý modal
 */
getId("btnThemSP").onclick = function () {
  // Cập nhật title modal
  document.getElementById("modal-title").innerHTML = "Add Product";

  //Tạo nút Add Product => Footer modal
  const btnAdd = `<div class="flex justify-end w-full">
      <button type="button" class="text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5" onclick="handleAddProduct()">
        Add Product
      </button>
    </div>`;
  document.getElementById("modal-footer").innerHTML = btnAdd;
};

/**
 * Add Product
 */

function handleAddProduct() {
  //Dom tới các thẻ input lấy value
  const name = getId("tenSP").value;
  const price = getId("giaSP").value;
  const screen = getId("manHinhSP").value;
  const backCamera = getId("camSauSP").value;
  const frontCamera = getId("camTruocSP").value;
  const img = getId("hinhAnh").value;
  const type = getId("hangSP").value;
  const desc = getId("moTa").value;
  //Tạo đối tượng product từ lớp đối tượng Product
  const product = new Product(
    "",
    name,
    price,
    screen,
    backCamera,
    frontCamera,
    img,
    type,
    desc,
  );
  // Gọi tới server truyền dữ liệu
  const promise = services.addProductApi(product);
  promise
    .then(function (result) {
      const data = result.data;
      alert(`Add success: ${data.name}`);
      getListProduct();
      closeProductModal();
    })
    .catch(function (error) {
      console.log(error);
    });
}
window.handleAddProduct = handleAddProduct;

/**
 * Edit Product
 */

function handleEdit(id) {
  // Cập nhật title modal
  document.getElementById("modal-title").innerHTML = "Edit Product";
  // Tạo nút Update Product => footer modal

  const btnUpdate = `<div class="flex justify-end w-full">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5" onclick="handleUpdateProduct('${id}')">
        Update Product
      </button>
    </div>`;
  document.getElementById("modal-footer").innerHTML = btnUpdate;

  const promise = services.getProductByIdApi(id);
  promise
    .then(function (result) {
      const data = result.data;
      // Dom tới các thẻ input=> show các thuộc tính từ data
      getId("tenSP").value = data.name;
      getId("giaSP").value = data.price;
      getId("manHinhSP").value = data.screen;
      getId("camSauSP").value = data.backCamera;
      getId("camTruocSP").value = data.frontCamera;
      getId("hinhAnh").value = data.img;
      getId("hangSP").value = data.type;
      getId("moTa").value = data.desc;

      // THÊM 3 DÒNG NÀY: Chủ động ép modal hiển thị độc lập với Flowbite
      const modal = document.getElementById("product-modal");
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    })
    .catch(function (error) {
      console.log(error);
    });
}
window.handleEdit = handleEdit;

/**
 * Update Product
 */
function handleUpdateProduct(id) {
  // Dom tới các thẻ input để lấy value mới nhất
  const name = getId("tenSP").value;
  const price = getId("giaSP").value;
  const screen = getId("manHinhSP").value;
  const backCamera = getId("camSauSP").value;
  const frontCamera = getId("camTruocSP").value;
  const img = getId("hinhAnh").value;
  const type = getId("hangSP").value;
  const desc = getId("moTa").value;
  // Tạo đối tượng product từ lớp đối tượng Product
  const product = new Product(
    id,
    name,
    price,
    screen,
    backCamera,
    frontCamera,
    img,
    type,
    desc,
  );
  const promise = services.updateProductByIdApi(product);
  promise
    .then(function (result) {
      const data = result.data;
      alert(`Update success: ${data.name}`);
      getListProduct();
      closeProductModal();
    })
    .catch(function (error) {
      console.log(error);
    });
}
window.handleUpdateProduct = handleUpdateProduct;
