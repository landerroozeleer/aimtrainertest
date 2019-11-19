import React from "react";
import { Button } from "reactstrap";

interface Props {}

export const Trainingoptions: React.FC<Props> = () => {
  return (
    <div>
      <h1 className="pt-4">SKILL TRAINING</h1>
      <div className="d-lg-flex pt-3 pb-4">
        <Button className="btn-sqr-skill-active">FLICKING</Button>
        <Button className="btn-sqr-skill">SPEED</Button>
        <Button className="btn-sqr-skill">STRAFE DODGING</Button>
        <Button className="btn-sqr-skill">AWARENESS</Button>
        <Button className="btn-sqr-skill">TARGET ACQ.</Button>
        <Button className="btn-sqr-skill">REACTION</Button>
        <Button className="btn-sqr-skill">TRACKING</Button>
        <Button className="btn-sqr-settings ml-auto">GAME SETTINGS</Button>
      </div>
    </div>
  );
};
