interface Props {
  params: { id: string };
}

function Products({ params }: Props) {
  return <div>{params.id}</div>;
}

export default Products;
