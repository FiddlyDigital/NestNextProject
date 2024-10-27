"use client";

import { useRouter } from "next/navigation";
import { Button, buttonVariants } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { deleteProduct } from "@/app/products/products.api";

export function ProductCard({ product }: any) {
    const router = useRouter();

    function handleCardClick(productId: string) {
        router.push(`/products/${productId}`)
    }

    async function handleEditProduct(productId: string) {
        router.push(`/products/${productId}/edit`);
    }

    async function handleRemoveProduct(productId: string) {
        await deleteProduct(productId);
        router.refresh();
    }

    return (
        <Card>
            <CardHeader
                className="cursor-pointer"
                onClick={() => handleCardClick(product.id)}>
                <CardTitle className="flex justify-between">
                    {product.name}
                    <span className="text-sm font-bold text-gray-500">
                        €{product.price}
                    </span>
                </CardTitle>
            </CardHeader>
            <img src={product.image} alt={product.description} />
            <CardContent>
                <p>{product.description}</p>

            </CardContent>
            <CardFooter className="flex justify-between">
                <Button
                    onClick={() => handleEditProduct(product.id)}>
                    Edit
                </Button>
                <Button variant="destructive"
                    onClick={() => handleRemoveProduct(product.id)}>
                    Delete
                </Button>
            </CardFooter>
        </Card>
    )
}
