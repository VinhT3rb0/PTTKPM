import React from "react";
import FormPrice from "../../../Component/FormPrice/FormPrice";
import ListCardTour from "../../../Component/ListCardTour/ListCardTour";
export default function TourAutralia() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around", minHeight: 500 }}>
      <FormPrice name="Du lịch Châu Úc"></FormPrice>
      <ListCardTour name="ChauUc"></ListCardTour>
    </div>
  );
}
