import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

const Products = () => {
  const globalContext = useContext(GlobalContext);

  console.log(globalContext);

  if (globalContext.data == null) return null;

  return (
    <div>
      <div>Produto:{globalContext.data[0].nome}</div>
      {/* Renderize os produtos ou execute outras lógicas com base em globalContext.data */}
    </div>
  );
};

export default Products;
