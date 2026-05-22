import { getProductById } from "@/lib/product/data";
import { Button, Card } from "@heroui/react";
import Image from "next/image";

const ProductDetails = async ({ params }) => {
    const pageParams = await params;
    const { pid } = pageParams;
    // /products/productId
    // const res = await fetch(`http://localhost:8000/products/${pid}`);
    // const data = await res.json();
    const data = await getProductById(pid);
    const { image, title, description, price, stock } = data;
    return (
        <div className="px-24 mt-20">
            <Card className="w-full items-stretch md:flex-row">
                <div className="w-1/2">
                    <Image className="w-full h-full rounded-2xl" src={image} alt={title} width={400} height={400} />
                </div>
                <div className="flex flex-1 flex-col gap-3">
                    <Card.Header className="gap-1">
                        <p className="text-xl ">
                            <small className="text-red-500 font-bold ">
                                {stock}
                            </small> items left
                        </p>
                        <Card.Title className="pr-8 font-bold text-3xl text-slate-900">
                            {title}
                        </Card.Title>
                        <Card.Description>
                            {description}
                        </Card.Description>

                    </Card.Header>
                    <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-col">

                            <span className="text-2xl  text-purple-700 font-bold">${price}</span>
                        </div>
                        <Button className="w-full sm:w-auto">Shop Now</Button>
                    </Card.Footer>
                </div>
            </Card>

        </div>
    );
};

export default ProductDetails;