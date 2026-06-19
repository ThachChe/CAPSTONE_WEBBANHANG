class Services {
    getListProductApi(){
        const url = "https://6a183c611878294b597ca1d6.mockapi.io/api/WebBanHang";

    const promise = axios({
        url: url,
        method: "GET",
    });
    return promise;
    }

    deleteProductApi(id){
        const url = `https://6a183c611878294b597ca1d6.mockapi.io/api/WebBanHang/${id}`;
        const promise = axios({
            url: url,
            method: "DELETE"
        })

        return promise;
    }
}

export default Services;