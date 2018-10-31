import React from 'react'
import _ from 'lodash'

import Chil from "./children"

import { test1 } from "@/util"

export default class App extends React.Component {
    render() {
        const count = _.add(4,6)
        console.error("i am good person")
        return(
            <div>
                <div>{count}</div>
                <Chil />
            </div>
        )
    }
}