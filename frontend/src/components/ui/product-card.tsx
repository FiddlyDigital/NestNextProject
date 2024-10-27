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

    async function handleRemoveProduct(productId: string) {
        await deleteProduct(productId);
        router.refresh();
    }

    return (
        <Card>
            <CardHeader
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
                <Button>
                    Buy
                </Button>
                <Button variant="destructive"
                    onClick={() => handleRemoveProduct(product.id)}>
                    Delete
                </Button>
            </CardFooter>
        </Card>
    )
}
