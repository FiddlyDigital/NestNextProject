import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { ProductForm } from './product-form';

function NewProductsPage() {
    return (
        <div className="h-screen flex justify-center items-center">
            <Card>
                <CardHeader>
                    <CardTitle>Create Product</CardTitle>
                </CardHeader>
                <CardContent>
                    <ProductForm></ProductForm>
                </CardContent>
            </Card>
        </div>
    )
}

export default NewProductsPage;