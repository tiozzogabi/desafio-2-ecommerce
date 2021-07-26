import { useState, useEffect} from 'react'
import { Container } from './styled'
import api from '../../services/api'

interface Iproduct{
  id: number,
  image: string,
  name: string,
  description: string,
  price: number
}


function ProductComponent(props: any) {
  const [product, setProduct] = useState<Iproduct[]>([]);
  
  useEffect(() => {
    api.get('').then((res) => {
      setProduct(res.data)
      localStorage.setItem("products", JSON.stringify(res.data))
    })
  }, [])

  const [count, setCount] = useState(0);

  function handleClick(e: any) {
    setCount(prevCount => prevCount + 1);
    console.log(count);
    console.log(e.target);

  }

  return(
    <Container>
      <section>
      {product.map(product => (
        <div className="product-tile">
          <button onClick={handleClick}>+</button>
         <div className="img-container" key={product.id}>
         <img src={product.image} alt="Jenny" />
         </div>
         <h1>{product.name}</h1>
         <p>R${product.price}</p> 
         </div>
      ))}
      
      </section>
    </Container>
  )
}

export default ProductComponent;