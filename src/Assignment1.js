import React, { Component } from 'react';

class Product extends Component {
   constructor(props) {
      super(props);
      this.state = { qty: 0 };
   }

   buy() {
      this.setState({ qty: this.state.qty + 1 });
      this.props.handleTotal(this.props.price);
   }

   show() {
      this.props.handleShow(this.props.name);
   }

   render() {
      return (
         <div>
            <p>{this.props.name} - ${this.props.price}</p>
            <button onClick={this.buy.bind(this)}>Buy</button>
            <button onClick={this.show.bind(this)}>Show</button>
            <h3>Qty : {this.state.qty} item(s)</h3>
            <hr />
         </div>
      );
   }
}
class Total extends Component {
   render() {
      return (
         <div>
            <h3>Total Cash : ${this.props.total} </h3>
         </div>
      );
   }
}

class ProductForm extends Component {
   submit() {
      const product = {
         name: this.refs.name.value,
         price: parseInt(this.refs.price.value),
      }

      this.props.handleCreate(product);

      this.refs.name.value = '';
      this.refs.price.value = '';
   }
   render() {
      return (
         <div>
            {/* <form> */}
            <input type="text" placeholder="Product Name" ref="name" /> - 
            <input type="text" placeholder="Product Price" ref="price" />
            <br />  <br />
            <button onClick={this.submit.bind(this)}>Create Product</button>
            <hr />
            {/* </form> */}
         </div>
      );
   }
}

class ProductList extends Component {
   constructor(props) {
      super(props);
      this.state = {
         total: 0,
         productList: [
            { name: 'Android', price: 121 },
            { name: 'Apple', price: 122 },
            { name: 'Nokia', price: 65 },
         ]
      };
      this.calcualteTotal = this.calcualteTotal.bind(this);
      this.createProduct = this.createProduct.bind(this);
   }

   createProduct(product) {
      this.setState({
         productList: this.state.productList.concat(product)
      });
   }

   calcualteTotal(price) {
      this.setState({ total: this.state.total + price });
   }

   showProducts(name) {
      alert('here ' + name);
   }

   render() {
      const component = this;
      const products = this.state.productList.map((product) =>
         <Product name={product.name} price={product.price}
            handleShow={component.showProducts}
            handleTotal={component.calcualteTotal}
         />
      );
      return (
         <div style={{backgroundColor: 'Silver', padding: '2%'}}>
            <ProductForm handleCreate={this.createProduct} />
            {products}
            {/* <Product name="Android" price={121}
               handleShow={this.showProducts}
               handleTotal={this.calcualteTotal}
            />
            <Product name="Apple" price={123}
               handleShow={this.showProducts}
               handleTotal={this.calcualteTotal}
            />
            <Product name="Nokia" price={65}
               handleShow={this.showProducts}
               handleTotal={this.calcualteTotal}
            /> */}
            <Total total={this.state.total} />
         </div>
      );
   }
}

export default ProductList;