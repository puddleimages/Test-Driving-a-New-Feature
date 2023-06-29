import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  // ...existing test case

  it('displays all the recipes below the heading', () => {
    const wrapper = shallow(<App />);
    const recipeInput = wrapper.find('input');
    const addButton = wrapper.find('button');
    const recipes = ['Recipe 1', 'Recipe 2', 'Recipe 3'];

    // Add multiple recipes
    recipes.forEach((recipe) => {
      recipeInput.simulate('change', { target: { value: recipe } });
      addButton.simulate('click');
    });

    const recipeListItems = wrapper.find('ul li');

    expect(recipeListItems).toHaveLength(recipes.length);
    recipes.forEach((recipe, index) => {
      expect(recipeListItems.at(index).text()).toEqual(recipe);
    });
  });
});
