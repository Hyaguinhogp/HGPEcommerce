import { Category, DefaultProductCardContainer, DefaultProductCardContent } from "./styles";

const DefaultProductCard = () => {
    return (
        <DefaultProductCardContainer>
            <DefaultProductCardContent>
                <figure className="product_image_container">
                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                </figure>

                <div className="product_categories_container">
                    <Category>Categoria 1</Category>
                    <Category>Categoria 2</Category>
                </div>

                <h3>Product Name</h3>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ut rhoncus ante in leo pellentesque pretium sit amet se...
                </p>

                <div className="product_price_container">
                    <h2><span>R$</span>9.999,00</h2>
                </div>
            </DefaultProductCardContent>
        </DefaultProductCardContainer>
    )
}

export default DefaultProductCard;
