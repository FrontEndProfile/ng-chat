# NgChat

### install :

npm i swiper @types/swiper


### AppModule {} go to register

import { register } from 'swiper/element/bundle';
register();

and add schemas after bootstrap: [],

schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

==== 

then use elements tags