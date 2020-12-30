import React from "react";

import Callout, { CalloutBody, CalloutActions, CalloutMedia } from "./Callout";
import Button from "components/atoms/Button";

import SpeedImage from "draws/Speed";

const story = {
    title: "Components/Atoms/Callout",
    component: Callout,
    subcomponents: {
        CalloutBody,
    },
};

export default story;

export const usage = () => (
    <Callout>
        <CalloutBody>
            <h6>Faça sua matrícula agora mesmo</h6>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                praesentium officiis soluta explicabo quos reprehenderit
                nesciunt consectetur ducimus neque perferendis quia nemo
                suscipit quibusdam, deleniti libero laudantium dolores error
                commodi!
            </p>
            <CalloutActions>
                <Button color="primary">Matricular</Button>
            </CalloutActions>
        </CalloutBody>
        <CalloutMedia>
            <SpeedImage />
        </CalloutMedia>
    </Callout>
);
