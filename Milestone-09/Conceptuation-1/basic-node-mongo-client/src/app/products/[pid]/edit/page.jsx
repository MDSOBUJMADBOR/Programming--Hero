import EditProductForm from "@/components/EditProductForm";
import { getProductById } from "@/lib/product/data";

const EditProductPage = async ({ params }) => {
    const { pid } = await params;

    const product = await getProductById(pid);
    // console.log(product);

    return (
        <div>
            <h1 className="font-bold text-2xl">Edit {product.title}</h1>
            <EditProductForm
                product={product}
            />
        </div>
    );
};

export default EditProductPage;