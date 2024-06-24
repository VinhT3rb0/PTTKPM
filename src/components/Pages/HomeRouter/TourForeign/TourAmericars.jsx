import React from "react";
import FormPrice from "../../../Component/FormPrice/FormPrice";
import ListCardTour from "../../../Component/ListCardTour/ListCardTour";
export default function TourAmericars() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <FormPrice name="Du lịch Châu Mỹ"></FormPrice>
      <ListCardTour name="ChauMy"></ListCardTour>
    </div>
  );
}
