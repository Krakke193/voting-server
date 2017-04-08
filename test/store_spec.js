/**
 * Created by Andrey on 4/8/17.
 */
import { Map, fromJS } from 'immutable';
import { expect } from 'chai';

import { makeStore } from '../src/store';
import { describe, it } from "mocha";

describe('store', () => {

    it('the store is configured with the correct reducer', () => {
        const store = makeStore();
        expect(store.getState()).to.equal(Map());

        // pass action into the redux' store, which will use the reducer for applying to the current state
        store.dispatch({
            type: 'SET_ENTRIES',
            entries: [ 'Trainspotting', '28 Days Later' ]
        });

        // todo: not sure about usage 'fromJS()' vs 'Map()'
        expect(store.getState()).to.equals(fromJS({
            entries: [ 'Trainspotting', '28 Days Later' ]
        }));
    });
});
