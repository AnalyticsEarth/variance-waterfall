import initialProperties from "./initial-properties.js";
import template from "./template.html";
import definition from "./definition.js";
import controller from "./controller.js";
import paint from "./paint.js";
import resize from "./resize.js";
import support from './support.js';
import "./style.scss";

import picasso from 'picasso.js';
import pq from 'picasso-plugin-q';

export default window.define([], function() {

  return {
    initialProperties: initialProperties,
    template: template,
    support: support,
    definition: definition,
    controller: controller,
    paint: paint,
    resize: resize 
  };
});
