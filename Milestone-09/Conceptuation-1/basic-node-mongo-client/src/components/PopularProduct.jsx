import { getAllProducts } from "@/lib/product/data";
import { ProductCard } from "./ProductCard";

const PopularProduct = async () => {
    const productData = await getAllProducts();
    console.log(productData);

    return (
        <div>
            <h1>PopularProduct</h1>
            <div className="grid grid-cols-3 gap-6 px-10">
                {
                    productData.map(product => <ProductCard key={product._id} product={product} />)
                }
            </div>
        </div>
    );
};

export default PopularProduct;