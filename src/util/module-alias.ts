import * as path from 'path';
import moduleAlias from 'module-alias';

const files = path.relative(__dirname, '../..');

moduleAlias.addAliases({
    '@src': path.join(files, 'src'),
    '@test': path.join(files, 'test')
})

