const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails())).toBe(true);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails().length).toBe(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof Object.values(productDetails())).toEqual('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(Object.values(productDetails())[0]).not.toBe(Object.values(productDetails())[1]);
    // Teste se os dois productIds terminam com 123.
    expect(productDetails('x','y')[0].details.productId).toMatch(/123/);
    expect(productDetails('x','y')[1].details.productId).toMatch(/123/);
  });
});
