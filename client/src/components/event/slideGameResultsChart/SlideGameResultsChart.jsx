import React from "react"
import { connect } from "react-redux"
import { selectEventResultsArray } from "../../../redux/eventResults/eventResultsSelectors"

import { XAxis, YAxis, Tooltip, CartesianGrid, Bar, BarChart } from "recharts"

const SlideGameResultsChart = ({ eventResults }) => {
  return (
    <div>
      <BarChart width={730} height={250} data={eventResults}>
        <XAxis tickCount={5} dataKey="option" />
        <YAxis tickCount={5} />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" opacity={0.8} vertical={false} />
        <Bar dataKey="count" fill="#7134ff" />
      </BarChart>
    </div>
  )
}

const mapStateToProps = state => ({
  eventResults: selectEventResultsArray(state),
})

export default connect(mapStateToProps)(SlideGameResultsChart)
