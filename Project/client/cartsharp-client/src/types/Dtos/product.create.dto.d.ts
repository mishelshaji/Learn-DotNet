declare interface ProductCreateDto {
    /**
     * The name of the product. The name must be unique.
     */
    name: string;

    /**
     * Detailed description of the product.
     */
    description: string;

    /**
     * Short description of the product. This description is used in the meta
     * description tag of the product page.
     */
    metaDescription: string;

    /**
     * The price of the product.
     */
    price: number;

    /**
     * The stock of the product.
     */
    stock: string;

    /**
     * The category id of the product.
     */
    categoryId: number;
}
