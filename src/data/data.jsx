const productos = [
    {
        id: 1,
        name: 'Samsung Galaxy S23 Ultra',
        img: 'https://http2.mlstatic.com/D_NQ_NP_879579-MLA73065587208_112023-O.webp',
        price: 1050000,
        stock: 5,
        category: 'Celulares',
        description: 'El Samsung Galaxy S23 Ultra es un teléfono inteligente Android de gama alta fabricado por Samsung Electronics como parte de la serie Samsung Galaxy S. Fue anunciado el 9 de febrero de 2023 y se lanzó el 2 de marzo de 2023. Es el sucesor del Samsung Galaxy S22 Ultra.'
    },
    {
        id: 2,
        name: 'Samsung Galaxy S24 Ultra',
        img: 'https://http2.mlstatic.com/D_Q_NP_906402-MLA78898729191_092024-O.webp',
        price: 2800000,
        stock: 9,
        category: 'Celulares',
        description: 'El Samsung Galaxy S24 Ultra es el modelo más avanzado de la serie S24, lanzado en enero de 2024. Destaca por su pantalla Dynamic AMOLED 2X de 6,8 pulgadas con resolución QHD+ y tasa de refresco de 120 Hz. Está construido con un marco de Titanio para mayor resistencia y un diseño más refinado.'
    },
    {
        id: 3,
        name: 'Samsung Galaxy S25 Ultra',
        price: 2850000,
        img: 'https://riiing.com.ar/wp-content/uploads/2025/02/1_Img-de-producto_PA3_Titaniumgray-2400x2400-1-1024x1024.jpg',
        stock: 10,
        category: 'Celulares',
        description: 'El Samsung Galaxy S25 Ultra es el último buque insignia de la compañía surcoreana, presentado oficialmente el 22 de enero de 2025. Este dispositivo destaca por su pantalla Dynamic AMOLED 2X de 6,9 pulgadas con resolución QHD+, tasa de refresco de hasta 120 Hz y un brillo máximo de 2.600 nits, protegida por Corning Gorilla Armor 2.'
    },
    {
        id: 4,
        name: 'Auriculares Apple AirPods Pro',
        img: 'https://ipoint.com.ar/25134-large_default/apple-airpods-pro-2da-generacion.jpg',
        price: 550000,
        stock: 30,
        category: 'Auriculares',
        description: 'Los Apple AirPods Pro son auriculares inalámbricos con cancelación activa de ruido, diseñados para ofrecer un sonido envolvente y una experiencia auditiva premium. Cuentan con modo de transparencia, ajuste cómodo gracias a sus puntas de silicona intercambiables y resistencia al agua y al sudor (IPX4).'
    },
    {
        id: 5,
        name: 'Iphone 13 Pro Max',
        img: 'https://m.media-amazon.com/images/I/61ERgud-SbL._AC_SL1500_.jpg',
        price: 3100000,
        stock: 6,
        category: 'Celulares',
        description: 'El iPhone 13 Pro Max es un smartphone de alta gama de Apple con una pantalla Super Retina XDR de 6.7 pulgadas y tecnología ProMotion de 120 Hz para una experiencia fluida. Cuenta con el potente chip A15 Bionic, un sistema de cámara triple de 12 MP con sensor LiDAR, modo cine y fotografía macro.'
    },
    {
        id: 6,
        name: 'Iphone 14 Pro Max',
        img: 'https://http2.mlstatic.com/D_NQ_NP_932301-MLA78023155064_082024-O.webp',
        price: 3700000,
        stock: 6,
        category: 'Celulares',
        description: 'El iPhone 14 Pro Max es un smartphone premium de Apple con una pantalla Super Retina XDR de 6.7 pulgadas y tecnología ProMotion de 120 Hz. Introduce la Dynamic Island, que reemplaza el notch con una experiencia interactiva. Incorpora el potente chip A16 Bionic, un sistema de cámara triple de 48 MP con mejoras en fotografía nocturna y modo cine en 4K.'
    },
    {
        id: 7,
        name: 'Iphone 16 Pro Max',
        img: 'https://http2.mlstatic.com/D_NQ_NP_893557-MLU79115488779_092024-O.webp',
        price: 3800000,
        stock: 2,
        category: 'Celulares',
        description: 'El iPhone 16 Pro Max es el modelo más avanzado de Apple hasta la fecha, destacando por sus innovaciones en diseño, rendimiento y funcionalidad. Cuenta con una pantalla Dynamic Island de 6.9 pulgadas, chip A18 Bionic, sistema de cámara cuádruple de 64 MP con mejoras en fotografía computacional y grabación de video en calidad cinematográfica.'
    },
    {
        id: 8,
        name: 'Motorola Edge 30 Pro',
        img: 'https://images.bidcom.com.ar/resize?src=https://static.bidcom.com.ar/publicacionesML/productos/CMED30PX/1000x1000-CMED30PV.jpg&h=400&q=100',
        price: 1200000,
        stock: 4,
        category: 'Celulares',
        description: 'El Motorola Edge 30 Pro es un smartphone de gama alta con una pantalla OLED de 6.7 pulgadas y tasa de refresco de 144 Hz, ofreciendo colores vibrantes y una experiencia fluida. Está impulsado por el potente procesador Snapdragon 8 Gen 1, acompañado de hasta 12 GB de RAM y 256 GB de almacenamiento.'
    },
    {
        id: 9,
        name: 'Motorola G24',
        img: 'https://cdnlaol.laanonimaonline.com/webapp_webp/images/productos/b/0000050000/50964.webp',
        price: 650000,
        stock: 12,
        category: 'Celulares',
        description: 'El Motorola Moto G24 es un smartphone de gama media que destaca por su equilibrio entre rendimiento y precio. Cuenta con una pantalla IPS LCD de 6.8 pulgadas, procesador Snapdragon 680, 4 GB de RAM y 128 GB de almacenamiento.'
    },
    {
        id: 10,
        name: 'POCO X3 Pro',
        img: 'https://m.media-amazon.com/images/I/61s+9tFv+OL._AC_SL1000_.jpg',
        price: 1500000,
        stock: 8,
        category: 'Celulares',
        description: 'El POCO X3 Pro es un smartphone de gama media-alta que destaca por su gran rendimiento y relación calidad-precio. Cuenta con una pantalla IPS LCD de 6.67 pulgadas con tasa de refresco de 120 Hz y HDR10, ofreciendo una experiencia fluida y vibrante.'
    },
    {
        id: 11,
        name: 'Redmi Note 12 Pro',
        img: 'https://cdn-xiaomi.waugi.com.ar/2749-thickbox_default/redmi-note-12pro-5g-.jpg',
        price: 990000,
        stock: 2,
        category: 'Celulares',
        description: 'El Redmi Note 12 Pro es un smartphone de gama media con características premium. Tiene una pantalla AMOLED de 6.67 pulgadas con resolución Full HD+ y una tasa de refresco de 120 Hz, ofreciendo colores vibrantes y una experiencia fluida.'
    },
    {
        id: 12,
        name: 'Samsung Galaxy Buds 3 Pro',
        img: 'https://images.samsung.com/is/image/samsung/p6pim/ar/sm-r630nzaaaro/gallery/ar-galaxy-buds3-pro-r630-sm-r630nzaaaro-544278493?$684_547_PNG$',
        price: 550000,
        stock: 20,
        category: 'Auriculares',
        description: 'Los Samsung Galaxy Buds 3 Pro (también conocidos como Galaxy Buds Pro) son unos auriculares inalámbricos de gama alta diseñados para ofrecer una experiencia de sonido premium y confort.'
    },
    {
        id: 13,
        name: 'Monitor Gamer Samsung 27"',
        img: 'https://images.fravega.com/f500/393cba5a66fe2d29273ed1e7244f3e60.jpg',
        price: 250000,
        stock: 10,
        category: 'Monitores',
        description: 'El monitor gamer Samsung 27" es una excelente opción para jugadores que buscan una experiencia inmersiva y fluida.'
    },
    {
        id: 14,
        name: 'Monitor Gamer LG UltraGear 24GS60F-B con pantalla de 24"',
        img: 'https://http2.mlstatic.com/D_NQ_NP_680013-MLU78590458677_082024-O.webp',
        price: 230000,
        stock: 1,
        category: 'Monitores',
        description: 'El monitor gamer LG UltraGear 24" es una opción potente para jugadores exigentes, con características avanzadas para una experiencia fluida y responsiva.'
    },
    {
        id: 15,
        name: 'Samsung Galaxy Odyssey Neo G9',
        img: 'https://media.es.wired.com/photos/63b59dd32984c2acd03054a8/16:9/w_1280,c_limit/Samsung-%20Odyssey-Neo-G9-Gaming-Monitor-G95NC.png',
        price: 2550000,
        stock: 2,
        category: 'Monitores',
        description: 'El Samsung Odyssey Neo G9 es un monitor gamer ultra premium diseñado para ofrecer una experiencia envolvente y de alto rendimiento.'
    },
    {
        id: 16,
        name: 'Monitor Curvo Gamer 27"',
        img: 'https://compucordoba.com.ar/img/Public/1078/64159-producto-monitor-curvo-27-gigabyte-2.jpg',
        price: 350000,
        stock: 9,
        category: 'Monitores',
        description: 'El monitor curvo gamer Gigabyte 27" es una excelente opción para jugadores que buscan una experiencia inmersiva y fluida.'
    },
    {
        id: 17,
        name: 'Monitor Gamer 24 Asus Tuf Gaming Full Hd 180hz',
        img: 'https://http2.mlstatic.com/D_NQ_NP_701727-MLA81358790559_122024-O.webp',
        price: 380000,
        stock: 6,
        category: 'Monitores',
        description: 'El monitor ASUS TUF Gaming 24" (VG249QM o VG248QG) es una opción ideal para jugadores que buscan una experiencia fluida y rápida.'
    },
    {
        id: 18,
        name: 'Cargador Samsung 45w (sin cable)',
        img: 'https://images.samsung.com/is/image/samsung/p6pim/ar/ep-t4510xbsgar/gallery/ar-45w-power-adapter-ep-t4510-ep-t4510xbsgar-531990642?$684_547_PNG$',
        price: 80000,
        stock: 10,
        category: 'Cargadores',
        description: 'El cargador Samsung de 45W es un adaptador de carga rápida compatible con varios dispositivos Samsung, incluyendo smartphones, tablets y algunos laptops.'
    },
    {
        id: 19,
        name: 'Cargador Samsung 25w (sin cable)',
        img: 'https://tienda.personal.com.ar/images/720/webp/Cargador_Samsung_Carga_Rapida_25_W_Cable_0fa8a97e01.png',
        price: 50000,
        stock: 20,
        category: 'Cargadores',
        description: 'El cargador Samsung de 25W es un adaptador de carga rápida ideal para una amplia gama de dispositivos Galaxy.'
    },
    {
        id: 20,
        name: 'Cargador 65w Soul',
        img: 'https://acdn.mitiendanube.com/stores/001/128/573/products/7bea643c-fd5c-4f17-a8cf-f2ac77e79b3c-00a1eb8bfdb28d73b017304762482452-1024-1024.jpg',
        price: 120000,
        stock: 5,
        category: 'Cargadores',
        description: 'El cargador Soul de 65W es un adaptador de carga rápida diseñado para proporcionar una carga eficiente y segura a una variedad de dispositivos.'
    }
    
]

export default productos