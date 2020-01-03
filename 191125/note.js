if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id) )
- !this.state.loadedPost : trường hợp ban đầu sau khi chưa có dữ liệu
- this.state.loadedPost && this.state.loadedPost.id !== this.props.id : trường hợp sau khi đã ấn vào 1 blog và ấn vào blog khác

- token: 1 chuỗi gửi đi (chìa khóa) để thực hiện 1 action
- interceptors : tạo điều kiện để xử lý token
 + . request : trước khi gửi request
 + . response : trước khi response
- timeout : sau khoảng tgian gửi đi nếu chưa thực hiện đc(trg khoảng tgian bằng khi set timeout) sẽ trả về error
deletePostHandler = (payload) => {
    axios.delete('/posts/' + this.props.id,{data:payload})
        .then(response => {
            console.log(response);
        });
}