describe('returnLast', function () {
  describe('возвращает последний элемент массива', function () {
    function makeTest(arr_len) {
      let expected = (Math.random() * 100 - 50).toFixed(3);
      let input_array = [];
      for (let i = 0; i < arr_len - 1; i++) {
        input_array.push((Math.random() * 100 - 50).toFixed(3));
      }
      input_array.push(expected);
      beforeEach(() => (mocha.innerHTML += input_array));
      it(`последний элемент массива из ${arr_len}
       элементов [${input_array}] равен ${expected}`, function () {
        assert.equal(returnLast(input_array), expected);
      });
    }
    for (let arr_len = 1; arr_len <= 5; arr_len++) {
      makeTest(arr_len);
    }
  });
  it('при пустом массиве возвращает undefined', function () {
    assert.equal(returnLast([]), undefined);
  });
  it('при не массиве возвращает undefined', function () {
    assert.equal(returnLast(1), undefined);
  });
  before(() => {
    arr = [1, 2, 3];
    arr['u'] = 4;
    arr[-1] = 5;
    console.log(arr);
    console.log(arr.length);
  });
  it(`при наличии неупорядоченных элементов равен
   последнему упорядоченному
   для массива ${arr} равен 3`, function () {
    assert.equal(returnLast(arr), 3);
  });
});
