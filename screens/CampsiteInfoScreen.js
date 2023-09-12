import RenderCampsite from "../features/campsites/RenderCampsite";

const CampsiteInfoScreen = (props) => {
  //   console.log("props", props);
  return <RenderCampsite campsite={props.campsite} />;
};

export default CampsiteInfoScreen;
