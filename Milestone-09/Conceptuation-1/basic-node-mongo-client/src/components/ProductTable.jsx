import { Button, Table } from "@heroui/react";
import { DeleteModal } from "./DeleteModal";
import Link from "next/link";

export function ProductTable({ products }) {

    return (
        <Table>
            <Table.ScrollContainer>
                <Table.Content aria-label="Team members" className="min-w-[600px]">
                    <Table.Header>
                        <Table.Column isRowHeader>Product Name</Table.Column>
                        <Table.Column>Price</Table.Column>
                        <Table.Column>Stock</Table.Column>
                        <Table.Column>Action</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {
                            products.map(product => <Table.Row key={product._id}>
                                <Table.Cell>{product.title}</Table.Cell>
                                <Table.Cell>{product.price}</Table.Cell>
                                <Table.Cell>{product.stock}</Table.Cell>
                                <Table.Cell>
                                    {/* 
                                    /products/edit/21243423

                                    */}
                                    <Link href={`/products/${product._id}/edit`}>
                                        <Button

                                            className="mr-2">
                                            Edit
                                        </Button>
                                    </Link>
                                    <DeleteModal
                                        productId={product._id}
                                    />
                                </Table.Cell>
                            </Table.Row>)
                        }

                    </Table.Body>
                </Table.Content>
            </Table.ScrollContainer>
        </Table>
    );
}