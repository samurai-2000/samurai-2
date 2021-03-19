import * as M from 'materialize-css';

export const parallax = () => {
    const elems = document.querySelectorAll('.parallax');
    const options = {}
    M.Parallax.init(elems, options);
}