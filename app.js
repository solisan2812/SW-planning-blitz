const products = [
  {code:'HV8150-018',name:'Nike Vomero Plus',detail:'Tenis de running · Antracita / azul claro / negro',group:'calzado'},
  {code:'HV9272-005',name:'Nike Winflo 12',detail:'Tenis de running · Negro / rojo / gris oscuro',group:'calzado'},
  {code:'FV5285-302',name:'Nike Promina',detail:'Tenis de caminata · Gris verdoso / negro / gris',group:'calzado'},
  {code:'HJ9198-002',name:'Nike Revolution 8',detail:'Tenis de running · Negro / antracita',group:'calzado'},
  {code:'HJ9198-200',name:'Nike Revolution 8',detail:'Tenis de running · Caqui / blanco vela / marrón oscuro',group:'calzado'},
  {code:'IF9487-010',name:'Nike Challenger',detail:'Short de running de 18 cm · Negro / blanco',group:'textil'},
  {code:'HJ4176-010',name:'Nike Challenger Breathe',detail:'Short de running 2 en 1 de 18 cm · Negro',group:'textil'},
  {code:'IF2086-100',name:'Nike Miler Dri-FIT',detail:'Camiseta de manga larga · Blanco',group:'textil'},
  {code:'IF2086-010',name:'Nike Miler Dri-FIT',detail:'Camiseta de manga larga · Negro',group:'textil'},
  {code:'HV5203-100',name:'Nike Stride Dri-FIT ADV',detail:'Camiseta de manga corta · Blanco',group:'textil'},
  {code:'HV5203-010',name:'Nike Stride Dri-FIT ADV',detail:'Camiseta de manga corta · Negro',group:'textil'},
  {code:'HV5210-010',name:'Nike Stride Dri-FIT ADV',detail:'Camiseta de tirantes · Negro',group:'textil'},
  {code:'HJ3377-010',name:'Nike AeroSwift Dri-FIT ADV',detail:'Camiseta de manga corta para competición · Negro / blanco',group:'textil'},
  {code:'FB7919-010',name:'Nike Pro Dri-FIT',detail:'Camiseta ajustada de manga larga · Negro / blanco',group:'textil'},
  {code:'BQ1260-010',name:'Nike Sportswear Club',detail:'Camiseta sin mangas de algodón · Negro / blanco',group:'textil'},
  {code:'DX5025-100',name:'Nike Sportswear Everyday Essential',detail:'Medias de caña media, paquete de 3 pares · Blanco / negro · Sin género específico',group:'medias'}
];

const pieces = [
  {id:1,week:1,title:'La salida.',type:'RUNNING / EDITORIAL',description:'La preparación, el primer paso y un look de running con acento azul en el exterior de Blitz.',main:['HV8150-018','HV5203-010'],extra:['HJ4176-010','DX5025-100'],shots:['Atarse los tenis junto al muro exterior de Blitz','Silueta completa con espacio negativo','Perfil del zapato puesto sobre el concreto','Zancada con movimiento real en el parqueo','Close-up del short y cierre editorial'],ref:1,images:[1,2,5],copy:'Un look para empezar la sesión: negro, gris y un acento azul en los pies.'},
  {id:2,week:1,title:'Blanco y negro en fachada.',type:'LOOK / MONOCROMO',description:'Camiseta blanca y Revolution negra frente a la fachada y el cordón de concreto de Blitz.',main:['HJ9198-002','IF2086-100'],extra:['IF9487-010','DX5025-100'],shots:['Look frontal y posterior','Zapato sobre el concreto exterior','Detalle de manga','Cintura y largo del short','Plano caminando por la acera exterior'],ref:7,images:[1,3,6],copy:'Blanco y negro, sin complicaciones. Un look de entrenamiento para repetir.'},
  {id:3,week:1,title:'Cinco pares, cinco momentos.',type:'PRODUCTO / COMPARATIVO',description:'Un panorama visual de los cinco modelos de calzado incluidos.',main:['HV8150-018','HV9272-005','FV5285-302','HJ9198-002','HJ9198-200'],extra:[],shots:['Portada con los cinco pares','Cada modelo de perfil en el mismo fondo','Cada modelo puesto con encuadre equivalente','Cierre con la colección completa'],ref:4,images:[1,2,6],copy:'Cinco siluetas, cinco formas de moverse. ¿Con cuál saldrías hoy?'},
  {id:4,week:2,title:'Caminar también cuenta.',type:'WALKING / EXTERIOR',description:'La Promina en un recorrido por la acera y el parqueo de Blitz, con el look completo.',main:['FV5285-302','BQ1260-010'],extra:['IF9487-010','DX5025-100'],shots:['Caminata por la acera de Blitz','Plano general de la fachada','Lateral del zapato en uso','Detalle de las medias','Retrato relajado'],ref:9,images:[1,4,7],copy:'Hay días para correr y días para moverse a otro ritmo.'},
  {id:5,week:2,title:'Acento rojo.',type:'RUNNING / COLOR',description:'La Winflo 12 aporta el único golpe de color en un conjunto oscuro.',main:['HV9272-005','HJ3377-010'],extra:['HJ4176-010'],shots:['Fondo gris o negro que deje visible el rojo','Zapato en movimiento','Detalle de color','Retrato previo a la carrera','Look completo'],ref:5,images:[1,3,4],copy:'Un detalle rojo cambia todo el conjunto.'},
  {id:6,week:2,title:'Capas para salir.',type:'TEXTIL / CAPAS',description:'Dos formas de construir un conjunto de entrenamiento con prendas negras junto a los pilares exteriores.',main:['FB7919-010','HV5210-010'],extra:['HV8150-018','HJ4176-010','DX5025-100'],shots:['Una toma con cada capa','Cambio de prenda en secuencia','Textura y ajuste en detalle','Look completo con calzado','Cierre en movimiento'],ref:5,images:[1,4,8],copy:'Antes de salir, cada capa tiene su lugar.'},
  {id:7,week:3,title:'Una silueta, dos colores.',type:'CALZADO / COLORWAYS',description:'Revolution 8 negra y caqui, fotografiadas con la misma composición.',main:['HJ9198-002','HJ9198-200'],extra:['IF2086-010','IF2086-100'],shots:['Mismo encuadre para cada color','Misma luz y pose en ambas versiones','Zapatos de perfil','Dos looks de cuerpo completo','Comparativa final lado a lado'],ref:4,images:[1,2,6],copy:'Misma silueta. Dos maneras de llevarla.'},
  {id:8,week:3,title:'Blanco y negro.',type:'TEXTIL / COMPARATIVO',description:'La camiseta Stride de manga corta en dos colores, con el mismo encuadre frente al muro exterior.',main:['HV5203-100','HV5203-010'],extra:['IF9487-010','HV9272-005','DX5025-100'],shots:['Dos looks con idéntica composición','Detalle de manga y espalda','Textura de cada color','Foto conjunta de cierre'],ref:7,images:[1,3,5],copy:'Una camiseta, dos formas de resolver el look.'},
  {id:9,week:3,title:'Ritual antes de correr.',type:'HISTORIA / RUNNING',description:'Del equipo preparado al primer paso frente a la fachada de Blitz.',main:['HV8150-018','HV5210-010'],extra:['HJ4176-010','DX5025-100'],shots:['Prendas preparadas','Ponerse las medias','Ajustar cordones','Caminar por el parqueo hacia la fachada','Primer paso de la sesión'],ref:1,images:[1,5,9],copy:'La sesión empieza antes del primer kilómetro.'},
  {id:10,week:4,title:'Tres formas de vestir el entrenamiento.',type:'LOOKS / COMPARATIVO',description:'Tres camisetas, tres estilos de entrenamiento y una misma línea visual.',main:['HJ3377-010','HV5203-100','IF2086-010'],extra:['HV9272-005','IF9487-010'],shots:['Portada con los tres cambios','Dos imágenes por look: cuerpo completo y detalle','Zapato en uso','Cierre con los tres looks'],ref:5,images:[1,3,4],copy:'Tres looks de entrenamiento. ¿Cuál se parece más al tuyo?'},
  {id:11,week:4,title:'El caqui en Blitz.',type:'COLOR / EXTERIOR',description:'El Revolution 8 caqui destaca frente al metal oscuro y los muros de concreto exteriores.',main:['HJ9198-200','IF2086-010'],extra:['BQ1260-010','DX5025-100'],shots:['Muro oscuro con acento caqui','Zapato sobre el concreto exterior','Retrato lateral','Detalle del calzado puesto','Cierre con look completo'],ref:7,images:[1,3,6],copy:'Un color distinto para salir de la rutina.'},
  {id:12,week:4,title:'Los detalles hacen el conjunto.',type:'DETALLE / CIERRE',description:'Texturas, medias y terminaciones que completan una sesión editorial.',main:['DX5025-100','HJ4176-010'],extra:['FV5285-302','HV5203-010'],shots:['Macro de textura','Medias con calzado','Cintura y dobladillo','Plano de las prendas juntas','Look completo final'],ref:12,images:[1,3,8],copy:'Lo que completa el look también merece un primer plano.'},
  {id:13,week:5,title:'El calzado, protagonista.',type:'PRODUCTO / HERO',description:'Tres modelos fotografiados como protagonistas: par escultórico, vista cenital y tenis en mano.',main:['HV8150-018','HV9272-005','FV5285-302'],extra:[],shots:['Vomero Plus: par escultórico sobre cordón de concreto','Winflo 12: par visto desde arriba','Promina: par sostenido con la mano','Detalle de material y suela de cada modelo'],ref:4,images:[3,1,9],referenceShots:[{post:4,photo:3},{post:10,photo:9},{post:20,photo:8}],copy:'Cada par tiene una historia en sus detalles.'},
  {id:14,week:5,title:'Revolution 8, dos miradas.',type:'PRODUCTO / COLORWAYS',description:'El negro y el caqui en tomas de producto, más una composición final con tres modelos.',main:['HJ9198-002','HJ9198-200'],extra:['HV8150-018','HV9272-005','FV5285-302'],shots:['Revolution negra: par en piso oscuro','Revolution caqui: par junto al muro exterior','Colección: perfiles de tres modelos','Close-up de tejido, talón y mediasuela'],ref:6,images:[1,3,6],referenceShots:[{post:2,photo:3},{post:6,photo:6},{post:6,photo:3}],copy:'La diferencia está en cómo se ve cada silueta de cerca.'}
];

const references = [
  {post:1,title:'Running editorial',lesson:'Espacio negativo, look completo y movimiento',image:1,url:'https://www.instagram.com/tonyblee/p/Deb7cK_k-d7/'},
  {post:4,title:'Producto en uso',lesson:'Alternar macro, cuerpo completo y escaleras',image:6,url:'https://www.instagram.com/tonyblee/p/Dd34RdckwKj/'},
  {post:5,title:'Retrato deportivo',lesson:'Silueta pequeña y fondo arquitectónico',image:1,url:'https://www.instagram.com/tonyblee/p/Ddl2zFLk6-s/'},
  {post:7,title:'Estilo urbano',lesson:'Capas oscuras y encuadre limpio',image:1,url:'https://www.instagram.com/tonyblee/p/DdJh9jDk0ZT/'},
  {post:12,title:'Macro de producto',lesson:'Textura y material como protagonista',image:1,url:'https://www.instagram.com/tonyblee/p/DbYOvsMk-H2/'}
];

const generatedByPiece = {
  1: [
    {file:'piece_01_01.jpg',label:'01 · Look completo · HV8150-018'},
    {file:'piece_01_02.jpg',label:'02 · Detalle de calzado · HV8150-018'},
    {file:'piece_01_03.jpg',label:'03 · Movimiento · HV8150-018'},
    {file:'exterior_b1_vomero_motion.jpg',label:'Exterior B1 · carrera frente a Blitz · HV8150-018',code:'HV8150-018',ref:{post:1,photo:1},type:'movimiento',exterior:true,exteriorBlock:1},
    {file:'exterior_b2_vomero_worn_detail.jpg',label:'Exterior B2 · Vomero puesto en muro · HV8150-018',code:'HV8150-018',ref:{post:10,photo:8},type:'detalle',exterior:true,exteriorBlock:2}
  ],
  2: [
    {file:'piece_02_01.jpg',label:'01 · Look completo · HJ9198-002'},
    {file:'piece_02_02.jpg',label:'02 · Camiseta Miler · IF2086-100'},
    {file:'piece_02_03.jpg',label:'03 · Calzado en parqueo · HJ9198-002'},
    {file:'exterior_b3_revolution_black_outfit.jpg',label:'Exterior B3 · look blanco y negro · HJ9198-002',code:'HJ9198-002',ref:{post:8,photo:3},type:'modelo',exterior:true,exteriorBlock:3}
  ],
  3: [
    {file:'piece_03_01.jpg',label:'01 · Tres modelos en parqueo'},
    {file:'piece_03_02.jpg',label:'02 · Revolution 8 · dos colores'},
    {file:'piece_03_03.jpg',label:'03 · Los cinco pares'},
    {file:'exterior_b5_collection.jpg',label:'Exterior B5 · tres modelos en concreto',codes:['HV9272-005','FV5285-302','HJ9198-200'],ref:{post:6,photo:3},type:'comparativa',exterior:true,exteriorBlock:5}
  ],
  4: [
    {file:'piece_04_01.jpg',label:'01 · Caminata · FV5285-302'},
    {file:'piece_04_02.jpg',label:'02 · Look junto al pilar · BQ1260-010'},
    {file:'piece_04_03.jpg',label:'03 · Promina en movimiento · FV5285-302'},
    {file:'exterior_b2_promina_hand.jpg',label:'Exterior B2 · Promina en mano · FV5285-302',code:'FV5285-302',ref:{post:20,photo:8},type:'mano',exterior:true,exteriorBlock:2}
  ],
  5: [
    {file:'piece_05_01.jpg',label:'01 · Parqueo de Blitz · HV9272-005'},
    {file:'piece_05_02.jpg',label:'02 · Zancada · HV9272-005'},
    {file:'piece_05_03.jpg',label:'03 · Look completo · HJ3377-010'},
    {file:'exterior_b1_winflo_hand.jpg',label:'Exterior B1 · Winflo 12 en mano · HV9272-005',code:'HV9272-005',ref:{post:4,photo:1},type:'mano',exterior:true,exteriorBlock:1},
    {file:'exterior_b2_winflo_outfit.jpg',label:'Exterior B2 · look completo Winflo · HV9272-005',code:'HV9272-005',ref:{post:5,photo:1},type:'modelo',exterior:true,exteriorBlock:2}
  ],
  6: [
    {file:'piece_06_01.jpg',label:'01 · Nike Pro manga larga · FB7919-010'},
    {file:'piece_06_02.jpg',label:'02 · Stride sin mangas · HV5210-010'},
    {file:'piece_06_03.jpg',label:'03 · Cambio de capa · HV8150-018'},
    {file:'exterior_b4_layers.jpg',label:'Exterior B4 · Nike Pro y Vomero · HV8150-018',code:'HV8150-018',ref:{post:5,photo:1},type:'modelo',exterior:true,exteriorBlock:4}
  ],
  7: [
    {file:'piece_07_01.jpg',label:'01 · Revolution 8 negro · HJ9198-002'},
    {file:'piece_07_02.jpg',label:'02 · Revolution 8 caqui · HJ9198-200'},
    {file:'piece_07_03.jpg',label:'03 · Dos colores en zona de pesas'},
    {file:'exterior_b3_revolution_colorways.jpg',label:'Exterior B3 · Revolution 8 dos colores · HJ9198-002 / HJ9198-200',code:'HJ9198-002',codes:['HJ9198-002','HJ9198-200'],ref:{post:6,photo:6},type:'comparativa',exterior:true,exteriorBlock:3}
  ],
  8: [
    {file:'piece_08_01.jpg',label:'01 · Stride blanco · HV5203-100'},
    {file:'piece_08_02.jpg',label:'02 · Stride negro · HV5203-010'},
    {file:'piece_08_03.jpg',label:'03 · Dos looks en sala de espejos'},
    {file:'exterior_b4_stride.jpg',label:'Exterior B4 · Stride blanca y Winflo · HV9272-005',code:'HV9272-005',ref:{post:1,photo:1},type:'modelo',exterior:true,exteriorBlock:4}
  ],
  9: [
    {file:'piece_09_01.jpg',label:'01 · Preparación junto a recepción'},
    {file:'piece_09_02.jpg',label:'02 · Cordones Vomero Plus · HV8150-018'},
    {file:'piece_09_03.jpg',label:'03 · Primer paso en cardio'},
    {file:'exterior_b3_vomero_ritual.jpg',label:'Exterior B3 · ritual con Vomero en mano · HV8150-018',code:'HV8150-018',ref:{post:1,photo:8},type:'mano',exterior:true,exteriorBlock:3}
  ],
  10: [
    {file:'piece_10_01.jpg',label:'01 · AeroSwift y Winflo · fuerza',code:'HV9272-005'},
    {file:'piece_10_02.jpg',label:'02 · Stride y Winflo · espejos',code:'HV9272-005'},
    {file:'piece_10_03.jpg',label:'03 · Miler y Winflo · pesas',code:'HV9272-005'},
    {file:'exterior_b4_look.jpg',label:'Exterior B4 · AeroSwift y Winflo · HV9272-005',code:'HV9272-005',ref:{post:5,photo:7},type:'modelo',exterior:true,exteriorBlock:4}
  ],
  11: [
    {file:'piece_11_01.jpg',label:'01 · Revolution caqui · muro de fuerza',code:'HJ9198-200'},
    {file:'piece_11_02.jpg',label:'02 · Revolution caqui · detalle en espejos',code:'HJ9198-200'},
    {file:'piece_11_03.jpg',label:'03 · Revolution caqui · look en pesas',code:'HJ9198-200'},
    {file:'exterior_b1_revolution_khaki_stretch.jpg',label:'Exterior B1 · estiramiento en fachada · HJ9198-200',code:'HJ9198-200',ref:{post:1,photo:1},type:'modelo',exterior:true,exteriorBlock:1}
  ],
  12: [
    {file:'piece_12_01.jpg',label:'01 · Promina y medias · detalle',code:'FV5285-302'},
    {file:'piece_12_02.jpg',label:'02 · Challenger y Stride · textura'},
    {file:'piece_12_03.jpg',label:'03 · Look completo con Promina · cardio',code:'FV5285-302'},
    {file:'exterior_b5_detail.jpg',label:'Exterior B5 · Promina y medias · FV5285-302',code:'FV5285-302',ref:{post:5,photo:5},type:'detalle',exterior:true,exteriorBlock:5}
  ],
  13: [
    {file:'piece_13_01.jpg',label:'01 · Vomero Plus · par escultórico'},
    {file:'piece_13_02.jpg',label:'02 · Winflo 12 · vista cenital'},
    {file:'piece_13_03.jpg',label:'03 · Promina · tenis en mano'},
    {file:'exterior_b5_hero.jpg',label:'Exterior B5 · Vomero escultórico · HV8150-018',code:'HV8150-018',ref:{post:4,photo:3},type:'producto',exterior:true,exteriorBlock:5}
  ],
  14: [
    {file:'piece_14_01.jpg',label:'01 · Revolution 8 negra · par en piso'},
    {file:'piece_14_02.jpg',label:'02 · Revolution 8 caqui · vista posterior'},
    {file:'piece_14_03.jpg',label:'03 · Tres modelos · perfiles'},
    {file:'exterior_b1_revolution_black_product.jpg',label:'Exterior B1 · par negro sobre concreto · HJ9198-002',code:'HJ9198-002',ref:{post:4,photo:3},type:'producto',exterior:true,exteriorBlock:1}
  ]
};

const blitzLocationLibrary = {
  1:{src:'./blitz_locations__blitz_01.jpg',label:'Blitz · recepción'},
  2:{src:'./blitz_locations__blitz_02.jpg',label:'Blitz · pesas y espejos'},
  3:{src:'./blitz_locations__blitz_03.jpg',label:'Blitz · caminadoras'},
  4:{src:'./blitz_locations__blitz_04.jpg',label:'Blitz · muro de marca'},
  5:{src:'./blitz_locations__blitz_05.jpg',label:'Blitz · cardio y pasillo'},
  6:{src:'./blitz_locations__blitz_06.jpg',label:'Blitz · fuerza'},
  7:{src:'./blitz_locations__blitz_07.jpg',label:'Blitz · sala de espejos'},
  parking:{src:'./blitz-parking-reference.jpg',label:'Blitz · parqueo exterior'}
};
const blitzLocationsByPiece = {
  1:['parking',5,1],2:['parking',2,4],3:['parking',4,7],4:['parking',5,3],
  5:['parking',4,1],6:['parking',5,6],7:['parking',4,2],8:['parking',7,2],
  9:['parking',1,3],10:['parking',6,7],11:['parking',6,7],12:['parking',2,1],
  13:['parking',4,2],14:['parking',6,7]
};

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const imagePath = (post,photo) => `./fotos__post_${String(post).padStart(2,'0')}__foto_${String(photo).padStart(2,'0')}.jpg`;
const product = code => products.find(item => item.code === code);
const state = {view:'planning',week:'all',group:'all',planningQuery:'',catalogQuery:'',list:false};
const statuses = ['Pendiente','En producción','Listo'];
const savedStatus = (()=>{try{return JSON.parse(localStorage.getItem('nike-planning-status')||'{}')}catch{return {}}})();
function statusOf(id){return savedStatus[id]||'Pendiente'}
function updateStatus(id,value){savedStatus[id]=value;localStorage.setItem('nike-planning-status',JSON.stringify(savedStatus));renderPlanning()}
function cycleStatus(id){const current=statusOf(id);updateStatus(id,statuses[(statuses.indexOf(current)+1)%statuses.length])}
function chip(code){return `<span class="chip">${code}</span>`}

function renderPlanning(){
  const query=state.planningQuery.trim().toLowerCase();
  const shown=pieces.filter(piece=>(state.week==='all'||String(piece.week)===state.week)&&(!query||`${piece.title} ${piece.type} ${piece.description} ${[...piece.main,...piece.extra].join(' ')} ${[...piece.main,...piece.extra].map(c=>product(c)?.name).join(' ')}`.toLowerCase().includes(query)));
  $('#planning-grid').classList.toggle('list',state.list);
  $('#planning-grid').innerHTML=shown.map(piece=>`<article class="plan-card"><div class="plan-card-image" data-open="${piece.id}" role="button" tabindex="0" aria-label="Abrir ${piece.title}"><img loading="lazy" src="${imagePath(piece.ref,piece.images[0])}" alt="Referencia visual para ${piece.title}"><span class="card-number">${String(piece.id).padStart(2,'0')}</span><span class="card-week">SEMANA ${String(piece.week).padStart(2,'0')}</span><span class="card-ref">REF · POST ${String(piece.ref).padStart(2,'0')}</span></div><div class="plan-card-body"><div class="card-type"><span>${piece.type}</span><span>6 FOTOS</span></div><h3>${piece.title}</h3><p class="card-description">${piece.description}</p><div class="chips">${piece.main.map(chip).join('')}</div><div class="card-bottom"><button class="status-select" data-status="${piece.id}" aria-label="Cambiar estado de ${piece.title}">● ${statusOf(piece.id)} ⌄</button><button class="open-card" data-open="${piece.id}">Ver pieza ↗</button></div></div></article>`).join('');
  $('#planning-empty').hidden=shown.length!==0;
}

function renderCatalog(){
  const query=state.catalogQuery.trim().toLowerCase();
  const shown=products.filter(item=>(state.group==='all'||item.group===state.group)&&(!query||`${item.code} ${item.name} ${item.detail}`.toLowerCase().includes(query)));
  $('#catalog-grid').innerHTML=shown.map(item=>{const linked=pieces.filter(piece=>[...piece.main,...piece.extra].includes(item.code));return `<article class="product-card"><a class="product-image" href="${productRefs[item.code]}" target="_blank" rel="noopener noreferrer" aria-label="Ver referencia de ${item.name}, ${item.code}"><img loading="lazy" src="./product_images__${item.code}.jpg" alt="Referencia visual de ${item.name}, código ${item.code}"></a><div class="product-info"><span class="product-group">${item.group.toUpperCase()}</span><h3>${item.name}</h3><p>${item.detail}</p><span class="product-code">${item.code}</span><a class="product-ref-link" href="${productRefs[item.code]}" target="_blank" rel="noopener noreferrer">Ver referencia del producto ↗</a><div class="product-placements">APARECE EN ${linked.map(piece=>`<button data-go-piece="${piece.id}">${String(piece.id).padStart(2,'0')}</button>`).join(' · ')}</div></div></article>`}).join('');
  $('#catalog-empty').hidden=shown.length!==0;
}

function renderReferences(){
  $('#reference-grid').innerHTML=references.map(ref=>`<article class="reference-card"><img loading="lazy" src="${imagePath(ref.post,ref.image)}" alt="${ref.title}"><div><span>POST ${String(ref.post).padStart(2,'0')}</span><strong>${ref.title}</strong><p>${ref.lesson}</p><a href="${ref.url}" target="_blank" rel="noopener noreferrer">Abrir post ↗</a></div></article>`).join('');
}

const userLikedPhotos={
  1:[1,2,4,6,8,9,10],2:[1,2,3,7,8,9],3:[3,4,5,8],4:[1,3,4,7,9],5:[1,5,7],6:[1,2,3,4,5,6,7],
  8:[1,3,4,5,6,7,8],9:[2,3,7,8],10:[1,3,4,5,6,7,8,9],11:[3,8],12:[1,3,4,5,6,7,9],13:[2,3,4,6],
  14:[1,2,3,4,5,6,7,8],15:[2,3,4,5,6,7],16:[1,3,4,6],17:[2,3,4,5,6,7,8],18:[2,4,6,8],
  19:[1,3,5,8],20:[3,7,8],21:[2,3,4,5,7,8,9],22:[4,5,6,9],23:[5,7],24:[1,2,4,5,6,8],
  25:[2,3,4,5,6,7],27:[3,7,8],28:[1,3],29:[3,5],30:[8]
};
const initialVotes=Object.fromEntries(Object.entries(userLikedPhotos).flatMap(([post,numbers])=>numbers.map(number=>[`${String(post).padStart(2,'0')}-${String(number).padStart(2,'0')}`,'liked'])));
const photoVotes=(()=>{try{const raw=localStorage.getItem('sportwear-tony-photo-votes-v1');const saved=raw===null?null:JSON.parse(raw);if(saved&&typeof saved==='object'&&!Array.isArray(saved)&&Object.keys(saved).length)return saved;if(localStorage.getItem('sportwear-user-selection-seeded-v1'))return saved&&typeof saved==='object'?saved:{};localStorage.setItem('sportwear-user-selection-seeded-v1','1');localStorage.setItem('sportwear-tony-photo-votes-v1',JSON.stringify(initialVotes));return {...initialVotes}}catch{return {...initialVotes}}})();
const typeLabels={producto:'Tenis / producto solo',mano:'Tenis en mano',modelo:'Modelo con outfit',detalle:'Detalle / textura',movimiento:'En movimiento',comparativa:'Comparativa',otro:'Accesorio / otro',sin_clasificar:'Por clasificar'};
const typeCodeLabels={p:'producto',h:'mano',m:'modelo',d:'detalle',v:'movimiento',c:'comparativa',o:'otro'};
const originalTypeCodes={
  1:'m d d m v m d h p m',
  2:'h m p m m d m p d',
  3:'m m h m p m h v h',
  4:'h m p m d m d p m',
  5:'m v v d m m d m m m',
  6:'m v c m h c v p m',
  7:'m m d m m d m d m',
  8:'p m m p m d m h',
  9:'m m m d m o m m',
  10:'m m h m h p d m p',
  11:'m o m m m o o m',
  12:'d m p m p m d o p',
  13:'m m m m m h m o d m',
  14:'h c m h d m h c',
  15:'m m p d p m p o',
  16:'p m h m m m o o',
  17:'m m p h c h p m',
  18:'o m m h m p o d o',
  19:'m m m m p m o d v',
  20:'o m p o m m m h',
  21:'m m h h m m m p v',
  22:'h m m d p d p m h',
  23:'m m m p m d m m',
  24:'h p m m d m o m',
  25:'m h p h m p m o o',
  26:'m m p o c m m m',
  27:'m o h m m m p o o',
  28:'m m h m v o p d',
  29:'m m p m h o m d',
  30:'o m h o m o p o'
};
const initialTypes=Object.fromEntries(Object.entries(originalTypeCodes).flatMap(([post,codes])=>codes.split(' ').map((code,index)=>[`${String(post).padStart(2,'0')}-${String(index+1).padStart(2,'0')}`,typeCodeLabels[code]])));
const generatedTypeByPiece={
  1:['modelo','detalle','movimiento'],2:['modelo','detalle','modelo'],3:['comparativa','comparativa','comparativa'],
  4:['modelo','modelo','detalle'],5:['modelo','movimiento','modelo'],6:['modelo','modelo','detalle'],
  7:['modelo','modelo','comparativa'],8:['modelo','modelo','comparativa'],9:['modelo','detalle','movimiento'],
  10:['modelo','modelo','modelo'],11:['modelo','detalle','modelo'],12:['detalle','detalle','modelo'],
  13:['producto','producto','mano'],14:['producto','producto','comparativa']
};
const productExtraPhotos=[
  {file:'product_HV8150-018_02.jpg',code:'HV8150-018',piece:13,type:'modelo',ref:{post:10,photo:8},label:'Vomero Plus · puesto en cardio'},
  {file:'product_HV8150-018_03.jpg',code:'HV8150-018',piece:13,type:'mano',ref:{post:4,photo:1},label:'Vomero Plus · en mano'},
  {file:'product_HV9272-005_02.jpg',code:'HV9272-005',piece:13,type:'mano',ref:{post:4,photo:1},label:'Winflo 12 · en mano'},
  {file:'product_HV9272-005_03.jpg',code:'HV9272-005',piece:13,type:'producto',ref:{post:4,photo:3},label:'Winflo 12 · par de perfil'},
  {file:'product_FV5285-302_02.jpg',code:'FV5285-302',piece:13,type:'modelo',ref:{post:10,photo:8},label:'Promina · puesto en cardio'},
  {file:'product_FV5285-302_03.jpg',code:'FV5285-302',piece:13,type:'producto',ref:{post:10,photo:9},label:'Promina · par cenital'},
  {file:'product_HJ9198-002_02.jpg',code:'HJ9198-002',piece:14,type:'mano',ref:{post:10,photo:5},label:'Revolution 8 negra · en mano'},
  {file:'product_HJ9198-002_03.jpg',code:'HJ9198-002',piece:14,type:'detalle',ref:{post:6,photo:6},label:'Revolution 8 negra · talones'},
  {file:'product_HJ9198-200_02.jpg',code:'HJ9198-200',piece:14,type:'modelo',ref:{post:11,photo:3},label:'Revolution 8 caqui · puesto'},
  {file:'product_HJ9198-200_03.jpg',code:'HJ9198-200',piece:14,type:'mano',ref:{post:4,photo:1},label:'Revolution 8 caqui · en mano'}
];
const generatedPhotos=[...pieces.flatMap(piece=>(generatedByPiece[piece.id]||[]).map((item,index)=>({id:`ia-${String(piece.id).padStart(2,'0')}-${String(index+1).padStart(2,'0')}`,piece:piece.id,photo:index+1,src:`./generated__${item.file}`,label:item.label,code:item.code||(piece.id===13?piece.main[index]:(piece.id===14&&index<2?piece.main[index]:null)),ref:item.ref||piece.referenceShots?.[index],source:'ia',codes:item.codes||[item.code].filter(Boolean),exterior:!!item.exterior,exteriorBlock:item.exteriorBlock||null,initialType:item.type||generatedTypeByPiece[piece.id]?.[index]||'sin_clasificar'}))),...productExtraPhotos.map((item,index)=>({id:`ia-product-${String(index+1).padStart(2,'0')}`,piece:item.piece,photo:index+1,src:`./generated__${item.file}`,label:item.label,code:item.code,ref:item.ref,source:'ia',initialType:item.type}))];
const galleryItems=[...galleryPhotos.map(photo=>({...photo,source:'original',initialType:initialTypes[photo.id]||'sin_clasificar'})),...generatedPhotos];
const galleryItemById=new Map(galleryItems.map(item=>[item.id,item]));
const photoTypes=(()=>{try{const saved=JSON.parse(localStorage.getItem('sportwear-photo-types-v1')||'{}');return saved&&typeof saved==='object'&&!Array.isArray(saved)?saved:{}}catch{return {}}})();
function photoType(item){return typeLabels[photoTypes[item.id]]?photoTypes[item.id]:item.initialType}
function setPhotoType(id,value){if(!galleryItemById.has(id)||!typeLabels[value])return;photoTypes[id]=value;localStorage.setItem('sportwear-photo-types-v1',JSON.stringify(photoTypes));renderArchive()}
let archiveSource='original';
let archiveFilter='all';
let archiveType='all';
let archiveShoe='all';
function voteOf(id){return photoVotes[id]==='liked'||photoVotes[id]==='discarded'?photoVotes[id]:null}
function saveVotes(){localStorage.setItem('sportwear-tony-photo-votes-v1',JSON.stringify(photoVotes))}
function matchesArchiveSource(item){if(archiveSource==='all')return true;if(archiveSource==='exterior')return item.exterior;if(/^exterior[1-5]$/.test(archiveSource))return item.exteriorBlock===Number(archiveSource.slice(8));return item.source===archiveSource}
function updateArchiveCounts(shown){
  const sourceItems=galleryItems.filter(matchesArchiveSource);
  $('#archive-count').textContent=`${shown} de ${sourceItems.length} fotos`;
  const likes=sourceItems.filter(item=>voteOf(item.id)==='liked').length;
  const discarded=sourceItems.filter(item=>voteOf(item.id)==='discarded').length;
  $('#liked-count').textContent=`${likes} likes · ${discarded} descartadas`;
}
function renderArchive(){
  const shown=galleryItems.filter(item=>matchesArchiveSource(item)&&(archiveFilter==='all'||voteOf(item.id)===archiveFilter)&&(archiveType==='all'||photoType(item)===archiveType)&&(archiveShoe==='all'||(item.code===archiveShoe||item.codes?.includes(archiveShoe))));
  $('#archive-grid').innerHTML=shown.map(item=>{
    const original=item.source==='original';
    const title=original?`POST ${String(item.post).padStart(2,'0')} / FOTO ${String(item.photo).padStart(2,'0')}`:item.code?`IA / ${item.code}`:`IA / PIEZA ${String(item.piece).padStart(2,'0')} / FOTO ${item.photo}`;
    const reference=item.ref&&galleryPhotos.find(photo=>photo.post===item.ref.post&&photo.photo===item.ref.photo);
    const referenceLink=reference?`<a href="${reference.url}?img_index=${reference.photo}" target="_blank" rel="noopener noreferrer">Ref Tony ${String(reference.post).padStart(2,'0')}-${String(reference.photo).padStart(2,'0')} ↗</a>`:'';
    return `<article class="archive-card" data-photo-id="${item.id}"><button class="archive-photo" data-photo-open="${item.id}" aria-label="Ampliar ${title}"><img loading="lazy" src="${item.src}" alt="${original?'Referencia original de Tony Blee':'Concepto generado para SportWear Plus'}, ${title}"></button><div class="archive-card-bottom"><div><strong>${title}</strong>${original?`<a href="${item.url}?img_index=${item.photo}" target="_blank" rel="noopener noreferrer">Abrir post ↗</a>`:`<span class="archive-image-label">${item.label}</span><button class="archive-piece-link" data-go-piece="${item.piece}">Ver pieza ↗</button>${referenceLink}`}</div><div class="archive-votes"><button class="archive-vote ${voteOf(item.id)==='liked'?'active like':''}" data-vote="${item.id}" data-choice="liked" aria-label="Me gusta ${title}" aria-pressed="${voteOf(item.id)==='liked'}">♥</button><button class="archive-vote ${voteOf(item.id)==='discarded'?'active discard':''}" data-vote="${item.id}" data-choice="discarded" aria-label="Descartar ${title}" aria-pressed="${voteOf(item.id)==='discarded'}">×</button></div></div><label class="archive-type-label">Estilo <select data-photo-type="${item.id}" aria-label="Clasificar ${title}">${Object.entries(typeLabels).map(([value,label])=>`<option value="${value}" ${photoType(item)===value?'selected':''}>${label}</option>`).join('')}</select></label></article>`;
  }).join('');
  $('#archive-empty').hidden=shown.length!==0;
  $$('.archive-filter').forEach(button=>{const active=button.dataset.archiveFilter===archiveFilter;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active))});
  $$('.gallery-source-button').forEach(button=>{const active=button.dataset.gallerySource===archiveSource;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active))});
  $('#gallery-type').value=archiveType;
  $('#gallery-shoe').value=archiveShoe;
  updateArchiveCounts(shown.length);
}
function setPhotoVote(id,choice){
  if(!galleryItemById.has(id))return;
  if(voteOf(id)===choice)delete photoVotes[id];else photoVotes[id]=choice;
  saveVotes();renderArchive();
}
function selectionPayload(){
  const selected=kind=>galleryPhotos.filter(photo=>voteOf(photo.id)===kind).map(photo=>({id:photo.id,post:photo.post,photo:photo.photo,url:`${photo.url}?img_index=${photo.photo}`}));
  const selectedIA=kind=>generatedPhotos.filter(photo=>voteOf(photo.id)===kind).map(photo=>({id:photo.id,piece:photo.piece,photo:photo.photo,file:photo.src,code:photo.code||null,reference:photo.ref||null}));
  return {version:1,source:'SportWear Plus · Archivo Tony Blee',totalPhotos:galleryPhotos.length,likes:selected('liked'),discarded:selected('discarded'),generatedLikes:selectedIA('liked'),generatedDiscarded:selectedIA('discarded'),votes:Object.fromEntries(galleryItems.filter(item=>voteOf(item.id)).map(item=>[item.id,voteOf(item.id)])),types:{...photoTypes}};
}
function selectionJson(){return JSON.stringify(selectionPayload(),null,2)}
function archiveMessage(message){$('#archive-message').textContent=message}

function setView(view){
  state.view=view;
  $$('.view').forEach(el=>el.classList.toggle('active',el.id===`${view}-view`));
  $$('.nav-item').forEach(el=>el.classList.toggle('active',el.dataset.view===view));
  $('#breadcrumb-view').textContent=view.toUpperCase();
  if(view==='archivo')renderArchive();
  window.scrollTo({top:0,behavior:'smooth'});
}

function mediaTile(src,alt,label){
  return `<figure class="reference-tile"><img loading="lazy" src="${src}" alt="${alt}"><figcaption>${label}</figcaption></figure>`;
}
function pendingTile(label){
  return `<div class="reference-tile reference-tile-pending"><span>${label}</span></div>`;
}
function visualComparison(piece,ref){
  const originalShots=piece.referenceShots||piece.images.map(photo=>({post:piece.ref,photo}));
  const originalTiles=originalShots.map((shot,index)=>mediaTile(imagePath(shot.post,shot.photo),`Foto original ${shot.photo} del post ${shot.post} de Tony Blee`,`Original ${index+1} · post ${String(shot.post).padStart(2,'0')} / foto ${shot.photo}`)).join('');
  const originalUrl=galleryPhotos.find(photo=>photo.post===originalShots[0].post)?.url||ref?.url||'#';
  const locationTiles=blitzLocationsByPiece[piece.id].map(key=>{const location=blitzLocationLibrary[key];return mediaTile(location.src,`Foto real de ${location.label}`,location.label)}).join('');
  const generated=generatedByPiece[piece.id]||[];
  const generatedTiles=generated.map((item,index)=>mediaTile(`./generated__${item.file}`,`Imagen ${index+1} generada para ${piece.title} en Blitz`,item.label)).join('')+Array.from({length:Math.max(0,3-generated.length)},(_,index)=>pendingTile(`Encuadre ${generated.length+index+1} de la sesión pendiente`)).join('');
  return `<div class="visual-comparison"><section class="reference-row" data-row="original"><div class="reference-row-title"><b>01 / ORIGINAL</b><span>Referencias seleccionadas de Tony Blee</span></div><div class="reference-media-grid">${originalTiles}</div><a class="detail-link" href="${originalUrl}" target="_blank" rel="noopener noreferrer">Ver publicación de referencia ↗</a></section><section class="reference-row" data-row="location"><div class="reference-row-title"><b>02 / LOCACIÓN</b><span>Fotos reales de distintas zonas de Blitz</span></div><div class="reference-media-grid">${locationTiles}</div><a class="detail-link" href="https://www.instagram.com/p/DKNVnhPSoSM/" target="_blank" rel="noopener noreferrer">Ver carrusel de Blitz ↗</a></section><section class="reference-row" data-row="session"><div class="reference-row-title"><b>03 / SESIÓN GENERADA</b><span>${generated.length?`${generated.length} conceptos IA para esta pieza`:'Pendiente de generar para esta pieza'}</span></div><div class="reference-media-grid">${generatedTiles}</div></section></div>`;
}

function openPiece(id){
  const piece=pieces.find(p=>p.id===Number(id)); if(!piece)return;
  const ref=references.find(r=>r.post===piece.ref);
  $('#detail-content').innerHTML=`<div class="detail-cover"><img src="${imagePath(piece.ref,piece.images[0])}" alt="Referencia visual para ${piece.title}"><span>REFERENCIA · POST ${String(piece.ref).padStart(2,'0')}</span></div><div class="detail-body"><div class="detail-meta"><span>PIEZA ${String(piece.id).padStart(2,'0')} / SEMANA ${String(piece.week).padStart(2,'0')}</span><span>${piece.type}</span></div><h2>${piece.title}</h2><p>${piece.description}</p><div class="detail-section"><h3>Productos protagonistas</h3><div class="product-list">${piece.main.map(code=>`<div class="product-line"><span>${product(code).name}<br><small>${product(code).detail}</small></span><b>${code}</b></div>`).join('')}</div>${piece.extra.length?`<h3 style="margin-top:20px">Complementos</h3><div class="product-list">${piece.extra.map(code=>`<div class="product-line"><span>${product(code).name}</span><b>${code}</b></div>`).join('')}</div>`:''}</div><div class="detail-section"><h3>Secuencia de tomas</h3><ol class="shot-list">${piece.shots.map(shot=>`<li>${shot}</li>`).join('')}</ol></div><div class="detail-section"><h3>Referencia visual</h3>${visualComparison(piece,ref)}</div><div class="detail-section"><h3>Idea de copy</h3><p>“${piece.copy}”</p></div><label class="detail-status">Estado de producción <select id="dialog-status">${statuses.map(s=>`<option ${statusOf(piece.id)===s?'selected':''}>${s}</option>`).join('')}</select></label></div>`;
  $('#dialog-status').addEventListener('change',e=>updateStatus(piece.id,e.target.value));
  $('#detail-dialog').showModal();
}

document.addEventListener('click',event=>{
  const nav=event.target.closest('[data-view]');if(nav){setView(nav.dataset.view);return}
  const gallerySourceButton=event.target.closest('[data-gallery-source]');if(gallerySourceButton){archiveSource=gallerySourceButton.dataset.gallerySource;if(archiveSource==='original')archiveShoe='all';renderArchive();return}
  const archiveFilterButton=event.target.closest('[data-archive-filter]');if(archiveFilterButton){archiveFilter=archiveFilterButton.dataset.archiveFilter;renderArchive();return}
  const vote=event.target.closest('[data-vote]');if(vote){setPhotoVote(vote.dataset.vote,vote.dataset.choice);return}
  const photoButton=event.target.closest('[data-photo-open]');if(photoButton){const photo=galleryItemById.get(photoButton.dataset.photoOpen);if(photo){const original=photo.source==='original';$('#photo-dialog-image').src=photo.src;$('#photo-dialog-image').alt=original?`Tony Blee, post ${photo.post}, foto ${photo.photo}`:`Concepto IA, pieza ${photo.piece}, foto ${photo.photo}`;$('#photo-dialog-caption').innerHTML=original?`<strong>POST ${String(photo.post).padStart(2,'0')} / FOTO ${String(photo.photo).padStart(2,'0')}</strong><a href="${photo.url}?img_index=${photo.photo}" target="_blank" rel="noopener noreferrer">Ver post original ↗</a>`:`<strong>SESIÓN IA / PIEZA ${String(photo.piece).padStart(2,'0')} / FOTO ${photo.photo}</strong><span>${photo.label}</span>`;$('#photo-dialog').showModal()}return}
  const open=event.target.closest('[data-open]');if(open){openPiece(open.dataset.open);return}
  const status=event.target.closest('[data-status]');if(status){cycleStatus(status.dataset.status);return}
  const linked=event.target.closest('[data-go-piece]');if(linked){setView('planning');openPiece(linked.dataset.goPiece);return}
  const filter=event.target.closest('[data-week]');if(filter){state.week=filter.dataset.week;$$('.filter').forEach(b=>b.classList.toggle('active',b===filter));renderPlanning();return}
  const group=event.target.closest('[data-group]');if(group){state.group=group.dataset.group;$$('.product-filter').forEach(b=>b.classList.toggle('active',b===group));renderCatalog()}
});
document.addEventListener('change',event=>{if(event.target.id==='gallery-type'){archiveType=event.target.value;renderArchive()}else if(event.target.id==='gallery-shoe'){archiveShoe=event.target.value;if(archiveShoe!=='all'&&archiveSource==='original')archiveSource='ia';renderArchive()}else if(event.target.matches('[data-photo-type]'))setPhotoType(event.target.dataset.photoType,event.target.value)});
document.addEventListener('keydown',event=>{if((event.key==='Enter'||event.key===' ')&&event.target.matches('.plan-card-image[data-open]')){event.preventDefault();openPiece(event.target.dataset.open)}});
$('#planning-search').addEventListener('input',event=>{state.planningQuery=event.target.value;renderPlanning()});
$('#catalog-search').addEventListener('input',event=>{state.catalogQuery=event.target.value;renderCatalog()});
$('#grid-toggle').addEventListener('click',()=>{state.list=false;$('#grid-toggle').classList.add('selected');$('#list-toggle').classList.remove('selected');$('#grid-toggle').setAttribute('aria-pressed','true');$('#list-toggle').setAttribute('aria-pressed','false');renderPlanning()});
$('#list-toggle').addEventListener('click',()=>{state.list=true;$('#list-toggle').classList.add('selected');$('#grid-toggle').classList.remove('selected');$('#grid-toggle').setAttribute('aria-pressed','false');$('#list-toggle').setAttribute('aria-pressed','true');renderPlanning()});
$('#view-plan').addEventListener('click',()=>{$('#planning-view').scrollIntoView({behavior:'smooth'})});
$('#close-dialog').addEventListener('click',()=>$('#detail-dialog').close());
$('#detail-dialog').addEventListener('click',event=>{if(event.target.id==='detail-dialog')event.target.close()});
$('#close-photo').addEventListener('click',()=>$('#photo-dialog').close());
$('#photo-dialog').addEventListener('click',event=>{if(event.target.id==='photo-dialog')event.target.close()});
$('#copy-liked').addEventListener('click',async()=>{const value=selectionJson();try{await navigator.clipboard.writeText(value);archiveMessage('JSON copiado. Pégalo en este chat para que vea tu selección.')}catch{const field=document.createElement('textarea');field.value=value;document.body.append(field);field.select();const copied=document.execCommand('copy');field.remove();archiveMessage(copied?'JSON copiado. Pégalo en este chat para que vea tu selección.':'No se pudo copiar; usa Descargar JSON.')}});
$('#download-liked').addEventListener('click',()=>{const url=URL.createObjectURL(new Blob([selectionJson()],{type:'application/json'}));const link=document.createElement('a');link.href=url;link.download='sportwear-tony-seleccion.json';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);archiveMessage('JSON descargado. Puedes importarlo en otro celular.')});
$('#import-liked').addEventListener('click',()=>$('#import-liked-file').click());
$('#import-liked-file').addEventListener('change',async event=>{const file=event.target.files?.[0];if(!file)return;try{const incoming=JSON.parse(await file.text());if(incoming.version!==1||!incoming.votes||typeof incoming.votes!=='object')throw Error('Formato inválido');let count=0;for(const item of galleryItems){const value=incoming.votes[item.id];if(value==='liked'||value==='discarded'){photoVotes[item.id]=value;count++}const type=incoming.types?.[item.id];if(typeLabels[type])photoTypes[item.id]=type}saveVotes();localStorage.setItem('sportwear-photo-types-v1',JSON.stringify(photoTypes));renderArchive();archiveMessage(`Importadas ${count} decisiones del JSON.`)}catch{archiveMessage('No se pudo importar ese JSON. Usa un archivo exportado desde esta app.')}event.target.value=''});
const comparisonPanel=$('#comparison-panel');
const comparisonToggle=$('#comparison-toggle');
const comparisonPieceSelect=$('#comparison-piece');
comparisonPieceSelect.innerHTML=pieces.map(piece=>`<option value="${piece.id}">${String(piece.id).padStart(2,'0')} · ${piece.title}</option>`).join('');
const comparisonModes={original:['original'],session:['session'],compare:['original','session'],all:['original','location','session']};
function setComparisonMode(mode){
  const selected=comparisonModes[mode]?mode:'all';
  comparisonPanel.querySelectorAll('[data-comparison-mode]').forEach(button=>{
    const active=button.dataset.comparisonMode===selected;
    button.classList.toggle('active',active);
    button.setAttribute('aria-pressed',String(active));
  });
  comparisonPanel.querySelectorAll('[data-row]').forEach(row=>row.hidden=!comparisonModes[selected].includes(row.dataset.row));
  localStorage.setItem('sportwear-comparison-mode',selected);
}
comparisonPanel.querySelectorAll('[data-comparison-mode]').forEach(button=>button.addEventListener('click',()=>setComparisonMode(button.dataset.comparisonMode)));
function setComparisonPiece(id){
  const piece=pieces.find(item=>item.id===Number(id))||pieces[0];
  const ref=references.find(item=>item.post===piece.ref);
  comparisonPieceSelect.value=String(piece.id);
  $('#comparison-content').innerHTML=visualComparison(piece,ref);
  $('#comparison-summary').textContent=`Pieza ${String(piece.id).padStart(2,'0')} · ${generatedByPiece[piece.id]?.length||0} conceptos IA disponibles`;
  $('#comparison-tony').href=galleryPhotos.find(photo=>photo.post===(piece.referenceShots?.[0].post||piece.ref))?.url||ref?.url||'#';
  localStorage.setItem('sportwear-comparison-piece',String(piece.id));
  setComparisonMode(localStorage.getItem('sportwear-comparison-mode')||'all');
}
comparisonPieceSelect.addEventListener('change',event=>setComparisonPiece(event.target.value));
setComparisonPiece(localStorage.getItem('sportwear-comparison-piece')||1);
function setComparisonOpen(open){
  comparisonPanel.hidden=!open;
  comparisonToggle.setAttribute('aria-expanded',String(open));
  comparisonToggle.querySelector('span').textContent=open?'Ocultar comparación':'Ver comparación';
  localStorage.setItem('sportwear-comparison-open',String(open));
}
comparisonToggle.addEventListener('click',()=>setComparisonOpen(comparisonPanel.hidden));
$('#comparison-close').addEventListener('click',()=>setComparisonOpen(false));
setComparisonOpen(localStorage.getItem('sportwear-comparison-open')==='true');
renderPlanning();renderCatalog();renderReferences();
