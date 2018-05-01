import socialLink from './components/socialLink';
import socialLinkBlock from './components/socialLinkBlock';
import fLike from './components/fLike';
import tLike from './components/tLike';
import gLike from './components/gLike';

export default (editor, config = {}) => {

    socialLink(editor, config);
    
    socialLinkBlock(editor, config);
    
    fLike(editor, config);
    
    tLike(editor, config);
    
    gLike(editor, config);
}
