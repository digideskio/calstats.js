!function(){"use strict";var e=require("lodash");module.exports={transform:function(t){return e(t).map(function(e){return{summary:e.summary,start:new Date(Date.parse(e.start.dateTime)),end:new Date(e.end.dateTime)}}).value()}}}();