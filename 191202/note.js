- Redirect chuyển trang từ a đến b link 
- React.Fragment tạo DOM ảo return multiple elements (ko cần thẻ div bọc ngoài cùng)
- Lazyload : khi ko cần load luôn khi truy cập trang 
const Events = React.lazy(() => import('./Events'));
<Suspense fallback={<div>Loading...</div>}>
<Events />
</Suspense>
fallback={<div>Loading...</div>}: tgian load quá lâu thì sẽ hiện ra loading...