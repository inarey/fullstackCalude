import React, {useState} from 'react';

const ProductCard = ({product, onAddToCart}) => {
  const [quantity, setQuantity] = useState(1) // track quantity for each product

  // Function to handle add to cart with quantity
  const handleAddToCart = () => {
    //add the product quantity to the cart
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product)
    }

    // reset quantity to 1 after adding to cart
    setQuantity(1)
  }

  return (
    <div className='border p-4 rounded-lg'>
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-green-600 text-lg">${product.price}</p>

      {/* Quantity selector */}
      <div className="flex items-center gap-2 my-3">
        <label htmlFor="quantity" className="font-semibold">Quantity:</label>
        <input 
          type="number" 
          id="quantity" 
          min="1" 
          max="10"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-16 px-2 py-1 border rounded"
        />
      </div>

      {/* Add to Cart button with quantity */}
      <button 
      onClick={handleAddToCart}
      className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600">Add to Cart</button>
      
    </div>
  )
}

export default ProductCard
