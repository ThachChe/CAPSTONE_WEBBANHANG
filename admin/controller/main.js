import Services from "./../services/api.js";

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
                <td class="px-4 py-3 text-gray-600 max-w-xs truncate">${product.desc}</td>
                <td class="px-4 py-3 font-semibold text-gray-600 max-w-xs truncate">${product.type}</td>
                <td class="px-4 py-3 text-red-500 font-medium">${product.quantity}</td>
                <td>
                    <button class="px-3 py-1 text-xs text-white bg-red-500 hover:bg-red-600 rounded" onclick="handleDelete(${product.id})">Delete</button>
                </td>
            </tr>
        `;
  }
  document.getElementById("tblDanhSachSP").innerHTML = content;
}

getListProduct();

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
};
