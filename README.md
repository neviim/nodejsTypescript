# Usando yarn 

'''zsh
# $ choco -v        0.10.15
# $ node -v         v14.16.0
# $ npm -v          6.14.11
# $ yarn -v         1.22.10
'''

Instala yarn

# $ mkdir src
# $ mkdir src/util

# $ npm install --save path
# $ npm i --save module-alias
# $ npm i --save-dev @types/module-alias

# $ npm install -g yarn
# $ npm install -g typescript

##

# $ yarn add -D typescript
# $ yarn add -D @types/node

# $ yarn add module-alias
# $ yarn add -D @types/module-alias

# $ cd src/util
# $ criar: module-alias.ts
    import * as path from 'path';
    import moduleAlias from 'module-alias';

    const files = path.relative(__dirname, '../..');

    moduleAlias.addAliases({
        '@src': path.join(files, 'src'),
        '@test': path.join(files, 'test')
    })
## ESlint

# $ yarn add -D @typescript-eslint/eslint-plugin eslint @typescript-eslint/parser