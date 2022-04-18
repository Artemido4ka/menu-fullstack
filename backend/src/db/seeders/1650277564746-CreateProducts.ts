import { Product } from 'src/products/products.entity';
import { getRepository, MigrationInterface } from 'typeorm';
import { productsArray } from './productsArray';

export class CreateProducts1650277564746 implements MigrationInterface {
  name = 'CreateProducts1650277564746';

  public async up(): Promise<void> {
    const productRepository = getRepository(Product);
    const createProductsPromises = productsArray.map(async (product) => {
      const newProduct = await productRepository.create(product);
      return await productRepository.save(newProduct);
    });
    await Promise.all(createProductsPromises);
  }
  public async down(): Promise<void> {
    const productRepository = getRepository(Product);
    const deleteProducts = await Promise.all(
      productsArray.map(async (product) => {
        return productRepository.findOne({
          title: product.title,
        });
      }),
    );

    await productRepository.remove(deleteProducts);
  }
}
