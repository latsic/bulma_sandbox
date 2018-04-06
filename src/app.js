

import './scss/bulma_custom.scss';
import './css/myStyles.css';
import {bulmaEnableHamburgerToggle} from './js/bulma.js';
import * as bulma_page from './js/bulma_page.js';

// base package
import fontawesome from "@fortawesome/fontawesome";
// Facebook and Twitter icons
import faFacebook from "@fortawesome/fontawesome-free-brands/faFacebook";
import faTwitter from "@fortawesome/fontawesome-free-brands/faTwitter";
import faGithub from "@fortawesome/fontawesome-free-brands/faGithub";

// add the imported icons to the library
fontawesome.library.add(faFacebook, faTwitter, faGithub);


bulma_page.addButtons(); 
bulmaEnableHamburgerToggle();


if (process.env.NODE_ENV !== 'production') {

    if (module.hot) {

        module.hot.accept('./js/bulma.js', function() {
            console.log('Accepting the updated bulma module!');
        });
        module.hot.accept('./js/bulma_page.js', function() {
            console.log('Accepting the updated bulma module!');
            bulma_page.removeButtons();
            bulma_page.addButtons();
        });
    }
}