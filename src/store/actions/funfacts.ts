import {Fact} from '../reducers/funfactReducer';

export const funfacts = (fact: Fact) => ({
  id: fact.id,
  fact: fact.fact,
});
