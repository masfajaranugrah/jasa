import React from "react";
import styled from "styled-components";
// Assets
import RollerIcon from "../../assets/svg/Services/RollerIcon";
import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
import BrowserIcon from "../../assets/svg/Services/BrowserIcon";
import Time from "../../assets/svg/Services/clock.png";
import Parner from "../../assets/svg/Services/partners.png";
import Seo from "../../assets/svg/Services/search-engine-optimization.png";
import Bonus from "../../assets/svg/Services/bonus.png";

export default function ServiceBox({ icon, title, subtitle }) {
  let getIcon;

  switch (icon) {
    case "roller":
      getIcon = <RollerIcon />;
      break;
    case "monitor":
      getIcon = <MonitorIcon />;
      break;
    case "browser":
      getIcon = <BrowserIcon />;
      break;
    case "clock":
      getIcon = <img src={Time} alt="Clock" className="w-[12px]" />;
      break;
    case "seo":
      getIcon = <img src={Seo} alt="Clock" className="w-[45px]" />;
      break;
    case "bonus":
      getIcon = <img src={Bonus} alt="Clock" className="w-[45px]" />;
      break;
    case "parner":
      getIcon = <img src={Parner} alt="Clock" className="w-[30px]" />;
      break;
    default:
      getIcon = <RollerIcon />;
      break;
  }

  return (
    <Wrapper className="flex flex-col">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="text-[30px] text-center font-extrabold">
        {title}
      </TitleStyle>
      <SubtitleStyle className="text-[20px] font-semibold">
        {subtitle}
      </SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconStyle = styled.div`
  margin-bottom: 20px;

  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;

const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;

  @media (max-width: 860px) {
    padding: 20px 0;
    text-align: center;
  }
`;

const SubtitleStyle = styled.p`
  margin: 0 auto;
  text-align: center;
`;
