import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { ProductForm } from './product-form';
import { getProduct } from "../products.api";

interface Props {
    params: {
        id: string;
    };
}

async function NewProductsPage({params} : Props) {
    const { id } = await params;
    const product = await getProduct(id);

    return (
        <div className="h-screen flex justify-center items-center">
            <Card>
                <CardHeader>
                    <CardTitle>{ id ? "Edit" : "Create" } Product</CardTitle>
                </CardHeader>
                <CardContent>
                    <ProductForm product={product}/>
                </CardContent>
            </Card>
        </div>
    )
}

export default NewProductsPage;