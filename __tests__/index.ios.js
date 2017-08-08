'use strict'
import 'react-native';
import React from 'react';
import Index from '../index.ios.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   const tree = renderer.create(
//     <Index />
//   );
// });

xdescribe('a silly test', function() {
  it('expects true to be true', function() {
    expect(true).toBe(true);
  });
});

xtest('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

xtest('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});

xtest('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

xtest('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

xtest('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

xtest('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

xtest('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  expect(value).not.toBe(0.3);    // It isn't! Because rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});

xtest('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

xtest('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
];

xtest('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
});


//********************************
//********************************
//********************************
//TESTING ASYNCHRONOUS CODE
//*********************************
//*********************************
//*********************************
//use for callbacks

// test('the data is peanut butter', done => {
//   function callback(data) {
//     expect(data).toBe('peanut butter');
//     done();
//   }

//   fetchData(callback);
// });

//********************************
//testing promises

// test('the data is peanut butter', () => {
//   expect.assertions(1);
//   return fetchData().then(data => {
//     expect(data).toBe('peanut butter');
//   });
// });


//********************************
//if you expect a promise to be rejected

// test('the fetch fails with an error', async () => {
//   expect.assertions(1);
//   return fetchData().catch(e =>
//     expect(e).toMatch('error')
//   );
// });

//*******************************
//.resolves/.reject

// test('the data is peanut butter', () => {
//   expect.assertions(1);
//   return expect(fetchData()).resolves.toBe('peanut butter');
// });

// test('the fetch fails with an error', () => {
//   expect.assertions(1);
//   return expect(fetchData()).rejects.toMatch('error');
// });


//*********************************
//async/await

// test('the data is peanut butter', async () => {
//   expect.assertions(1);
//   const data = await fetchData();
//   expect(data).toBe('peanut butter');
// });

// test('the fetch fails with an error', async () => {
//   expect.assertions(1);
//   try {
//     await fetchData();
//   } catch (e) {
//     expect(e).toMatch('error');
//   }
// });

//*********************************
//async/await with resolve/reject

// test('the data is peanut butter', async () => {
//   expect.assertions(1);
//   await expect(fetchData()).resolves.toBe('peanut butter');
// });

// test('the fetch fails with an error', async () => {
//   expect.assertions(1);
//   await expect(fetchData()).rejects.toMatch('error');
// });


//******************************
//******************************
//SETUP AND TEARDOWN
//******************************
//******************************

//repeating setup for many tests
//******************************
//beforeEach afterEAch

// If you have some work you need to do repeatedly for many tests, you can use beforeEach and afterEach.
// For example, let's say that several tests interact with a database of cities. You have a method initializeCityDatabase() that must be called before each of these tests, and a method clearCityDatabase() that must be called after each of these tests. You can do this with:
// beforeEach(() => {
//   initializeCityDatabase();
// });

// afterEach(() => {
//   clearCityDatabase();
// });

// test('city database has Vienna', () => {
//   expect(isCity('Vienna')).toBeTruthy();
// });

// test('city database has San Juan', () => {
//   expect(isCity('San Juan')).toBeTruthy();
// });
// beforeEach and afterEach can handle asynchronous code in the same ways that tests can handle asynchronous code - they can either take a done parameter or return a promise. For example, if initializeCityDatabase() returned a promise that resolved when the database was initialized, we would want to return that promise:
// beforeEach(() => {
//   return initializeCityDatabase();
// });


//******************************
//OneTime Setup
//beforeAll AfterAll

// In some cases, you only need to do setup once, at the beginning of a file. This can be especially bothersome when the setup is asynchronous, so you can't just do it inline. Jest provides beforeAll and afterAll to handle this situation.
// For example, if both initializeCityDatabase and clearCityDatabase returned promises, and the city database could be reused between tests, we could change our test code to:
// beforeAll(() => {
//   return initializeCityDatabase();
// });

// afterAll(() => {
//   return clearCityDatabase();
// });

// test('city database has Vienna', () => {
//   expect(isCity('Vienna')).toBeTruthy();
// });

// test('city database has San Juan', () => {
//   expect(isCity('San Juan')).toBeTruthy();
// });

//********************************
//Scoping #

// By default, the before and after blocks apply to every test in a file. You can also group tests together using a describe block. When they are inside a describe block, the before and after blocks only apply to the tests within that describe block.
// For example, let's say we had not just a city database, but also a food database. We could do different setup for different tests:

// // Applies to all tests in this file
// beforeEach(() => {
//   return initializeCityDatabase();
// });

// test('city database has Vienna', () => {
//   expect(isCity('Vienna')).toBeTruthy();
// });

// test('city database has San Juan', () => {
//   expect(isCity('San Juan')).toBeTruthy();
// });

// describe('matching cities to foods', () => {
//   // Applies only to tests in this describe block
//   beforeEach(() => {
//     return initializeFoodDatabase();
//   });

//   test('Vienna <3 sausage', () => {
//     expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
//   });

//   test('San Juan <3 plantains', () => {
//     expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
//   });
// });

//****************************************************
// General Advice #

// If a test is failing, one of the first things to check should be whether the test is failing when it's the only test that runs. In Jest it's simple to run only one test - just temporarily change that test command to a test.only:
// test.only('this will be the only test that runs', () => {
//   expect(true).toBe(false);
// });

// test('this test will not run', () => {
//   expect('A').toBe('A');
// });