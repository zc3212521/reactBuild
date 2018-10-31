import React from 'react'

import _ from 'lodash'

export default class Children extends React.Component {
    render() {
        const result  = _.lowerCase('fooBar')
        return (
            <div>
                {result}
            </div>
        )
    }
}