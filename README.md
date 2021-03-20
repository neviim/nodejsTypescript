### Ambiente para desenvolvimento em TypeScript nodejs

```zsh
    # Soft e versão utilisados:

        $ choco -v        v00.10.15
        $ node -v         v14.16.00
        $ npm -v          v06.14.11
        $ yarn -v         v01.22.10
```

### Instalando yarn

```zsh
    $ mkdir nodejstypescript
    $ cd nodejstypescript

    $ mkdir src
    $ mkdir src/util

    $ npm install --save path
    $ npm i --save module-alias
    $ npm i --save-dev @types/module-alias

    $ npm install -g yarn
    $ npm install -g typescript

    $ yarn add -D typescript
    $ yarn add -D @types/node

    $ yarn add module-alias
    $ yarn add -D @types/module-alias

    $ cd src/util
    $ criar: module-alias.ts
```
```typescript
    import * as path from 'path';
    import moduleAlias from 'module-alias';

    const files = path.relative(__dirname, '../..');

    moduleAlias.addAliases({
        '@src': path.join(files, 'src'),
        '@test': path.join(files, 'test')
    })
```


### ESlint

```zsh
    $ yarn add -D @typescript-eslint/eslint-plugin eslint @typescript-eslint/parser


    \Projetos\nodejsTypescript> yarn build
    yarn run v1.22.10
    $ tsc
    Done in 3.94s.

    \Projetos\nodejsTypescript> yarn start
    yarn run v1.22.10
    $ yarn build && node dist/src/index.js
    $ tsc
    test
    Done in 5.02s.

    \Projetos\nodejsTypescript> yarn lint
    yarn run v1.22.10
    $ eslint ./src ./test --ext .ts
    Done in 2.01s.

    \Projetos\nodejsTypescript>yarn lint:fix
    yarn run v1.22.10
    $ eslint ./src ./test --ext .ts --fix
    Done in 2.65s.
```

