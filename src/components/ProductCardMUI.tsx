import React from "react";
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    CardActions,
} from "@mui/material";

type ProductCardProps = {
    title: string;
    price: number;
    imageUrl: string;
    description?: string;
};

export const ProductCardMUI: React.FC<ProductCardProps> = ({
                                                               title,
                                                               price,
                                                               imageUrl,
                                                               description,
                                                           }) => {
    return (
        <Card sx={{ width: 260, borderRadius: 2, boxShadow: 3 }}>
            <CardMedia
                component="img"
                height="160"
                image={imageUrl}
                alt={title}
            />
            <CardContent>
                <Typography variant="h6" component="div" fontWeight={600}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="h6" color="primary" mt={1}>
                    {price} ₪
                </Typography>
            </CardContent>
            <CardActions>
                <Button fullWidth variant="contained">
                    В корзину
                </Button>
            </CardActions>
        </Card>
    );
};
