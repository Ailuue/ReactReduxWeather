import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function max(data) {
    return _.round(data.reduce(function(a, b) {
        return Math.max(a, b);
    }));
}

function min(data) {
    return _.round(data.reduce(function (a, b) {
        return Math.min(a, b);
    }))
}
function average(data) {
    return _.round(_.sum(data)/data.length);
}

export default (props) => {
    const unit = props.units;
    return (
    <div>
        <Sparklines svgHeight={120} svgWidth={300} data={props.data}>
            <SparklinesLine color={props.color} />
            <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>Max: {max(props.data)} {unit}  /  Min: {min(props.data)} {unit}  /  Avg: {average(props.data)} {unit}</div>
    </div>
    );
}