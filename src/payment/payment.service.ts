import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentService {
  private static products = [
    { id: 1, name: 'Milk', price: 2.23 },
    { id: 2, name: 'Cheese', price: 3.2 },
    { id: 3, name: 'Sausage', price: 3.2 },
  ];

  /**
   * This methdo is responsible for calculating the total price of product based on quantity.
   * @param params Includes product unique ID and total qunatity of product
   * @returns Total price of Product.
   */
  public calculateTotal(params: {
    product_id: number;
    qunatity: number;
  }): number {
    return (
      PaymentService.products.find((item) => item.id === params.product_id)
        .price * params.qunatity
    );
  }

  /**
   * This method is responsible for processing total payment.
   * @param params Includes the total price for the product.
   * @returns Boolean value to indicate success or failure of payments.
   */
  public processPayment(params: { total: number }): boolean {
    //Return our logic here to process payment
    return true;
  }
}
