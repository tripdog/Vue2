var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
            description: 'A pair of warm fuzzy socks.',
            image: './img/vmSocks-green-onWhite.jpg',
                inventory: 100,
                inStock: true,
                onSale: true,
                details: ["80% cotton", "20% Polyester", "Gender-neutral"],
                variants: [{
                    variantId: 2234,
                    variantColor: "green",
                        variantImage: "/img/vmSocks-green-onWhite.jpg"
                    },
                    {
                        variantId: 2235,
                        variantColor: "blue",
                            variantImage: "/img/vmSocks-blue-onWhite.jpg"
                    }
                ],
        sizes: ["small", "medium", "large"],
            cart: 0
    },
    methods: {
            addToCart() {
                this.cart += 1
            },
            updateProduct(variantImage) {
                this.image = variantImage
            }
    }
})