export interface ItemProduct {
    name: string;
    price: number;
    quantity: number;
  }
  
  class Cart {
    private static instanceCart: Cart;
    private products: ItemProduct[] = [];
  
    private constructor() {}
  
    public static getInstance(): Cart {
      if (!Cart.instanceCart) {
        Cart.instanceCart = new Cart();
      }
      return Cart.instanceCart;
    }
  
    public addProduct(product: ItemProduct): void {
      this.products.push(product);
    }
  
    public getProducts(): ItemProduct[] {
      return this.products;
    }
  
    public clearCart(): void {
      this.products = [];
    }
  }
  
  export default Cart;