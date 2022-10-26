# b2utils

TS utils functions by `<a href="https://b2bit.company">`B2bit Company `</a>`

## Installing

Using npm:

```bash
$ npm i b2utils
```

Using yarn:

```bash
$ yarn add b2utils
```

## Usage

### CEP

```ts
import { cep } from 'b2utils';

cep.mask('12345678'); // 12.345-678

cep.validate('12345678'); // true
cep.validate('12.345-678'); // true
cep.validate('123456'); // false
```

### CNPJ

```ts
import { cnpj } from 'b2utils';

cnpj.mask('99497228000104'); // 99.497.228/0001-04

cnpj.validate('99497228000104'); // true
cnpj.validate('99.497.228/0001-04'); // true
cnpj.validate('994972280001'); // false
cnpj.validate('11.111.111/1111-11'); // false
```

### CPF

```ts
import { cpf } from 'b2utils';

cpf.mask('14187511032'); // 141.875.110-32

cpf.validate('14187511032'); // true
cpf.validate('141.875.110-32'); // true
cpf.validate('1418751103'); // false
cpf.validate('141.875.110-33'); // false
```

### Phone

```ts
import { phone } from 'b2utils';

phone.mask('5584988776655'); // +55 (84) 98877-6655
phone.mask('84988776655'); // (84) 98877-6655
phone.mask('988776655'); // 98877-6655

phone.validate('5584988776655'); // true
phone.validate('84988776655'); // true
phone.validate('988776655'); // true
phone.validate('98877665'); // false

phone.fromObject({
  countryCode: '55',
  areaCode: '84',
  number: '988776655',
}); // +55 (84) 98877-6655
phone.fromObject({
  areaCode: '84',
  number: '988776655',
}); // (84) 98877-6655
phone.fromObject({
  number: '988776655',
}); // 98877-6655

phone.toObject('+55 (84) 98877-6655'); // { countryCode: '55', areaCode: '84', number: '988776655' }
phone.toObject('(84) 98877-6655'); // { areaCode: '84', number: '988776655' }
phone.toObject('98877-6655'); // { number: '988776655' }
```

### Color

```ts
import { color } from 'b2utils';

color.addOpacityOnHexColor('#000000', 0.5); // #00000080
```

### YouTube

```ts
import { youtube } from 'b2utils';

youtube.getIdFromUrl('https://www.youtube.com/watch?v=05h6KvLvC8A'); // 105h6KvLvC8A
```

### Transform object in array

```ts
import { transformObjectInArray } from 'b2utils';

const obj = {
  cpf: 'invalid cpf',
  cnpj: 'invalid cnpj',
};

transformObjectInArray(obj); // ['invalid cpf', 'invalid cnpj']
```
