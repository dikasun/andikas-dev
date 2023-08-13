import {Lato, Manrope, Montserrat, Nunito, Plus_Jakarta_Sans, Roboto} from 'next/font/google'

const imageHeroStyle = {
    borderTopLeftRadius: '25%',
    borderTopRightRadius: '25%',
    borderBottomRightRadius: '25%',
};

const jakartaSans = Plus_Jakarta_Sans({subsets: ['latin']});
const manrope = Manrope({subsets: ['latin']});
const roboto = Roboto({subsets: ['latin'], weight: ['400']});
const montserrat = Montserrat({subsets: ['latin']});
const lato = Lato({subsets: ['latin'], weight: ['400']});
const nunito = Nunito({subsets: ['latin']});

export {
    imageHeroStyle,
    jakartaSans,
    manrope,
    roboto,
    montserrat,
    lato,
    nunito,
}