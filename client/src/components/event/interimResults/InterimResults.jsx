import React from "react"
import CustomBackground from "../../custom/customBackground/CustomBackground"
import PlayersResult from "../playersResult/PlayersResult"

const InterimResults = () => {
  return (
    <CustomBackground eventNavbar>
      <div style={{ padding: "30px" }}>
        <PlayersResult title="Interim Results" />
      </div>
    </CustomBackground>
  )
}

export default InterimResults
