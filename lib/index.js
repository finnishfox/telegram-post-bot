'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{return Promise.resolve(value).then(function(value){step('next',value)},function(err){step('throw',err)})}}return step('next')})}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}/**
 * Class represents telegram bot
 */var TelegramPostBot=function(){/**
   * Create bot
   * @param {string} token - telegram bot's authentication token
   */function TelegramPostBot(token){_classCallCheck(this,TelegramPostBot);this.token=token}/**
   * Send message to telegram channel
   * @param chatId {string} - unique identifier for the target chat or username of the target channel (id or @username)
   * @param text {string} - text of message
   * @param parseMode {string} - mode: Markdown or HTML to show bold/italic text and inline URLS in message
   * @param webpagePreviewOff {boolean} - true to disable link previews
   */_createClass(TelegramPostBot,[{key:'sendMessage',value:function(){var _ref=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(chatId,text){var parseMode=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'HTML';var webpagePreviewOff=arguments.length>3&&arguments[3]!==undefined?arguments[3]:'false';var result,json,_json;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return fetch('https://api.telegram.org/bot'+this.token+'/sendMessage?chat_id='+chatId+'&text='+text+'&parse_mode='+parseMode+'&disable_web_page_preview='+webpagePreviewOff);case 2:result=_context.sent;if(!result.ok){_context.next=10;break}_context.next=6;return result.json();case 6:json=_context.sent;return _context.abrupt('return',json.result);case 10:_context.next=12;return result.json();case 12:_json=_context.sent;throw new Error(_json.description);case 14:case'end':return _context.stop();}}},_callee,this)}));function sendMessage(_x3,_x4){return _ref.apply(this,arguments)}return sendMessage}()}]);return TelegramPostBot}();exports.default=TelegramPostBot;