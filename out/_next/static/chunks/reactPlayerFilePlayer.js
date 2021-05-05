(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["reactPlayerFilePlayer"],{

/***/ "./node_modules/react-player/lazy/players/FilePlayer.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-player/lazy/players/FilePlayer.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-player/lazy/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/react-player/lazy/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HAS_NAVIGATOR = typeof navigator !== 'undefined';
var IS_IPAD_PRO = HAS_NAVIGATOR && navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
var IS_IOS = HAS_NAVIGATOR && (/iPad|iPhone|iPod/.test(navigator.userAgent) || IS_IPAD_PRO) && !window.MSStream;
var HLS_SDK_URL = 'https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js';
var HLS_GLOBAL = 'Hls';
var DASH_SDK_URL = 'https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js';
var DASH_GLOBAL = 'dashjs';
var FLV_SDK_URL = 'https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js';
var FLV_GLOBAL = 'flvjs';
var MATCH_DROPBOX_URL = /www\.dropbox\.com\/.+/;
var MATCH_CLOUDFLARE_STREAM = /https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/;
var REPLACE_CLOUDFLARE_STREAM = 'https://videodelivery.net/{id}/manifest/video.m3u8';

var FilePlayer = /*#__PURE__*/function (_Component) {
  _inherits(FilePlayer, _Component);

  var _super = _createSuper(FilePlayer);

  function FilePlayer() {
    var _this;

    _classCallCheck(this, FilePlayer);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(_args));

    _defineProperty(_assertThisInitialized(_this), "onReady", function () {
      var _this$props;

      return (_this$props = _this.props).onReady.apply(_this$props, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onPlay", function () {
      var _this$props2;

      return (_this$props2 = _this.props).onPlay.apply(_this$props2, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onBuffer", function () {
      var _this$props3;

      return (_this$props3 = _this.props).onBuffer.apply(_this$props3, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onBufferEnd", function () {
      var _this$props4;

      return (_this$props4 = _this.props).onBufferEnd.apply(_this$props4, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onPause", function () {
      var _this$props5;

      return (_this$props5 = _this.props).onPause.apply(_this$props5, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onEnded", function () {
      var _this$props6;

      return (_this$props6 = _this.props).onEnded.apply(_this$props6, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onError", function () {
      var _this$props7;

      return (_this$props7 = _this.props).onError.apply(_this$props7, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onEnablePIP", function () {
      var _this$props8;

      return (_this$props8 = _this.props).onEnablePIP.apply(_this$props8, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onDisablePIP", function (e) {
      var _this$props9 = _this.props,
          onDisablePIP = _this$props9.onDisablePIP,
          playing = _this$props9.playing;
      onDisablePIP(e);

      if (playing) {
        _this.play();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onPresentationModeChange", function (e) {
      if (_this.player && (0, _utils.supportsWebKitPresentationMode)(_this.player)) {
        var webkitPresentationMode = _this.player.webkitPresentationMode;

        if (webkitPresentationMode === 'picture-in-picture') {
          _this.onEnablePIP(e);
        } else if (webkitPresentationMode === 'inline') {
          _this.onDisablePIP(e);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSeek", function (e) {
      _this.props.onSeek(e.target.currentTime);
    });

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.player.muted = true;
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      _this.player.muted = false;
    });

    _defineProperty(_assertThisInitialized(_this), "renderSourceElement", function (source, index) {
      if (typeof source === 'string') {
        return /*#__PURE__*/_react["default"].createElement("source", {
          key: index,
          src: source
        });
      }

      return /*#__PURE__*/_react["default"].createElement("source", _extends({
        key: index
      }, source));
    });

    _defineProperty(_assertThisInitialized(_this), "renderTrack", function (track, index) {
      return /*#__PURE__*/_react["default"].createElement("track", _extends({
        key: index
      }, track));
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (player) {
      if (_this.player) {
        // Store previous player to be used by removeListeners()
        _this.prevPlayer = _this.player;
      }

      _this.player = player;
    });

    return _this;
  }

  _createClass(FilePlayer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
      this.addListeners(this.player);

      if (IS_IOS) {
        this.player.load();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.shouldUseAudio(this.props) !== this.shouldUseAudio(prevProps)) {
        this.removeListeners(this.prevPlayer, prevProps.url);
        this.addListeners(this.player);
      }

      if (this.props.url !== prevProps.url && !(0, _utils.isMediaStream)(this.props.url)) {
        this.player.srcObject = null;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeListeners(this.player);

      if (this.hls) {
        this.hls.destroy();
      }
    }
  }, {
    key: "addListeners",
    value: function addListeners(player) {
      var _this$props10 = this.props,
          url = _this$props10.url,
          playsinline = _this$props10.playsinline;
      player.addEventListener('play', this.onPlay);
      player.addEventListener('waiting', this.onBuffer);
      player.addEventListener('playing', this.onBufferEnd);
      player.addEventListener('pause', this.onPause);
      player.addEventListener('seeked', this.onSeek);
      player.addEventListener('ended', this.onEnded);
      player.addEventListener('error', this.onError);
      player.addEventListener('enterpictureinpicture', this.onEnablePIP);
      player.addEventListener('leavepictureinpicture', this.onDisablePIP);
      player.addEventListener('webkitpresentationmodechanged', this.onPresentationModeChange);

      if (!this.shouldUseHLS(url)) {
        // onReady is handled by hls.js
        player.addEventListener('canplay', this.onReady);
      }

      if (playsinline) {
        player.setAttribute('playsinline', '');
        player.setAttribute('webkit-playsinline', '');
        player.setAttribute('x5-playsinline', '');
      }
    }
  }, {
    key: "removeListeners",
    value: function removeListeners(player, url) {
      player.removeEventListener('canplay', this.onReady);
      player.removeEventListener('play', this.onPlay);
      player.removeEventListener('waiting', this.onBuffer);
      player.removeEventListener('playing', this.onBufferEnd);
      player.removeEventListener('pause', this.onPause);
      player.removeEventListener('seeked', this.onSeek);
      player.removeEventListener('ended', this.onEnded);
      player.removeEventListener('error', this.onError);
      player.removeEventListener('enterpictureinpicture', this.onEnablePIP);
      player.removeEventListener('leavepictureinpicture', this.onDisablePIP);
      player.removeEventListener('webkitpresentationmodechanged', this.onPresentationModeChange);

      if (!this.shouldUseHLS(url)) {
        // onReady is handled by hls.js
        player.removeEventListener('canplay', this.onReady);
      }
    } // Proxy methods to prevent listener leaks

  }, {
    key: "shouldUseAudio",
    value: function shouldUseAudio(props) {
      if (props.config.forceVideo) {
        return false;
      }

      if (props.config.attributes.poster) {
        return false; // Use <video> so that poster is shown
      }

      return _patterns.AUDIO_EXTENSIONS.test(props.url) || props.config.forceAudio;
    }
  }, {
    key: "shouldUseHLS",
    value: function shouldUseHLS(url) {
      if (this.props.config.forceHLS) {
        return true;
      }

      if (IS_IOS) {
        return false;
      }

      return _patterns.HLS_EXTENSIONS.test(url) || MATCH_CLOUDFLARE_STREAM.test(url);
    }
  }, {
    key: "shouldUseDASH",
    value: function shouldUseDASH(url) {
      return _patterns.DASH_EXTENSIONS.test(url) || this.props.config.forceDASH;
    }
  }, {
    key: "shouldUseFLV",
    value: function shouldUseFLV(url) {
      return _patterns.FLV_EXTENSIONS.test(url) || this.props.config.forceFLV;
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this2 = this;

      var _this$props$config = this.props.config,
          hlsVersion = _this$props$config.hlsVersion,
          hlsOptions = _this$props$config.hlsOptions,
          dashVersion = _this$props$config.dashVersion,
          flvVersion = _this$props$config.flvVersion;

      if (this.hls) {
        this.hls.destroy();
      }

      if (this.dash) {
        this.dash.reset();
      }

      if (this.shouldUseHLS(url)) {
        (0, _utils.getSDK)(HLS_SDK_URL.replace('VERSION', hlsVersion), HLS_GLOBAL).then(function (Hls) {
          _this2.hls = new Hls(hlsOptions);

          _this2.hls.on(Hls.Events.MANIFEST_PARSED, function () {
            _this2.props.onReady();
          });

          _this2.hls.on(Hls.Events.ERROR, function (e, data) {
            _this2.props.onError(e, data, _this2.hls, Hls);
          });

          if (MATCH_CLOUDFLARE_STREAM.test(url)) {
            var id = url.match(MATCH_CLOUDFLARE_STREAM)[1];

            _this2.hls.loadSource(REPLACE_CLOUDFLARE_STREAM.replace('{id}', id));
          } else {
            _this2.hls.loadSource(url);
          }

          _this2.hls.attachMedia(_this2.player);

          _this2.props.onLoaded();
        });
      }

      if (this.shouldUseDASH(url)) {
        (0, _utils.getSDK)(DASH_SDK_URL.replace('VERSION', dashVersion), DASH_GLOBAL).then(function (dashjs) {
          _this2.dash = dashjs.MediaPlayer().create();

          _this2.dash.initialize(_this2.player, url, _this2.props.playing);

          _this2.dash.on('error', _this2.props.onError);

          if (parseInt(dashVersion) < 3) {
            _this2.dash.getDebug().setLogToBrowserConsole(false);
          } else {
            _this2.dash.updateSettings({
              debug: {
                logLevel: dashjs.Debug.LOG_LEVEL_NONE
              }
            });
          }

          _this2.props.onLoaded();
        });
      }

      if (this.shouldUseFLV(url)) {
        (0, _utils.getSDK)(FLV_SDK_URL.replace('VERSION', flvVersion), FLV_GLOBAL).then(function (flvjs) {
          _this2.flv = flvjs.createPlayer({
            type: 'flv',
            url: url
          });

          _this2.flv.attachMediaElement(_this2.player);

          _this2.flv.load();

          _this2.props.onLoaded();
        });
      }

      if (url instanceof Array) {
        // When setting new urls (<source>) on an already loaded video,
        // HTMLMediaElement.load() is needed to reset the media element
        // and restart the media resource. Just replacing children source
        // dom nodes is not enough
        this.player.load();
      } else if ((0, _utils.isMediaStream)(url)) {
        try {
          this.player.srcObject = url;
        } catch (e) {
          this.player.src = window.URL.createObjectURL(url);
        }
      }
    }
  }, {
    key: "play",
    value: function play() {
      var promise = this.player.play();

      if (promise) {
        promise["catch"](this.props.onError);
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      this.player.pause();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.player.removeAttribute('src');

      if (this.dash) {
        this.dash.reset();
      }
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.player.currentTime = seconds;
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.player.volume = fraction;
    }
  }, {
    key: "enablePIP",
    value: function enablePIP() {
      if (this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player) {
        this.player.requestPictureInPicture();
      } else if ((0, _utils.supportsWebKitPresentationMode)(this.player) && this.player.webkitPresentationMode !== 'picture-in-picture') {
        this.player.webkitSetPresentationMode('picture-in-picture');
      }
    }
  }, {
    key: "disablePIP",
    value: function disablePIP() {
      if (document.exitPictureInPicture && document.pictureInPictureElement === this.player) {
        document.exitPictureInPicture();
      } else if ((0, _utils.supportsWebKitPresentationMode)(this.player) && this.player.webkitPresentationMode !== 'inline') {
        this.player.webkitSetPresentationMode('inline');
      }
    }
  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(rate) {
      this.player.playbackRate = rate;
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      if (!this.player) return null;
      var _this$player = this.player,
          duration = _this$player.duration,
          seekable = _this$player.seekable; // on iOS, live streams return Infinity for the duration
      // so instead we use the end of the seekable timerange

      if (duration === Infinity && seekable.length > 0) {
        return seekable.end(seekable.length - 1);
      }

      return duration;
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      if (!this.player) return null;
      return this.player.currentTime;
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      if (!this.player) return null;
      var buffered = this.player.buffered;

      if (buffered.length === 0) {
        return 0;
      }

      var end = buffered.end(buffered.length - 1);
      var duration = this.getDuration();

      if (end > duration) {
        return duration;
      }

      return end;
    }
  }, {
    key: "getSource",
    value: function getSource(url) {
      var useHLS = this.shouldUseHLS(url);
      var useDASH = this.shouldUseDASH(url);
      var useFLV = this.shouldUseFLV(url);

      if (url instanceof Array || (0, _utils.isMediaStream)(url) || useHLS || useDASH || useFLV) {
        return undefined;
      }

      if (MATCH_DROPBOX_URL.test(url)) {
        return url.replace('www.dropbox.com', 'dl.dropboxusercontent.com');
      }

      return url;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props11 = this.props,
          url = _this$props11.url,
          playing = _this$props11.playing,
          loop = _this$props11.loop,
          controls = _this$props11.controls,
          muted = _this$props11.muted,
          config = _this$props11.config,
          width = _this$props11.width,
          height = _this$props11.height;
      var useAudio = this.shouldUseAudio(this.props);
      var Element = useAudio ? 'audio' : 'video';
      var style = {
        width: width === 'auto' ? width : '100%',
        height: height === 'auto' ? height : '100%'
      };
      return /*#__PURE__*/_react["default"].createElement(Element, _extends({
        ref: this.ref,
        src: this.getSource(url),
        style: style,
        preload: "auto",
        autoPlay: playing || undefined,
        controls: controls,
        muted: muted,
        loop: loop
      }, config.attributes), url instanceof Array && url.map(this.renderSourceElement), config.tracks.map(this.renderTrack));
    }
  }]);

  return FilePlayer;
}(_react.Component);

exports["default"] = FilePlayer;

_defineProperty(FilePlayer, "displayName", 'FilePlayer');

_defineProperty(FilePlayer, "canPlay", _patterns.canPlay.file);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXBsYXllci9sYXp5L3BsYXllcnMvRmlsZVBsYXllci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWIsdUJBQXVCLDJCQUEyQiwyRUFBMkUsa0NBQWtDLG1CQUFtQixHQUFHLEVBQUUsT0FBTyxrQ0FBa0MsOEhBQThILEdBQUcsRUFBRSxxQkFBcUI7O0FBRXhYO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEscUNBQXFDLG1CQUFPLENBQUMsNENBQU87O0FBRXBELGFBQWEsbUJBQU8sQ0FBQywyREFBVTs7QUFFL0IsZ0JBQWdCLG1CQUFPLENBQUMsaUVBQWE7O0FBRXJDLHFDQUFxQyxnREFBZ0QsMkJBQTJCLGlFQUFpRSxjQUFjLEdBQUcsY0FBYzs7QUFFaE4sdUNBQXVDLDZCQUE2QixZQUFZLEVBQUUsOEVBQThFLFNBQVMsa0JBQWtCLEVBQUUsd0NBQXdDLCtCQUErQix1QkFBdUIsRUFBRSxpQkFBaUIsc0ZBQXNGLHVCQUF1QixzREFBc0QscUZBQXFGLHNDQUFzQywwQ0FBMEMsRUFBRSxPQUFPLHdCQUF3QixFQUFFLEVBQUUsRUFBRSx5QkFBeUIsYUFBYSx3QkFBd0IsRUFBRSxlQUFlOztBQUU1dUIscUJBQXFCLGdEQUFnRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWUsR0FBRyx3Q0FBd0M7O0FBRTNULGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFOztBQUUzVCw2REFBNkQsc0VBQXNFLDhEQUE4RCxvQkFBb0I7O0FBRXJOLDBDQUEwQywrREFBK0QsMkVBQTJFLEVBQUUseUVBQXlFLGVBQWUsc0RBQXNELEVBQUUsRUFBRSx1REFBdUQ7O0FBRS9YLGdDQUFnQyw0RUFBNEUsaUJBQWlCLFVBQVUsR0FBRyw4QkFBOEI7O0FBRXhLLGdDQUFnQyw2REFBNkQseUNBQXlDLDhDQUE4QyxpQ0FBaUMsbURBQW1ELHlEQUF5RCxFQUFFLE9BQU8sdUNBQXVDLEVBQUUsaURBQWlELEdBQUc7O0FBRXZhLGlEQUFpRCwwRUFBMEUsYUFBYSxFQUFFLHFDQUFxQzs7QUFFL0ssdUNBQXVDLHVCQUF1Qix1RkFBdUYsRUFBRSxhQUFhOztBQUVwSyxzQ0FBc0Msd0VBQXdFLDBDQUEwQyw4Q0FBOEMsTUFBTSx3RUFBd0UsR0FBRyxhQUFhLEVBQUUsWUFBWSxjQUFjLEVBQUU7O0FBRWxVLDZCQUE2QixnR0FBZ0csZ0RBQWdELEdBQUcsMkJBQTJCOztBQUUzTSwyQ0FBMkMsa0JBQWtCLGtDQUFrQyxxRUFBcUUsRUFBRSxFQUFFLE9BQU8sa0JBQWtCLEVBQUUsWUFBWTs7QUFFL007QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxHQUFHOztBQUUvRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsd0VBQXdFLGFBQWE7QUFDckY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTs7QUFFQSxzRUFBc0UsR0FBRztBQUN6RSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQSwrRCIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0UGxheWVyRmlsZVBsYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5cbnZhciBfcGF0dGVybnMgPSByZXF1aXJlKFwiLi4vcGF0dGVybnNcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpOyBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IHJldHVybiBjYWNoZTsgfTsgcmV0dXJuIGNhY2hlOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBIQVNfTkFWSUdBVE9SID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCc7XG52YXIgSVNfSVBBRF9QUk8gPSBIQVNfTkFWSUdBVE9SICYmIG5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gJ01hY0ludGVsJyAmJiBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAxO1xudmFyIElTX0lPUyA9IEhBU19OQVZJR0FUT1IgJiYgKC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpIHx8IElTX0lQQURfUFJPKSAmJiAhd2luZG93Lk1TU3RyZWFtO1xudmFyIEhMU19TREtfVVJMID0gJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vaGxzLmpzQFZFUlNJT04vZGlzdC9obHMubWluLmpzJztcbnZhciBITFNfR0xPQkFMID0gJ0hscyc7XG52YXIgREFTSF9TREtfVVJMID0gJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2Rhc2hqcy9WRVJTSU9OL2Rhc2guYWxsLm1pbi5qcyc7XG52YXIgREFTSF9HTE9CQUwgPSAnZGFzaGpzJztcbnZhciBGTFZfU0RLX1VSTCA9ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Zsdi5qc0BWRVJTSU9OL2Rpc3QvZmx2Lm1pbi5qcyc7XG52YXIgRkxWX0dMT0JBTCA9ICdmbHZqcyc7XG52YXIgTUFUQ0hfRFJPUEJPWF9VUkwgPSAvd3d3XFwuZHJvcGJveFxcLmNvbVxcLy4rLztcbnZhciBNQVRDSF9DTE9VREZMQVJFX1NUUkVBTSA9IC9odHRwczpcXC9cXC93YXRjaFxcLmNsb3VkZmxhcmVzdHJlYW1cXC5jb21cXC8oW2EtejAtOV0rKS87XG52YXIgUkVQTEFDRV9DTE9VREZMQVJFX1NUUkVBTSA9ICdodHRwczovL3ZpZGVvZGVsaXZlcnkubmV0L3tpZH0vbWFuaWZlc3QvdmlkZW8ubTN1OCc7XG5cbnZhciBGaWxlUGxheWVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhGaWxlUGxheWVyLCBfQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEZpbGVQbGF5ZXIpO1xuXG4gIGZ1bmN0aW9uIEZpbGVQbGF5ZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZpbGVQbGF5ZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIF9hcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgX2FyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoX2FyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvblJlYWR5XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcztcblxuICAgICAgcmV0dXJuIChfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzKS5vblJlYWR5LmFwcGx5KF90aGlzJHByb3BzLCBhcmd1bWVudHMpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uUGxheVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyO1xuXG4gICAgICByZXR1cm4gKF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzKS5vblBsYXkuYXBwbHkoX3RoaXMkcHJvcHMyLCBhcmd1bWVudHMpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uQnVmZmVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczM7XG5cbiAgICAgIHJldHVybiAoX3RoaXMkcHJvcHMzID0gX3RoaXMucHJvcHMpLm9uQnVmZmVyLmFwcGx5KF90aGlzJHByb3BzMywgYXJndW1lbnRzKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbkJ1ZmZlckVuZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM0O1xuXG4gICAgICByZXR1cm4gKF90aGlzJHByb3BzNCA9IF90aGlzLnByb3BzKS5vbkJ1ZmZlckVuZC5hcHBseShfdGhpcyRwcm9wczQsIGFyZ3VtZW50cyk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25QYXVzZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM1O1xuXG4gICAgICByZXR1cm4gKF90aGlzJHByb3BzNSA9IF90aGlzLnByb3BzKS5vblBhdXNlLmFwcGx5KF90aGlzJHByb3BzNSwgYXJndW1lbnRzKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbkVuZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczY7XG5cbiAgICAgIHJldHVybiAoX3RoaXMkcHJvcHM2ID0gX3RoaXMucHJvcHMpLm9uRW5kZWQuYXBwbHkoX3RoaXMkcHJvcHM2LCBhcmd1bWVudHMpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uRXJyb3JcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNztcblxuICAgICAgcmV0dXJuIChfdGhpcyRwcm9wczcgPSBfdGhpcy5wcm9wcykub25FcnJvci5hcHBseShfdGhpcyRwcm9wczcsIGFyZ3VtZW50cyk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25FbmFibGVQSVBcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzODtcblxuICAgICAgcmV0dXJuIChfdGhpcyRwcm9wczggPSBfdGhpcy5wcm9wcykub25FbmFibGVQSVAuYXBwbHkoX3RoaXMkcHJvcHM4LCBhcmd1bWVudHMpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uRGlzYWJsZVBJUFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzOSA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG9uRGlzYWJsZVBJUCA9IF90aGlzJHByb3BzOS5vbkRpc2FibGVQSVAsXG4gICAgICAgICAgcGxheWluZyA9IF90aGlzJHByb3BzOS5wbGF5aW5nO1xuICAgICAgb25EaXNhYmxlUElQKGUpO1xuXG4gICAgICBpZiAocGxheWluZykge1xuICAgICAgICBfdGhpcy5wbGF5KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25QcmVzZW50YXRpb25Nb2RlQ2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoX3RoaXMucGxheWVyICYmICgwLCBfdXRpbHMuc3VwcG9ydHNXZWJLaXRQcmVzZW50YXRpb25Nb2RlKShfdGhpcy5wbGF5ZXIpKSB7XG4gICAgICAgIHZhciB3ZWJraXRQcmVzZW50YXRpb25Nb2RlID0gX3RoaXMucGxheWVyLndlYmtpdFByZXNlbnRhdGlvbk1vZGU7XG5cbiAgICAgICAgaWYgKHdlYmtpdFByZXNlbnRhdGlvbk1vZGUgPT09ICdwaWN0dXJlLWluLXBpY3R1cmUnKSB7XG4gICAgICAgICAgX3RoaXMub25FbmFibGVQSVAoZSk7XG4gICAgICAgIH0gZWxzZSBpZiAod2Via2l0UHJlc2VudGF0aW9uTW9kZSA9PT0gJ2lubGluZScpIHtcbiAgICAgICAgICBfdGhpcy5vbkRpc2FibGVQSVAoZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvblNlZWtcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIF90aGlzLnByb3BzLm9uU2VlayhlLnRhcmdldC5jdXJyZW50VGltZSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwibXV0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5wbGF5ZXIubXV0ZWQgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInVubXV0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5wbGF5ZXIubXV0ZWQgPSBmYWxzZTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJyZW5kZXJTb3VyY2VFbGVtZW50XCIsIGZ1bmN0aW9uIChzb3VyY2UsIGluZGV4KSB7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzb3VyY2VcIiwge1xuICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgc3JjOiBzb3VyY2VcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic291cmNlXCIsIF9leHRlbmRzKHtcbiAgICAgICAga2V5OiBpbmRleFxuICAgICAgfSwgc291cmNlKSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicmVuZGVyVHJhY2tcIiwgZnVuY3Rpb24gKHRyYWNrLCBpbmRleCkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJ0cmFja1wiLCBfZXh0ZW5kcyh7XG4gICAgICAgIGtleTogaW5kZXhcbiAgICAgIH0sIHRyYWNrKSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicmVmXCIsIGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgICAgIGlmIChfdGhpcy5wbGF5ZXIpIHtcbiAgICAgICAgLy8gU3RvcmUgcHJldmlvdXMgcGxheWVyIHRvIGJlIHVzZWQgYnkgcmVtb3ZlTGlzdGVuZXJzKClcbiAgICAgICAgX3RoaXMucHJldlBsYXllciA9IF90aGlzLnBsYXllcjtcbiAgICAgIH1cblxuICAgICAgX3RoaXMucGxheWVyID0gcGxheWVyO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEZpbGVQbGF5ZXIsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5wcm9wcy5vbk1vdW50ICYmIHRoaXMucHJvcHMub25Nb3VudCh0aGlzKTtcbiAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKHRoaXMucGxheWVyKTtcblxuICAgICAgaWYgKElTX0lPUykge1xuICAgICAgICB0aGlzLnBsYXllci5sb2FkKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICBpZiAodGhpcy5zaG91bGRVc2VBdWRpbyh0aGlzLnByb3BzKSAhPT0gdGhpcy5zaG91bGRVc2VBdWRpbyhwcmV2UHJvcHMpKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKHRoaXMucHJldlBsYXllciwgcHJldlByb3BzLnVybCk7XG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKHRoaXMucGxheWVyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMudXJsICE9PSBwcmV2UHJvcHMudXJsICYmICEoMCwgX3V0aWxzLmlzTWVkaWFTdHJlYW0pKHRoaXMucHJvcHMudXJsKSkge1xuICAgICAgICB0aGlzLnBsYXllci5zcmNPYmplY3QgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKHRoaXMucGxheWVyKTtcblxuICAgICAgaWYgKHRoaXMuaGxzKSB7XG4gICAgICAgIHRoaXMuaGxzLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkTGlzdGVuZXJzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZExpc3RlbmVycyhwbGF5ZXIpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczEwID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICB1cmwgPSBfdGhpcyRwcm9wczEwLnVybCxcbiAgICAgICAgICBwbGF5c2lubGluZSA9IF90aGlzJHByb3BzMTAucGxheXNpbmxpbmU7XG4gICAgICBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcigncGxheScsIHRoaXMub25QbGF5KTtcbiAgICAgIHBsYXllci5hZGRFdmVudExpc3RlbmVyKCd3YWl0aW5nJywgdGhpcy5vbkJ1ZmZlcik7XG4gICAgICBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcigncGxheWluZycsIHRoaXMub25CdWZmZXJFbmQpO1xuICAgICAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3BhdXNlJywgdGhpcy5vblBhdXNlKTtcbiAgICAgIHBsYXllci5hZGRFdmVudExpc3RlbmVyKCdzZWVrZWQnLCB0aGlzLm9uU2Vlayk7XG4gICAgICBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCB0aGlzLm9uRW5kZWQpO1xuICAgICAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgdGhpcy5vbkVycm9yKTtcbiAgICAgIHBsYXllci5hZGRFdmVudExpc3RlbmVyKCdlbnRlcnBpY3R1cmVpbnBpY3R1cmUnLCB0aGlzLm9uRW5hYmxlUElQKTtcbiAgICAgIHBsYXllci5hZGRFdmVudExpc3RlbmVyKCdsZWF2ZXBpY3R1cmVpbnBpY3R1cmUnLCB0aGlzLm9uRGlzYWJsZVBJUCk7XG4gICAgICBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0cHJlc2VudGF0aW9ubW9kZWNoYW5nZWQnLCB0aGlzLm9uUHJlc2VudGF0aW9uTW9kZUNoYW5nZSk7XG5cbiAgICAgIGlmICghdGhpcy5zaG91bGRVc2VITFModXJsKSkge1xuICAgICAgICAvLyBvblJlYWR5IGlzIGhhbmRsZWQgYnkgaGxzLmpzXG4gICAgICAgIHBsYXllci5hZGRFdmVudExpc3RlbmVyKCdjYW5wbGF5JywgdGhpcy5vblJlYWR5KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBsYXlzaW5saW5lKSB7XG4gICAgICAgIHBsYXllci5zZXRBdHRyaWJ1dGUoJ3BsYXlzaW5saW5lJywgJycpO1xuICAgICAgICBwbGF5ZXIuc2V0QXR0cmlidXRlKCd3ZWJraXQtcGxheXNpbmxpbmUnLCAnJyk7XG4gICAgICAgIHBsYXllci5zZXRBdHRyaWJ1dGUoJ3g1LXBsYXlzaW5saW5lJywgJycpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVMaXN0ZW5lcnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKHBsYXllciwgdXJsKSB7XG4gICAgICBwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2FucGxheScsIHRoaXMub25SZWFkeSk7XG4gICAgICBwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigncGxheScsIHRoaXMub25QbGF5KTtcbiAgICAgIHBsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCd3YWl0aW5nJywgdGhpcy5vbkJ1ZmZlcik7XG4gICAgICBwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigncGxheWluZycsIHRoaXMub25CdWZmZXJFbmQpO1xuICAgICAgcGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BhdXNlJywgdGhpcy5vblBhdXNlKTtcbiAgICAgIHBsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdzZWVrZWQnLCB0aGlzLm9uU2Vlayk7XG4gICAgICBwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignZW5kZWQnLCB0aGlzLm9uRW5kZWQpO1xuICAgICAgcGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgdGhpcy5vbkVycm9yKTtcbiAgICAgIHBsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdlbnRlcnBpY3R1cmVpbnBpY3R1cmUnLCB0aGlzLm9uRW5hYmxlUElQKTtcbiAgICAgIHBsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdsZWF2ZXBpY3R1cmVpbnBpY3R1cmUnLCB0aGlzLm9uRGlzYWJsZVBJUCk7XG4gICAgICBwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2Via2l0cHJlc2VudGF0aW9ubW9kZWNoYW5nZWQnLCB0aGlzLm9uUHJlc2VudGF0aW9uTW9kZUNoYW5nZSk7XG5cbiAgICAgIGlmICghdGhpcy5zaG91bGRVc2VITFModXJsKSkge1xuICAgICAgICAvLyBvblJlYWR5IGlzIGhhbmRsZWQgYnkgaGxzLmpzXG4gICAgICAgIHBsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdjYW5wbGF5JywgdGhpcy5vblJlYWR5KTtcbiAgICAgIH1cbiAgICB9IC8vIFByb3h5IG1ldGhvZHMgdG8gcHJldmVudCBsaXN0ZW5lciBsZWFrc1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2hvdWxkVXNlQXVkaW9cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkVXNlQXVkaW8ocHJvcHMpIHtcbiAgICAgIGlmIChwcm9wcy5jb25maWcuZm9yY2VWaWRlbykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5jb25maWcuYXR0cmlidXRlcy5wb3N0ZXIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBVc2UgPHZpZGVvPiBzbyB0aGF0IHBvc3RlciBpcyBzaG93blxuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3BhdHRlcm5zLkFVRElPX0VYVEVOU0lPTlMudGVzdChwcm9wcy51cmwpIHx8IHByb3BzLmNvbmZpZy5mb3JjZUF1ZGlvO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzaG91bGRVc2VITFNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkVXNlSExTKHVybCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuY29uZmlnLmZvcmNlSExTKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoSVNfSU9TKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9wYXR0ZXJucy5ITFNfRVhURU5TSU9OUy50ZXN0KHVybCkgfHwgTUFUQ0hfQ0xPVURGTEFSRV9TVFJFQU0udGVzdCh1cmwpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzaG91bGRVc2VEQVNIXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZFVzZURBU0godXJsKSB7XG4gICAgICByZXR1cm4gX3BhdHRlcm5zLkRBU0hfRVhURU5TSU9OUy50ZXN0KHVybCkgfHwgdGhpcy5wcm9wcy5jb25maWcuZm9yY2VEQVNIO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzaG91bGRVc2VGTFZcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkVXNlRkxWKHVybCkge1xuICAgICAgcmV0dXJuIF9wYXR0ZXJucy5GTFZfRVhURU5TSU9OUy50ZXN0KHVybCkgfHwgdGhpcy5wcm9wcy5jb25maWcuZm9yY2VGTFY7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxvYWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZCh1cmwpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgX3RoaXMkcHJvcHMkY29uZmlnID0gdGhpcy5wcm9wcy5jb25maWcsXG4gICAgICAgICAgaGxzVmVyc2lvbiA9IF90aGlzJHByb3BzJGNvbmZpZy5obHNWZXJzaW9uLFxuICAgICAgICAgIGhsc09wdGlvbnMgPSBfdGhpcyRwcm9wcyRjb25maWcuaGxzT3B0aW9ucyxcbiAgICAgICAgICBkYXNoVmVyc2lvbiA9IF90aGlzJHByb3BzJGNvbmZpZy5kYXNoVmVyc2lvbixcbiAgICAgICAgICBmbHZWZXJzaW9uID0gX3RoaXMkcHJvcHMkY29uZmlnLmZsdlZlcnNpb247XG5cbiAgICAgIGlmICh0aGlzLmhscykge1xuICAgICAgICB0aGlzLmhscy5kZXN0cm95KCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmRhc2gpIHtcbiAgICAgICAgdGhpcy5kYXNoLnJlc2V0KCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnNob3VsZFVzZUhMUyh1cmwpKSB7XG4gICAgICAgICgwLCBfdXRpbHMuZ2V0U0RLKShITFNfU0RLX1VSTC5yZXBsYWNlKCdWRVJTSU9OJywgaGxzVmVyc2lvbiksIEhMU19HTE9CQUwpLnRoZW4oZnVuY3Rpb24gKEhscykge1xuICAgICAgICAgIF90aGlzMi5obHMgPSBuZXcgSGxzKGhsc09wdGlvbnMpO1xuXG4gICAgICAgICAgX3RoaXMyLmhscy5vbihIbHMuRXZlbnRzLk1BTklGRVNUX1BBUlNFRCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMyLnByb3BzLm9uUmVhZHkoKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIF90aGlzMi5obHMub24oSGxzLkV2ZW50cy5FUlJPUiwgZnVuY3Rpb24gKGUsIGRhdGEpIHtcbiAgICAgICAgICAgIF90aGlzMi5wcm9wcy5vbkVycm9yKGUsIGRhdGEsIF90aGlzMi5obHMsIEhscyk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAoTUFUQ0hfQ0xPVURGTEFSRV9TVFJFQU0udGVzdCh1cmwpKSB7XG4gICAgICAgICAgICB2YXIgaWQgPSB1cmwubWF0Y2goTUFUQ0hfQ0xPVURGTEFSRV9TVFJFQU0pWzFdO1xuXG4gICAgICAgICAgICBfdGhpczIuaGxzLmxvYWRTb3VyY2UoUkVQTEFDRV9DTE9VREZMQVJFX1NUUkVBTS5yZXBsYWNlKCd7aWR9JywgaWQpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMyLmhscy5sb2FkU291cmNlKHVybCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3RoaXMyLmhscy5hdHRhY2hNZWRpYShfdGhpczIucGxheWVyKTtcblxuICAgICAgICAgIF90aGlzMi5wcm9wcy5vbkxvYWRlZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc2hvdWxkVXNlREFTSCh1cmwpKSB7XG4gICAgICAgICgwLCBfdXRpbHMuZ2V0U0RLKShEQVNIX1NES19VUkwucmVwbGFjZSgnVkVSU0lPTicsIGRhc2hWZXJzaW9uKSwgREFTSF9HTE9CQUwpLnRoZW4oZnVuY3Rpb24gKGRhc2hqcykge1xuICAgICAgICAgIF90aGlzMi5kYXNoID0gZGFzaGpzLk1lZGlhUGxheWVyKCkuY3JlYXRlKCk7XG5cbiAgICAgICAgICBfdGhpczIuZGFzaC5pbml0aWFsaXplKF90aGlzMi5wbGF5ZXIsIHVybCwgX3RoaXMyLnByb3BzLnBsYXlpbmcpO1xuXG4gICAgICAgICAgX3RoaXMyLmRhc2gub24oJ2Vycm9yJywgX3RoaXMyLnByb3BzLm9uRXJyb3IpO1xuXG4gICAgICAgICAgaWYgKHBhcnNlSW50KGRhc2hWZXJzaW9uKSA8IDMpIHtcbiAgICAgICAgICAgIF90aGlzMi5kYXNoLmdldERlYnVnKCkuc2V0TG9nVG9Ccm93c2VyQ29uc29sZShmYWxzZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzMi5kYXNoLnVwZGF0ZVNldHRpbmdzKHtcbiAgICAgICAgICAgICAgZGVidWc6IHtcbiAgICAgICAgICAgICAgICBsb2dMZXZlbDogZGFzaGpzLkRlYnVnLkxPR19MRVZFTF9OT05FXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzMi5wcm9wcy5vbkxvYWRlZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc2hvdWxkVXNlRkxWKHVybCkpIHtcbiAgICAgICAgKDAsIF91dGlscy5nZXRTREspKEZMVl9TREtfVVJMLnJlcGxhY2UoJ1ZFUlNJT04nLCBmbHZWZXJzaW9uKSwgRkxWX0dMT0JBTCkudGhlbihmdW5jdGlvbiAoZmx2anMpIHtcbiAgICAgICAgICBfdGhpczIuZmx2ID0gZmx2anMuY3JlYXRlUGxheWVyKHtcbiAgICAgICAgICAgIHR5cGU6ICdmbHYnLFxuICAgICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIF90aGlzMi5mbHYuYXR0YWNoTWVkaWFFbGVtZW50KF90aGlzMi5wbGF5ZXIpO1xuXG4gICAgICAgICAgX3RoaXMyLmZsdi5sb2FkKCk7XG5cbiAgICAgICAgICBfdGhpczIucHJvcHMub25Mb2FkZWQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh1cmwgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAvLyBXaGVuIHNldHRpbmcgbmV3IHVybHMgKDxzb3VyY2U+KSBvbiBhbiBhbHJlYWR5IGxvYWRlZCB2aWRlbyxcbiAgICAgICAgLy8gSFRNTE1lZGlhRWxlbWVudC5sb2FkKCkgaXMgbmVlZGVkIHRvIHJlc2V0IHRoZSBtZWRpYSBlbGVtZW50XG4gICAgICAgIC8vIGFuZCByZXN0YXJ0IHRoZSBtZWRpYSByZXNvdXJjZS4gSnVzdCByZXBsYWNpbmcgY2hpbGRyZW4gc291cmNlXG4gICAgICAgIC8vIGRvbSBub2RlcyBpcyBub3QgZW5vdWdoXG4gICAgICAgIHRoaXMucGxheWVyLmxvYWQoKTtcbiAgICAgIH0gZWxzZSBpZiAoKDAsIF91dGlscy5pc01lZGlhU3RyZWFtKSh1cmwpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5wbGF5ZXIuc3JjT2JqZWN0ID0gdXJsO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdGhpcy5wbGF5ZXIuc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwodXJsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwbGF5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgICB2YXIgcHJvbWlzZSA9IHRoaXMucGxheWVyLnBsYXkoKTtcblxuICAgICAgaWYgKHByb21pc2UpIHtcbiAgICAgICAgcHJvbWlzZVtcImNhdGNoXCJdKHRoaXMucHJvcHMub25FcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInBhdXNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgdGhpcy5wbGF5ZXIucGF1c2UoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RvcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgdGhpcy5wbGF5ZXIucmVtb3ZlQXR0cmlidXRlKCdzcmMnKTtcblxuICAgICAgaWYgKHRoaXMuZGFzaCkge1xuICAgICAgICB0aGlzLmRhc2gucmVzZXQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2Vla1RvXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlZWtUbyhzZWNvbmRzKSB7XG4gICAgICB0aGlzLnBsYXllci5jdXJyZW50VGltZSA9IHNlY29uZHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFZvbHVtZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRWb2x1bWUoZnJhY3Rpb24pIHtcbiAgICAgIHRoaXMucGxheWVyLnZvbHVtZSA9IGZyYWN0aW9uO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJlbmFibGVQSVBcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5hYmxlUElQKCkge1xuICAgICAgaWYgKHRoaXMucGxheWVyLnJlcXVlc3RQaWN0dXJlSW5QaWN0dXJlICYmIGRvY3VtZW50LnBpY3R1cmVJblBpY3R1cmVFbGVtZW50ICE9PSB0aGlzLnBsYXllcikge1xuICAgICAgICB0aGlzLnBsYXllci5yZXF1ZXN0UGljdHVyZUluUGljdHVyZSgpO1xuICAgICAgfSBlbHNlIGlmICgoMCwgX3V0aWxzLnN1cHBvcnRzV2ViS2l0UHJlc2VudGF0aW9uTW9kZSkodGhpcy5wbGF5ZXIpICYmIHRoaXMucGxheWVyLndlYmtpdFByZXNlbnRhdGlvbk1vZGUgIT09ICdwaWN0dXJlLWluLXBpY3R1cmUnKSB7XG4gICAgICAgIHRoaXMucGxheWVyLndlYmtpdFNldFByZXNlbnRhdGlvbk1vZGUoJ3BpY3R1cmUtaW4tcGljdHVyZScpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkaXNhYmxlUElQXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2FibGVQSVAoKSB7XG4gICAgICBpZiAoZG9jdW1lbnQuZXhpdFBpY3R1cmVJblBpY3R1cmUgJiYgZG9jdW1lbnQucGljdHVyZUluUGljdHVyZUVsZW1lbnQgPT09IHRoaXMucGxheWVyKSB7XG4gICAgICAgIGRvY3VtZW50LmV4aXRQaWN0dXJlSW5QaWN0dXJlKCk7XG4gICAgICB9IGVsc2UgaWYgKCgwLCBfdXRpbHMuc3VwcG9ydHNXZWJLaXRQcmVzZW50YXRpb25Nb2RlKSh0aGlzLnBsYXllcikgJiYgdGhpcy5wbGF5ZXIud2Via2l0UHJlc2VudGF0aW9uTW9kZSAhPT0gJ2lubGluZScpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIud2Via2l0U2V0UHJlc2VudGF0aW9uTW9kZSgnaW5saW5lJyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFBsYXliYWNrUmF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQbGF5YmFja1JhdGUocmF0ZSkge1xuICAgICAgdGhpcy5wbGF5ZXIucGxheWJhY2tSYXRlID0gcmF0ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0RHVyYXRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RHVyYXRpb24oKSB7XG4gICAgICBpZiAoIXRoaXMucGxheWVyKSByZXR1cm4gbnVsbDtcbiAgICAgIHZhciBfdGhpcyRwbGF5ZXIgPSB0aGlzLnBsYXllcixcbiAgICAgICAgICBkdXJhdGlvbiA9IF90aGlzJHBsYXllci5kdXJhdGlvbixcbiAgICAgICAgICBzZWVrYWJsZSA9IF90aGlzJHBsYXllci5zZWVrYWJsZTsgLy8gb24gaU9TLCBsaXZlIHN0cmVhbXMgcmV0dXJuIEluZmluaXR5IGZvciB0aGUgZHVyYXRpb25cbiAgICAgIC8vIHNvIGluc3RlYWQgd2UgdXNlIHRoZSBlbmQgb2YgdGhlIHNlZWthYmxlIHRpbWVyYW5nZVxuXG4gICAgICBpZiAoZHVyYXRpb24gPT09IEluZmluaXR5ICYmIHNlZWthYmxlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHNlZWthYmxlLmVuZChzZWVrYWJsZS5sZW5ndGggLSAxKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGR1cmF0aW9uO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRDdXJyZW50VGltZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDdXJyZW50VGltZSgpIHtcbiAgICAgIGlmICghdGhpcy5wbGF5ZXIpIHJldHVybiBudWxsO1xuICAgICAgcmV0dXJuIHRoaXMucGxheWVyLmN1cnJlbnRUaW1lO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTZWNvbmRzTG9hZGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNlY29uZHNMb2FkZWQoKSB7XG4gICAgICBpZiAoIXRoaXMucGxheWVyKSByZXR1cm4gbnVsbDtcbiAgICAgIHZhciBidWZmZXJlZCA9IHRoaXMucGxheWVyLmJ1ZmZlcmVkO1xuXG4gICAgICBpZiAoYnVmZmVyZWQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuXG4gICAgICB2YXIgZW5kID0gYnVmZmVyZWQuZW5kKGJ1ZmZlcmVkLmxlbmd0aCAtIDEpO1xuICAgICAgdmFyIGR1cmF0aW9uID0gdGhpcy5nZXREdXJhdGlvbigpO1xuXG4gICAgICBpZiAoZW5kID4gZHVyYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGR1cmF0aW9uO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZW5kO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTb3VyY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U291cmNlKHVybCkge1xuICAgICAgdmFyIHVzZUhMUyA9IHRoaXMuc2hvdWxkVXNlSExTKHVybCk7XG4gICAgICB2YXIgdXNlREFTSCA9IHRoaXMuc2hvdWxkVXNlREFTSCh1cmwpO1xuICAgICAgdmFyIHVzZUZMViA9IHRoaXMuc2hvdWxkVXNlRkxWKHVybCk7XG5cbiAgICAgIGlmICh1cmwgaW5zdGFuY2VvZiBBcnJheSB8fCAoMCwgX3V0aWxzLmlzTWVkaWFTdHJlYW0pKHVybCkgfHwgdXNlSExTIHx8IHVzZURBU0ggfHwgdXNlRkxWKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChNQVRDSF9EUk9QQk9YX1VSTC50ZXN0KHVybCkpIHtcbiAgICAgICAgcmV0dXJuIHVybC5yZXBsYWNlKCd3d3cuZHJvcGJveC5jb20nLCAnZGwuZHJvcGJveHVzZXJjb250ZW50LmNvbScpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdXJsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMTEgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHVybCA9IF90aGlzJHByb3BzMTEudXJsLFxuICAgICAgICAgIHBsYXlpbmcgPSBfdGhpcyRwcm9wczExLnBsYXlpbmcsXG4gICAgICAgICAgbG9vcCA9IF90aGlzJHByb3BzMTEubG9vcCxcbiAgICAgICAgICBjb250cm9scyA9IF90aGlzJHByb3BzMTEuY29udHJvbHMsXG4gICAgICAgICAgbXV0ZWQgPSBfdGhpcyRwcm9wczExLm11dGVkLFxuICAgICAgICAgIGNvbmZpZyA9IF90aGlzJHByb3BzMTEuY29uZmlnLFxuICAgICAgICAgIHdpZHRoID0gX3RoaXMkcHJvcHMxMS53aWR0aCxcbiAgICAgICAgICBoZWlnaHQgPSBfdGhpcyRwcm9wczExLmhlaWdodDtcbiAgICAgIHZhciB1c2VBdWRpbyA9IHRoaXMuc2hvdWxkVXNlQXVkaW8odGhpcy5wcm9wcyk7XG4gICAgICB2YXIgRWxlbWVudCA9IHVzZUF1ZGlvID8gJ2F1ZGlvJyA6ICd2aWRlbyc7XG4gICAgICB2YXIgc3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiB3aWR0aCA9PT0gJ2F1dG8nID8gd2lkdGggOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0ID09PSAnYXV0bycgPyBoZWlnaHQgOiAnMTAwJSdcbiAgICAgIH07XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChFbGVtZW50LCBfZXh0ZW5kcyh7XG4gICAgICAgIHJlZjogdGhpcy5yZWYsXG4gICAgICAgIHNyYzogdGhpcy5nZXRTb3VyY2UodXJsKSxcbiAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICBwcmVsb2FkOiBcImF1dG9cIixcbiAgICAgICAgYXV0b1BsYXk6IHBsYXlpbmcgfHwgdW5kZWZpbmVkLFxuICAgICAgICBjb250cm9sczogY29udHJvbHMsXG4gICAgICAgIG11dGVkOiBtdXRlZCxcbiAgICAgICAgbG9vcDogbG9vcFxuICAgICAgfSwgY29uZmlnLmF0dHJpYnV0ZXMpLCB1cmwgaW5zdGFuY2VvZiBBcnJheSAmJiB1cmwubWFwKHRoaXMucmVuZGVyU291cmNlRWxlbWVudCksIGNvbmZpZy50cmFja3MubWFwKHRoaXMucmVuZGVyVHJhY2spKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRmlsZVBsYXllcjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRmlsZVBsYXllcjtcblxuX2RlZmluZVByb3BlcnR5KEZpbGVQbGF5ZXIsIFwiZGlzcGxheU5hbWVcIiwgJ0ZpbGVQbGF5ZXInKTtcblxuX2RlZmluZVByb3BlcnR5KEZpbGVQbGF5ZXIsIFwiY2FuUGxheVwiLCBfcGF0dGVybnMuY2FuUGxheS5maWxlKTsiXSwic291cmNlUm9vdCI6IiJ9