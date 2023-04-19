# react-shop

### react-shop 만들면서 아쉬웠던 부분

1. service 폴더 > products.ts 파일의 ProductsListType
- ProductsListType을 사용하여 category를 받아오고 싶었으나, 각 category 페이지에서 useState(ProductsListType)을 사용하면 setState를 할 때, TypeScript 오류가 떴습니다.
npm run dev를 하면 화면에는 문제없이 나오지만 vsCode상에서는 오류를 해결하지 못 했습니다. 오류가 뜬 파일은 아래와 같으며, ProductListType에서 임시로 any로 변경하여 오류를 제거하였습니다.

```
Category 폴더 
- Fashion.tsx
- Accessory.tsx
- Fashion.tsx

Common 폴더
- Products.tsx
```

2. BreadCrumb
- useLocation을 통해 현재 페이지 경로를 가져와 BreadCrumb를 적용 하였습니다. 
페이지 경로로 가져왔기 때문에 상품의 경우, title로 가져오지 못 했습니다.


3. 장바구니 count 표시
- 해당 상품을 '장바구니에 담기' 할 경우, LocalStorage에 id와 count가 저장되도록 구현하고, 중복되는 상품을 장바구니에 담을 경우에는 count가 증가되도록 구현하였습니다. 
하지만 장바구니에서 해당 count를 가져오는데 어려움이 있었으며, 버튼 '-'와 '+'를 누르면 count가 증감되도록 작성하였지만 LocalStorage의 count에는 변동이 없었습니다. 


4. vercel로 배포하기 
- vercel 배포 시, 위에 1번 부분의 TypeScript에서 나는 오류를 모두 any로 바꿔 임시로 오류를 없앤 후, 배포를 시도하였지만 해결하지 못 했습니다.
- 오류 사진 : https://github.com/YouJin-Cho/react-shop/issues/1#issue-1674613373
- axios에도 type을 주어 해결하려 했지만, 오류가 해결되지 않았습니다. 
