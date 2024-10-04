import React, { useState } from 'react';

const ProductList = () => {
  // Массив товаров по умолчанию
  const initialProducts = [
    { id: 1, name: 'Laptop', brand: 'Dell', price: 50000 },
    { id: 2, name: 'Phone', brand: 'Apple', price: 60000 },
    { id: 3, name: 'Headphones', brand: 'Sony', price: 8000 }
  ];

  // Состояние для списка товаров
  const [products, setProducts] = useState(initialProducts);

  // Состояние для добавления нового товара
  const [newProduct, setNewProduct] = useState({ name: '', brand: '', price: '' });

  // Функция для удаления товара
  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  // Функция для изменения товара
  const handleUpdate = (id, updatedProduct) => {
    setProducts(products.map(product => product.id === id ? updatedProduct : product));
  };

  // Функция для добавления товара
  const handleAdd = () => {
    const newId = products.length > 0 ? products[products.length - 1].id + 1 : 1;
    setProducts([...products, { ...newProduct, id: newId, price: parseFloat(newProduct.price) }]);
    setNewProduct({ name: '', brand: '', price: '' });
  };

  return (
    <div>
      <h1>Product List</h1>

      {/* Форма для добавления нового товара */}
      <div>
        <input
          type="text"
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Brand"
          value={newProduct.brand}
          onChange={(e) => setNewProduct({ ...newProduct, brand: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <button onClick={handleAdd}>Add Product</button>
      </div>

      {/* Список товаров */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.name} - {product.brand} - {product.price}₽</span>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
            <button onClick={() => handleUpdate(product.id, { ...product, price: product.price + 1000 })}>
              Update Price
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
