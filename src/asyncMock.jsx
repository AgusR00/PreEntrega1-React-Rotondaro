const products = [
    {
        id: '1',
        name: 'Samsung Galaxy S23 Ultra',
        price: 1050000,
        img: 'https://http2.mlstatic.com/D_NQ_NP_879579-MLA73065587208_112023-O.webp',
        stock: 5,
        category: 'Celulares',
        description: 'El Samsung Galaxy S23 Ultra es un teléfono inteligente Android de gama alta fabricado por Samsung Electronics como parte de la serie Samsung Galaxy S. Fue anunciado el 9 de febrero de 2023 y se lanzó el 2 de marzo de 2023. Es el sucesor del Samsung Galaxy S22 Ultra.'
    },
    {
        id: '2',
        name: 'Samsung Galaxy S24 Ultra',
        price: 2800000,
        img: 'https://http2.mlstatic.com/D_Q_NP_906402-MLA78898729191_092024-O.webp',
        stock: 9,
        category: 'Celulares',
        description: 'El Samsung Galaxy S24 Ultra es el modelo más avanzado de la serie S24, lanzado en enero de 2024. Destaca por su pantalla Dynamic AMOLED 2X de 6,8 pulgadas con resolución QHD+ y tasa de refresco de 120 Hz. Está construido con un marco de Titanio para mayor resistencia y un diseño más refinado.'
    },
    {
        id: '3',
        name: 'Samsung Galaxy S25 Ultra',
        price: 2850000,
        img: 'https://riiing.com.ar/wp-content/uploads/2025/02/1_Img-de-producto_PA3_Titaniumgray-2400x2400-1-1024x1024.jpg',
        stock: 10,
        category: 'Celulares',
        description: 'El Samsung Galaxy S25 Ultra es el último buque insignia de la compañía surcoreana, presentado oficialmente el 22 de enero de 2025. Este dispositivo destaca por su pantalla Dynamic AMOLED 2X de 6,9 pulgadas con resolución QHD+, tasa de refresco de hasta 120 Hz y un brillo máximo de 2.600 nits, protegida por Corning Gorilla Armor 2. Además, es un 15% más delgado y ligero que su predecesor.'
    },
    {
        id: '4',
        name: 'Auriculares Apple AirPods Pro',
        img: 'https://ipoint.com.ar/25134-large_default/apple-airpods-pro-2da-generacion.jpg',
        price: 550000,
        stock: 30,
        category: 'Auriculares',
        description: 'Los Apple AirPods Pro son auriculares inalámbricos con cancelación activa de ruido, diseñados para ofrecer un sonido envolvente y una experiencia auditiva premium. Cuentan con modo de transparencia, ajuste cómodo gracias a sus puntas de silicona intercambiables y resistencia al agua y al sudor (IPX4).'
    },
    {
        id: '5',
        name: 'Iphone 13 Pro Max',
        img: 'https://m.media-amazon.com/images/I/61ERgud-SbL._AC_SL1500_.jpg',
        price: 3100000,
        stock: 6,
        category: 'Celulares',
        description: 'El iPhone 13 Pro Max es un smartphone de alta gama de Apple con una pantalla Super Retina XDR de 6.7 pulgadas y tecnología ProMotion de 120 Hz para una experiencia fluida. Cuenta con el potente chip A15 Bionic, un sistema de cámara triple de 12 MP con sensor LiDAR, modo cine y fotografía macro.'
    },
    {
        id: '6',
        name: 'Iphone 14 Pro Max',
        img: 'https://http2.mlstatic.com/D_NQ_NP_932301-MLA78023155064_082024-O.webp',
        price: 3700000,
        stock: 6,
        category: 'Celulares',
        description: 'El iPhone 14 Pro Max es un smartphone premium de Apple con una pantalla Super Retina XDR de 6.7 pulgadas y tecnología ProMotion de 120 Hz. Introduce la Dynamic Island, que reemplaza el notch con una experiencia interactiva. Incorpora el potente chip A16 Bionic, un sistema de cámara triple de 48 MP con mejoras en fotografía nocturna y modo cine en 4K.'
    },
    {
        id: '7',
        name: 'Iphone 16 Pro Max',
        img: 'https://http2.mlstatic.com/D_NQ_NP_893557-MLU79115488779_092024-O.webp',
        price: 3800000,
        stock: 2,
        category: 'Celulares',
        description: 'El iPhone 16 Pro Max es el modelo más avanzado de Apple hasta la fecha, destacando por sus innovaciones en diseño, rendimiento y funcionalidad. Cuenta con una pantalla Dynamic Island de 6.9 pulgadas, chip A18 Bionic, sistema de cámara cuádruple de 64 MP con mejoras en fotografía computacional y grabación de video en calidad cinematográfica. Además, introduce la tecnología de carga solar y un nuevo sistema de reconocimiento facial 3D.'
    },
    {
        id: '8',
        name: 'Motorola Edge 30 Pro',
        img: 'https://http2.mlstatic.com/D_NQ_NP_789167-MLU77951157708_082024-O.webp',
        price: 1200000,
        stock: 4,
        category: 'Celulares',
        description: 'El Motorola Edge 30 Pro es un smartphone de gama alta con una pantalla OLED de 6.7 pulgadas y tasa de refresco de 144 Hz, ofreciendo colores vibrantes y una experiencia fluida. Está impulsado por el potente procesador Snapdragon 8 Gen 1, acompañado de hasta 12 GB de RAM y 256 GB de almacenamiento.'
    },
    {
        id: '9',
        name: 'Motorola G24',
        img: 'https://acdn.mitiendanube.com/stores/001/643/020/products/motorola-g24-gris-219f03baeb50c295b817207360317654-1024-1024.png',
        price: 650000,
        stock: 12,
        category: 'Celulares',
        description: 'El Motorola Moto G24 es un smartphone de gama media que destaca por su equilibrio entre rendimiento y precio. Cuenta con una pantalla IPS LCD de 6.8 pulgadas, procesador Snapdragon 680, 4 GB de RAM y 128 GB de almacenamiento. Además, incorpora una cámara triple de 50 MP y una batería de 5000 mAh con carga rápida de 30W.'
    },
    {
        id: '10',
        name: 'POCO X3 Pro',
        img: 'https://m.media-amazon.com/images/I/61s+9tFv+OL._AC_SL1000_.jpg',
        price: 1500000,
        stock: 8,
        category: 'Celulares',
        description: 'El POCO X3 Pro es un smartphone de gama media-alta que destaca por su gran rendimiento y relación calidad-precio. Cuenta con una pantalla IPS LCD de 6.67 pulgadas con tasa de refresco de 120 Hz y HDR10, ofreciendo una experiencia fluida y vibrante.'
    },
    {
        id: '11',
        name: 'Redmi Note 12 Pro',
        img: 'https://cdn-xiaomi.waugi.com.ar/2749-thickbox_default/redmi-note-12pro-5g-.jpg',
        price: 990000,
        stock: 2,
        category: 'Celulares',
        description: 'El Redmi Note 12 Pro es un smartphone de gama media con características premium. Tiene una pantalla AMOLED de 6.67 pulgadas con resolución Full HD+ y una tasa de refresco de 120 Hz, ofreciendo colores vibrantes y una experiencia fluida.'
    },
    {
        id: '12',
        name: 'Samsung Galaxy Buds 3 pro',
        img: 'https://images.samsung.com/is/image/samsung/p6pim/ar/sm-r630nzaaaro/gallery/ar-galaxy-buds3-pro-r630-sm-r630nzaaaro-544278493?$684_547_PNG$',
        price: 550000,
        stock: 20,
        category: 'Auriculares',
        description: 'Los Samsung Galaxy Buds 3 Pro (también conocidos como Galaxy Buds Pro) son unos auriculares inalámbricos de gama alta diseñados para ofrecer una experiencia de sonido premium y confort.'
    }
]

const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId));
        }, 500);
    });
}

export { getProducts };
