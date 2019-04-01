import * as React from "react";
import * as ReactDom from "react-dom";

import { hello } from "../componenets/hello";

ReactDom.render(
    <Hello compiler="TypeScript" framework="React" />,
);