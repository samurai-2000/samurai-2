import * as M from 'materialize-css';

export const carousel = () => {
    const elems = document.querySelectorAll('.carousel')
    const options = {
        fullWidth: true,
        indicators: true
    }
    const instances = M.Carousel.init(elems, options)
}

export const carouselNext = (slides:number = 0) => {
    const elem = document.querySelector('.carousel')
    const instance = M.Carousel.getInstance(elem as Element)
    instance.next(slides)
}