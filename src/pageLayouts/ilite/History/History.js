import React, { createElement } from "react"

import LayoutWrapper from "../../../components/LayoutWrapper"
import Container from "../../../templates/container"
import Tabs, { Tab } from "../../../components/Tabs"
import HistoryTab from "../../../components/HistoryTab"
import GetDocumentation from "./GetDocumentation"
import historyData from "../../../lib/History/historyData.json"



const buildHistory = () => {
  const length = historyData.historyData.length;
  return historyData.historyData.map((history, index) => {
    return (
      <Tab name={history.year}>
        <HistoryTab image={history.image} heading={history.header} video={history.video}
          year={history.year} tabNumber={length - index} competitions={history.competitions}
          awards={history.awards}>
        </HistoryTab>
      </Tab>)
  });
}

// const buildHistory = () => {
//   return (historyData.historyData.map((history, index) => {
//     <Tab name="2019">
//       <div className="history__event" id="">
//         <h1 className="history__event-header">
//           2019 - Destination: Deep Space
//                 </h1>
//         <div className="history__embed">
//           <iframe
//             title="Destination: Deep Space Video"
//             width="100%"
//             height="315"
//             src="https://www.youtube.com/embed/Mew6G_og-PI"
//             frameborder="0"
//             gesture="media"
//             allow="encrypted-media"
//             allowfullscreen
//           />
//         </div>
//         <div className="history__event-container">
//           <div className="history__awards">
//             <h3 className="history__event-subheader">Awards</h3>
//             <ul>
//               <li>CHS District Championship: Chairman's Award</li>
//               <li>CHS District Oxon Hill Event: Imagery Award</li>
//               <li>CHS District Bethesda Event: Chairman's Award</li>
//               <li>CHS District Bethesda Event: Event Winner</li>
//             </ul>
//           </div>
//           <div className="history__attended">
//             <h3 className="history__event-subheader">
//               Competitions Attended
//                     </h3>
//             <ul>
//               <li>FIRST Chesapeake District Championship</li>
//               <li>FIRST Chesapeake District Oxon Hill MD Event</li>
//               <li>FIRST Chesapeake District Bethesda MD Event</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <img
//         src={require("../../../assets/images/outreach/chairmans/history_2019_banner.jpg")}
//         alt="2019 Banner"
//         className="history__image"
//       />

//       {GetDocumentation(2019)}
//     </Tab>
//   }
//   ));
// }

const History = () => {
  return (
    <LayoutWrapper>
      <Container
        division="frc"
        title="History"
        subtitle="See how 90,000+ minds are reached"
        id="top"
        bannerImage="history__banner"
      >
        <div className="history">
          <Tabs>
            {buildHistory()}
            {/* 2020 - Infinite Recharge */}

          </Tabs>
        </div>
      </Container>
    </LayoutWrapper>
  )
}

History.propTypes = {}

export default History
