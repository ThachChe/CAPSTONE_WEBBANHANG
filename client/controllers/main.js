import ProductManage from "../models/productManage.js";

const productManage = new ProductManage();

function getListProduct() {
  const url = "https://6a183c611878294b597ca1d6.mockapi.io/api/WebBanHang";
  const promise = axios({
    url: url,
    method: "GET",
  });

  promise
    .then(function (result) {
      const data = result.data;
      console.log(data);
      renderUI(data);
      productManage.getListProduct(data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

getListProduct();

function renderUI(data) {
  let content = "";

  for (let i = 0; i < data.length; i++) {
    const product = data[i];
    content += `
           <div
      id="product__item-1"
      class="product__item w-full max-w-sm bg-neutral-primary-soft p-6 border border-default rounded-lg shadow-xs"
    >
      <a href="#">
        <img
          class="rounded-lg mb-6"
          src="${product.img}"
          alt="product image"
        />
      </a>
      <div>
        <div class="flex items-center space-x-3 mb-6">
          <div class="flex items-center space-x-1 rtl:space-x-reverse">
            <svg
              class="w-5 h-5 text-fg-yellow"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path
                d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
              />
            </svg>
            <svg
              class="w-5 h-5 text-fg-yellow"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path
                d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
              />
            </svg>
            <svg
              class="w-5 h-5 text-fg-yellow"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path
                d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
              />
            </svg>
            <svg
              class="w-5 h-5 text-fg-yellow"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path
                d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
              />
            </svg>
            <svg
              class="w-5 h-5 text-fg-yellow"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path
                d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
              />
            </svg>
          </div>
          <span
            class="bg-brand-softer text-white border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm"
            >4.8 out of 5</span
          >
        </div>
        <a href="#">
          <h5
            class="text-xl text-heading text-white font-semibold tracking-tight"
          >
            ${product.name}
          </h5>
        </a>
        <div class="flex items-center justify-between mt-6">
          <span class="text-3xl font-extrabold text-heading text-white "
            >$${product.price}</span
          >
          <!-- Xem Thông tin -->
          <button
            data-modal-target="modal-${product.id}"
            data-modal-toggle="modal-${product.id}"
            class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
            type="button"
          >
            Thông Tin
          </button>

          <!-- Main modal -->
          <div
            id="modal-${product.id}"
            tabindex="-1"
            aria-hidden="true"
            class="text-white hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div class="relative bg-gray-900 w-full max-w-3xl max-h-3xl">
              <!-- Modal content -->
              <div
                class="relative bg-neutral-primary-soft border border-default rounded-base shadow-sm p-4 md:p-6"
              >
                <!-- Modal header -->
                <div
                  class="flex items-center justify-between border-b border-default pb-4 md:pb-5"
                >
                  <h3 class="text-lg font-medium text-heading">
                    Thông Tin Sản Phẩm
                  </h3>
                  <button
                    type="button"
                    class="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center"
                    data-modal-hide="modal-${product.id}"
                  >
                    <svg
                      class="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18 17.94 6M18 18 6.06 6"
                      />
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                </div>
                <!-- Modal body -->
                <div class="space-y-4 md:space-y-6 py-4 md:py-6">
                  <ul>
                    <li>Name: ${product.name}</li>
                    <li>Price: ${product.price}$</li>
                    <li>Screen: ${product.screen}</li>
                    <li>Back Camera: ${product.backCamera}</li>
                    <li>Front Camera: ${product.frontCamera}</li>
                    <li>
                      <p>Image</p>
                      <img
                        src="${product.img}"
                        alt=""
                        width="20%"
                      />
                    </li>
                    <li>Description: ${product.desc}</li>
                    <li>Type: ${product.type}</li>
                  </ul>
                </div>
                <!-- Modal footer -->
                <div
                  class="flex items-center border-t border-default space-x-4 pt-4 md:pt-5"
                >
                  <button
                    data-modal-hide="modal-${product.id}"
                    type="button"
                    class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
                  >
                    Close
                  </button>
                  <button
                    data-modal-hide="modal-${product.id}"
                    type="button"
                    class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Giỏ Hàng -->
          <button
            type="button"
            class="inline-flex cursor-pointer items-center text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none"
          >
            <svg
              class="w-4 h-4 me-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
        `;
  }

  document.getElementById("product-content").innerHTML = content;

  if (typeof initFlowbite === "function") {
    initFlowbite(); // Câu lệnh yêu cầu Flowbite quét lại toàn bộ các nút modal mới sinh ra
  }
}

function getId(id) {
  return document.getElementById(id);
}

getId("btn-type").addEventListener("change", function () {
  const type = getId("btn-type").value;
  console.log(type);
  const listType = productManage.filterProduct(type);
  renderUI(listType);
});
