import { configureStore } from '@reduxjs/toolkit';
import innerReducer from "./reducers/innerSlice";
import collectionReducer from "./reducers/collectionSlice";
import latestReducer from "./reducers/latestThruDark";
import blogsReducer from "./reducers/blogsSlice";
import mansCollectionReducer from './reducers/mansCollectionSlice';
import technologiesReducer from './reducers/technologiesSlice'


import heroCarouselReducer from './reducers/heroCarouselSlice'
import productSliderReducer from './reducers/ProductSliderSlice'
import productSliderImgOnlyReducer from './reducers/productImgSliderSlice'
import navbarReducer from "./reducers/navbarSlice";
export const store = configureStore({
  reducer: {
    inner: innerReducer,
    collection: collectionReducer,
    heroCarousel: heroCarouselReducer,
    productSlider: productSliderReducer,
    latestData:latestReducer,
    blogsData:blogsReducer,
    mansCollection:mansCollectionReducer,
    productSliderImgOnly: productSliderImgOnlyReducer,
    technologies:technologiesReducer,
    navbarReducer: navbarReducer

  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


