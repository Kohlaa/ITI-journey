const express = require('express');
const app = express();
const port = 2000;

let products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' }
];

app.use(express.json()); 

app.get('/products', (req, res) => {
  if (products.length == 0)
    res.status(404).send('Products not found');
  else
    res.json(products);
});

app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(prod => prod.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

app.post('/products', (req, res) => {
  const newProduct = req.body;
  if(newProduct && newProduct.id && newProduct.name){
    products.push(newProduct);
    res.status(201).send('Product added successfully');
  }
else{
  res.status(400).send('Please provide id and name for the product');
}
});

app.put('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const updatedProduct = req.body;
  products = products.map(prod => {
    if (prod.id === productId) {
      return { ...prod, ...updatedProduct };
    }
    return prod;
  });
  res.send('Product updated successfully');
});

app.delete('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const initialLength = products.length;
  products = products.filter(prod => prod.id !== productId);

  if (products.length < initialLength) {
    res.send('Product deleted successfully');
  } else {
    res.status(404).send('Product not found');
  }
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
app.patch('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const updatedFields = req.body;
  let productUpdated = false;

  products = products.map(prod => {
    if (prod.id === productId) {
      productUpdated = true;
      return { ...prod, ...updatedFields };
    }
    return prod;
  });

  if (productUpdated) {
    res.send('Product updated successfully');
  } else {
    res.status(404).send('Product not found');
  }
});
