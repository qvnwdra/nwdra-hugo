import React from "react";
import CMS from "netlify-cms";

import HomePreview from "./cms-preview-templates/home";
import NewsPreview from "./cms-preview-templates/news";
import InformationPreview from "./cms-preview-templates/information";
import IssuesPreview from "./cms-preview-templates/issues";
import ContactPreview from "./cms-preview-templates/contact";


// Example of creating a custom color widget
class ColorControl extends React.Component {
  render() {
    return <input
        style={{height: "80px"}}
        type="color"
        value={this.props.value}
        onInput={(e) => this.props.onChange(e.target.value)}
    />;
  }
}

CMS.registerPreviewStyle("/css/main.css");
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("news", NewsPreview);
CMS.registerPreviewTemplate("information", InformationPreview);
CMS.registerPreviewTemplate("issues", IssuesPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.registerWidget("color", ColorControl);
