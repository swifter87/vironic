import videojs from "video.js";
// import "../node_modules/videojs-contrib-ads";
// import "../node_modules/videojs-ima";
var player = videojs("content_video");

var options = {
  id: "content_video",
  adTagUrl:
    "http://ad.doubleclick.net/ddm/pfadx/N30602.2245506CAPTIFY0/B22601828.257048111;sz=0x0;ord=%5Btimestamp%5D;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;dcmt=text/xml;dc_sdk_apis=%5BAPIFRAMEWORKS%5D;dc_omid_p=%5BOMIDPARTNER%5D"
};

player.ima(options);
// On mobile devices, you must call initializeAdDisplayContainer as the result
// of a user action (e.g. button click). If you do not make this call, the SDK
// will make it for you, but not as the result of a user action. For more info
// see our examples, all of which are set up to work on mobile devices.
// player.ima.initializeAdDisplayContainer();videojs.ima.js
