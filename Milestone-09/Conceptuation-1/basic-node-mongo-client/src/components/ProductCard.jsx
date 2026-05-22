import { CircleDollar } from "@gravity-ui/icons";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export function ProductCard({ product }) {
    const { _id, title, description, price, image } = product;
    return (
        <Card className="w-[400px]">
            <Image src={image} alt={title} width={400} height={400} />
            <Card.Header>
                <Card.Title>
                    {title}
                </Card.Title>
                <Card.Description>
                    {description.slice(0, 40)}...
                </Card.Description>
            </Card.Header>
            <div>
                <p>{price}</p>
            </div>
            <Card.Footer>
                <Link href={`/products/${_id}`}>
                    <Button>
                        View Details
                    </Button>
                </Link>
            </Card.Footer>
        </Card>
    );
}