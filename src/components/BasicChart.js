import React, { useEffect, useRef } from "react";
import { select } from "d3";

const BasicChart = (props) => {
    const ref = useRef(null);
    useEffect(() => {
        const svg = select(ref.current);
        svg
          .selectAll("circle")
          .data(props.data)
          .join("circle")
          .attr("r", value => value)
          .attr("cx", value => value * 2)
          .attr("cy", value => value * 2)
          .attr("stroke", "red");
      }, [props.data]);

    return (
        <svg ref={ref}></svg>
    );
};

export default BasicChart