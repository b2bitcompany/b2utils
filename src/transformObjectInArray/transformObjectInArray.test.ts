import { describe, it, expect } from 'vitest';

import { transformObjectInArray } from '.';

describe('generate array with the content of the object', () => {
  it('should simple object work', () => {
    const obj = {
      cpf: 'invalid cpf',
      cnpj: 'invalid cnpj',
    };
    expect(transformObjectInArray(obj)).toStrictEqual([
      'invalid cpf',
      'invalid cnpj',
    ]);
  });

  it('should nested object work', () => {
    const obj = {
      cpf: 'invalid cpf',
      cnpj: 'invalid cnpj',
      address: {
        cep: 'invalid cep',
      },
    };
    expect(transformObjectInArray(obj)).toStrictEqual([
      'invalid cpf',
      'invalid cnpj',
      'invalid cep',
    ]);
  });

  it('should nested object with array work', () => {
    const obj = {
      cpf: 'invalid cpf',
      cnpj: 'invalid cnpj',
      address: {
        cep: ['invalid cep1', 'invalid cep2'],
      },
    };
    expect(transformObjectInArray(obj)).toStrictEqual([
      'invalid cpf',
      'invalid cnpj',
      'invalid cep1',
      'invalid cep2',
    ]);
  });

  it('should string return array with the string', () => {
    expect(transformObjectInArray('invalid cpf')).toStrictEqual([
      'invalid cpf',
    ]);
  });
});
