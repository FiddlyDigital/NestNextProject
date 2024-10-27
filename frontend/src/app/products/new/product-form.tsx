"use client";

import { useForm } from 'react-hook-form';
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { createProduct } from '../products.api';

export function ProductForm() {
    const { register, handleSubmit } = useForm();
    const router = useRouter();

    const onFormSubmit = handleSubmit(async data => {
        await createProduct({
            ...data,
            price: parseFloat(data.price)
        });

        router.push('/');
        router.refresh();
    });

    return (
        <form onSubmit={onFormSubmit}>
            <Label>Product Name</Label>
            <Input
                {...register('name')}
            />

            <Label>Description</Label>
            <Input
                {...register('description')}
            />

            <Label>Price</Label>
            <Input
                {...register('price')}
            />

            <Label>Image</Label>
            <Input
                {...register('image')}
            />

            <Button>
                Create Product
            </Button>
        </form>
    )
}
