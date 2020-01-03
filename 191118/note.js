- class FilterTable extends React.Component // nên dùng đúng lúc vì khi sử dụng sẽ gây ảnh hưởng đến performance
//sử dụng khi 1 trong 2 trường hợp dưới
+ this.state. //set lại state
+ lifecycle

- shouldComponentUpdate //trả về gtri true false để có render lại ko
- componentWillReceiveProps //nhận prop từ cha nhưng ko render lại ngay lúc đó
- destructuring // clone thành một state mới khi update state mới sẽ ko ảnh hưởng đến state cũ
- sau khi update state /props thì chạy đến shouldComponentUpdate để có update hay ko , ko thì dừng lại , 
có thì tiếp tục chạy đến componentUpdate sau khi update 