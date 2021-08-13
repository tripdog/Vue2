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
                        variantColor: "green"
                    },
                    {
                        variantId: 2235,
                        variantColor: "blue"
                    }
                ],
                sizes: ["small", "medium", "large"]
    }
})