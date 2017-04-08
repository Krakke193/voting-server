/**
 * Created by Andrey on 4/8/17.
 *
 * This script is used as a main node inside the application.
 * Current state can be retrieved from here. Actions which change the
 * app's state also are treated here.
 */
import reducer from "./reducer";
import { createStore } from "redux";

export function makeStore() {
    return createStore(reducer);
}