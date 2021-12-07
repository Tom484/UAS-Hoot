import React from "react"
import { connect } from "react-redux"
import { selectEventResultsArray } from "../../../redux/eventResults/eventResultsSelectors"

import { XAxis, Bar, BarChart } from "recharts"

const CurrentResultsChart = ({ eventResults }) => {
  const newEventResults = eventResults?.map(result => {
    return {
      ...result,
      label: `Answers ${result?.count || 0} ${result?.correct ? "(correct)" : ""}`,
    }
  })
  return (
    <div>
      <BarChart width={730} height={280} data={newEventResults}>
        <Bar dataKey="count" fill="#7134ff">
          {/* <LabelList dataKey="count" position="top" color="black">
            Answers
          </LabelList> */}
        </Bar>
        <XAxis dataKey="label" minTickGap={5} />
      </BarChart>
    </div>
  )
}

const mapStateToProps = state => ({
  eventResults: selectEventResultsArray(state),
})

export default connect(mapStateToProps)(CurrentResultsChart)
