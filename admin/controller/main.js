function getListProduct() {
    const url = "https://6a183c611878294b597ca1d6.mockapi.io/api/WebBanHang";

    const promise = axios({
        url: url,
        method: "GET",
    });

    promise
        .then(function (result) {
            const data = result.data;
            console.log(result);
        })
        .catch(function (error) {
            console.log(error);

        });
}

function renderUI(list) {
    let content = "";
    for (let i = 0; i < length; i++) {
        const product = list[i];
        content += `
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        `
    }
}

getListProduct();