import React from "react";
import Fade from "@mui/material/Fade";
import type { FadeProps } from "@mui/material/Fade";

const FadeTransition = React.forwardRef(function FadeTransition(
    props: FadeProps,
    ref: React.Ref<unknown>
) {
    return <Fade ref={ref} {...props} />;
});

export default FadeTransition;
