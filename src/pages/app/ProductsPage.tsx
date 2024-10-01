import { Pagination } from "antd";
import WrappedCard from "../../ui/WrappedCard";
import PageHeader from "../../ui/PageHeader";
import { useState } from "react";
import ProductContainer from "../../features/app/products/ProductContainer";
const PAGE_SIZE = 8;
const itemsList = [
  <WrappedCard />,
  <WrappedCard />,
  <WrappedCard />,
  <WrappedCard />,
  <WrappedCard />,
  <WrappedCard />,
  <WrappedCard />,
  <WrappedCard />,
  <WrappedCard />,
  <WrappedCard />,
  <WrappedCard />,
  <WrappedCard />,
  <WrappedCard />,
  <WrappedCard />,
  <WrappedCard />,
  <WrappedCard />,
  <WrappedCard />,
  <WrappedCard />,
  <WrappedCard />,
  <WrappedCard />,
  <WrappedCard />,
  <WrappedCard />,
  <WrappedCard />,
  <WrappedCard />,
  <WrappedCard />,
];
function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const paginatedItemsList = itemsList.slice(startIndex, endIndex);
  return (
    <>
      <PageHeader>Products</PageHeader>
      <Pagination
        onChange={(page) => setCurrentPage(page)}
        current={currentPage}
        align="center"
        total={50}
        style={{ margin: "30px" }}
      />
      <ProductContainer paginatedItemsList={paginatedItemsList} />
      <Pagination align="center" total={50} />
    </>
  );
}

export default ProductsPage;
