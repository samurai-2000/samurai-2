import * as M from 'materialize-css';

export const parallax = () => {
    const elems = document.querySelectorAll('.parallax')
    M.Parallax.init(elems)
}