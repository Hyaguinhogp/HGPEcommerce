import { useEffect, useRef, useState } from "react";
import DefaultProductCard from "../DefaultProductCard";
import { ProductCarrouselContainer, ProductCarrouselContent } from "./styles";

const ProductCarrousel = () => {

    const ref = useRef<HTMLDivElement | null>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const { scrollWidth, offsetWidth } = ref.current!;
        setWidth(scrollWidth - offsetWidth);
    }, [])

    return (
        <ProductCarrouselContainer
            ref={ref}
        >
            <ProductCarrouselContent
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
            >
                <DefaultProductCard />
                <DefaultProductCard />
                <DefaultProductCard />
                <DefaultProductCard />
                <DefaultProductCard />
            </ProductCarrouselContent>
        </ProductCarrouselContainer>
    )
}

export default ProductCarrousel;
