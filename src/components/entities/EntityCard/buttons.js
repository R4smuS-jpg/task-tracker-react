import Button from "components/Button/Button";
import { StyledImage } from "components/entities/EntityCard/components";

import EditImg from "components/entities/EntityCard/images/edit.png";
import RemoveImg from "components/entities/EntityCard/images/delete.png";
import DiscardImg from "components/entities/EntityCard/images/discard.png";
import AcceptImg from "components/entities/EntityCard/images/accept.png";

export const ButtonInEditMode = ({ onAcceptClick, onDiscardClick, isDisableAccept }) => (
  <>
    <Button
      disabled={isDisableAccept}
      onClick={(event) => {
        onAcceptClick(event);
      }}
    >
      <StyledImage src={AcceptImg} alt="presentation" />
    </Button>
    <Button onClick={onDiscardClick}>
      <StyledImage src={DiscardImg} alt="presentation" />
    </Button>
  </>
);

export const ButtonInShowMode = ({ editClick, removeClick }) => (
  <>
    <Button onClick={editClick}>
      <StyledImage src={EditImg} alt="presentation" />
    </Button>
    <Button onClick={removeClick}>
      <StyledImage src={RemoveImg} alt="presentation" />
    </Button>
  </>
);
